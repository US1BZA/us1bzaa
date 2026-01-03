"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Play, Pause, SkipBack, SkipForward, Volume2, VolumeX, Music, Shield, AlertCircle } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

declare global {
  interface Window {
    YT: any
    onYouTubeIframeAPIReady: () => void
  }
}

let globalPlayer: any = null
const globalPlayerState = {
  isPlaying: false,
  currentTrack: 0,
  volume: 50,
  isMuted: false,
  isPlayerReady: false,
  isInitialized: false,
  isEnabled: false,
}

let globalStateCallbacks: Array<(state: any) => void> = []

const isDev = process.env.NODE_ENV === "development"
const devLog = (...args: any[]) => {
  if (isDev) console.log(...args)
}
const devError = (...args: any[]) => {
  if (isDev) console.error(...args)
}

export function MusicPlayer() {
  const [isOpen, setIsOpen] = useState(false)
  const [isEnabled, setIsEnabled] = useState(globalPlayerState.isEnabled)
  const [showConsent, setShowConsent] = useState(false)
  const [isPlaying, setIsPlaying] = useState(globalPlayerState.isPlaying)
  const [currentTrack, setCurrentTrack] = useState(globalPlayerState.currentTrack)
  const [volume, setVolume] = useState(globalPlayerState.volume)
  const [isMuted, setIsMuted] = useState(globalPlayerState.isMuted)
  const [isPlayerReady, setIsPlayerReady] = useState(globalPlayerState.isPlayerReady)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [retryCount, setRetryCount] = useState(0)

  const playlist = [
    { id: "FuqwJmPc_8I", title: "Track 1" },
    { id: "8XxsvFZxDOs", title: "Track 2" },
    { id: "FS6v-hHBRhQ", title: "Track 3" },
    { id: "1u7WN2zBEDc", title: "Track 4" },
  ]

  const syncState = () => {
    setIsEnabled(globalPlayerState.isEnabled)
    setIsPlaying(globalPlayerState.isPlaying)
    setCurrentTrack(globalPlayerState.currentTrack)
    setVolume(globalPlayerState.volume)
    setIsMuted(globalPlayerState.isMuted)
    setIsPlayerReady(globalPlayerState.isPlayerReady)
  }

  useEffect(() => {
    globalStateCallbacks.push(syncState)
    syncState()

    return () => {
      globalStateCallbacks = globalStateCallbacks.filter((cb) => cb !== syncState)
    }
  }, [])

  const initializePlayer = () => {
    if (globalPlayerState.isInitialized) return

    devLog("Initializing YouTube player...")
    setIsLoading(true)
    setError(null)
    globalPlayerState.isInitialized = true
    globalPlayerState.isEnabled = true

    try {
      if (!window.YT || !window.YT.Player) {
        const existingScript = document.querySelector('script[src*="youtube.com/iframe_api"]')

        if (!existingScript) {
          devLog("Loading YouTube IFrame API script...")
          const tag = document.createElement("script")
          tag.src = "https://www.youtube.com/iframe_api"
          tag.async = true
          tag.id = "youtube-iframe-api"

          tag.onerror = (e) => {
            devError("Failed to load YouTube IFrame API:", e)
            setIsLoading(false)
            setError("Cannot load YouTube player. Please check your network connection or disable ad blockers.")
            globalPlayerState.isInitialized = false

            if (retryCount < 3) {
              setTimeout(() => {
                devLog(`Retrying... (${retryCount + 1}/3)`)
                setRetryCount(retryCount + 1)
                globalPlayerState.isInitialized = false
                initializePlayer()
              }, 3000)
            }
          }

          tag.onload = () => {
            devLog("YouTube IFrame API script loaded successfully")
          }

          const firstScriptTag = document.getElementsByTagName("script")[0]
          firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag)
        }
      }

      let timeoutId: NodeJS.Timeout

      window.onYouTubeIframeAPIReady = () => {
        clearTimeout(timeoutId)
        devLog("YouTube IFrame API ready, creating player...")

        try {
          const existingContainer = document.getElementById("youtube-player-container")
          if (existingContainer) {
            existingContainer.remove()
          }

          const playerContainer = document.createElement("div")
          playerContainer.id = "youtube-player-container"
          playerContainer.style.display = "none"
          document.body.appendChild(playerContainer)

          globalPlayer = new window.YT.Player("youtube-player-container", {
            height: "0",
            width: "0",
            videoId: playlist[0].id,
            playerVars: {
              autoplay: 0,
              controls: 0,
              disablekb: 1,
              fs: 0,
              modestbranding: 1,
              rel: 0,
              enablejsapi: 1,
              origin: window.location.origin,
            },
            events: {
              onReady: () => {
                devLog("YouTube player ready")
                globalPlayer?.setVolume(globalPlayerState.volume)
                globalPlayerState.isPlayerReady = true
                setIsPlayerReady(true)
                setIsLoading(false)
                setError(null)
                setRetryCount(0)
                globalStateCallbacks.forEach((callback) => callback(globalPlayerState))
              },
              onStateChange: (event: any) => {
                if (event.data === window.YT.PlayerState.ENDED) {
                  nextTrack()
                }
                const playing = event.data === window.YT.PlayerState.PLAYING
                globalPlayerState.isPlaying = playing
                globalStateCallbacks.forEach((callback) => callback(globalPlayerState))
              },
              onError: (event: any) => {
                devError("YouTube player error:", event.data)
                setIsLoading(false)

                const errorMessages: Record<number, string> = {
                  2: "Invalid video parameter. The video may be unavailable.",
                  5: "HTML5 player error. Your browser may not support playback.",
                  100: "Video not found. It may have been removed or made private.",
                  101: "Video cannot be played in embedded players.",
                  150: "Video cannot be played in embedded players.",
                }

                setError(errorMessages[event.data] || "Playback error. Please try another track.")
              },
            },
          })
        } catch (err) {
          devError("Player initialization error:", err)
          setIsLoading(false)
          setError("Failed to create player. Please refresh and try again.")
          globalPlayerState.isInitialized = false
        }
      }

      timeoutId = setTimeout(() => {
        if (!globalPlayerState.isPlayerReady) {
          devError("YouTube API load timeout")
          setIsLoading(false)
          setError("YouTube player took too long to load. Please check your connection.")
          globalPlayerState.isInitialized = false
        }
      }, 15000)

      if (window.YT && window.YT.Player) {
        devLog("YouTube API already loaded, initializing immediately")
        window.onYouTubeIframeAPIReady()
      }
    } catch (err) {
      devError("Player setup error:", err)
      setIsLoading(false)
      setError("Failed to initialize music player. Please try again.")
      globalPlayerState.isInitialized = false
    }
  }

  const handleEnableMusic = () => {
    setShowConsent(true)
  }

  const handleAcceptConsent = () => {
    setShowConsent(false)
    setIsEnabled(true)
    setIsOpen(true)
    initializePlayer()
  }

  const handleRetry = () => {
    setError(null)
    setRetryCount(0)
    globalPlayerState.isInitialized = false
    initializePlayer()
  }

  const togglePlay = () => {
    if (globalPlayer && isPlayerReady) {
      try {
        if (isPlaying) {
          globalPlayer.pauseVideo()
        } else {
          globalPlayer.playVideo()
        }
      } catch (err) {
        devError("Playback control error:", err)
        setError("Playback control failed")
      }
    }
  }

  const nextTrack = () => {
    const next = (currentTrack + 1) % playlist.length
    globalPlayerState.currentTrack = next
    if (globalPlayer && isPlayerReady) {
      try {
        globalPlayer.loadVideoById(playlist[next].id)
        if (isPlaying) {
          globalPlayer.playVideo()
        }
      } catch (err) {
        devError("Track change error:", err)
      }
    }
    globalStateCallbacks.forEach((callback) => callback(globalPlayerState))
  }

  const prevTrack = () => {
    const prev = currentTrack === 0 ? playlist.length - 1 : currentTrack - 1
    globalPlayerState.currentTrack = prev
    if (globalPlayer && isPlayerReady) {
      try {
        globalPlayer.loadVideoById(playlist[prev].id)
        if (isPlaying) {
          globalPlayer.playVideo()
        }
      } catch (err) {
        devError("Track change error:", err)
      }
    }
    globalStateCallbacks.forEach((callback) => callback(globalPlayerState))
  }

  const toggleMute = () => {
    if (globalPlayer && isPlayerReady) {
      try {
        if (isMuted) {
          globalPlayer.unMute()
          globalPlayer.setVolume(volume)
        } else {
          globalPlayer.mute()
        }
        globalPlayerState.isMuted = !isMuted
        globalStateCallbacks.forEach((callback) => callback(globalPlayerState))
      } catch (err) {
        devError("Mute toggle error:", err)
      }
    }
  }

  const handleVolumeChange = (newVolume: number) => {
    globalPlayerState.volume = newVolume
    if (globalPlayer && !isMuted && isPlayerReady) {
      try {
        globalPlayer.setVolume(newVolume)
      } catch (err) {
        devError("Volume change error:", err)
      }
    }
    globalStateCallbacks.forEach((callback) => callback(globalPlayerState))
  }

  if (showConsent) {
    return (
      <div className="fixed inset-0 bg-black/50 z-[100] flex items-center justify-center p-4">
        <Card className="max-w-md p-6 space-y-4">
          <div className="flex items-center gap-3">
            <Shield className="h-8 w-8 text-primary" />
            <h3 className="text-xl font-bold">Enable Music Player</h3>
          </div>
          <p className="text-sm text-muted-foreground">
            This will load the YouTube IFrame API to play background music. By continuing, you consent to:
          </p>
          <ul className="text-sm text-muted-foreground list-disc list-inside space-y-1">
            <li>Loading third-party scripts from YouTube</li>
            <li>YouTube may collect analytics and usage data</li>
            <li>Network requests to YouTube servers</li>
          </ul>
          <p className="text-xs text-muted-foreground">You can disable this at any time by closing the player.</p>
          <div className="flex gap-3">
            <Button onClick={handleAcceptConsent} className="flex-1">
              Accept & Enable
            </Button>
            <Button onClick={() => setShowConsent(false)} variant="outline" className="flex-1 bg-transparent">
              Cancel
            </Button>
          </div>
        </Card>
      </div>
    )
  }

  if (!isEnabled) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <Button onClick={handleEnableMusic} className="h-12 w-12 rounded-full shadow-lg">
          <Music className="h-5 w-5" />
        </Button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.2 }}
            className="mb-4"
          >
            <Card className="p-4 w-80 bg-background/95 backdrop-blur-sm border shadow-lg">
              <div className="space-y-4">
                {error && (
                  <div className="text-xs text-destructive text-center p-3 bg-destructive/10 rounded space-y-2">
                    <div className="flex items-center justify-center gap-2">
                      <AlertCircle className="h-4 w-4" />
                      <span className="font-medium">Error</span>
                    </div>
                    <p>{error}</p>
                    {retryCount < 3 && (
                      <Button onClick={handleRetry} size="sm" variant="outline" className="w-full mt-2 bg-transparent">
                        Retry ({3 - retryCount} attempts left)
                      </Button>
                    )}
                  </div>
                )}

                {isLoading && !error && (
                  <div className="text-xs text-center p-2 bg-primary/10 rounded">
                    <p className="text-primary font-medium">Loading YouTube player...</p>
                    <p className="text-muted-foreground mt-1">This may take a few seconds</p>
                  </div>
                )}

                <div className="text-center">
                  <h4 className="font-medium text-sm">Now Playing</h4>
                  <p className="text-xs text-muted-foreground">
                    {playlist[currentTrack].title} ({currentTrack + 1}/{playlist.length})
                  </p>
                </div>

                <div className="flex items-center justify-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={prevTrack}
                    className="h-8 w-8 p-0"
                    disabled={!isPlayerReady || isLoading}
                  >
                    <SkipBack className="h-4 w-4" />
                  </Button>

                  <Button
                    variant="default"
                    size="sm"
                    onClick={togglePlay}
                    className="h-10 w-10 p-0"
                    disabled={!isPlayerReady || isLoading}
                  >
                    {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                  </Button>

                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={nextTrack}
                    className="h-8 w-8 p-0"
                    disabled={!isPlayerReady || isLoading}
                  >
                    <SkipForward className="h-4 w-4" />
                  </Button>
                </div>

                <div className="flex items-center space-x-2">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={toggleMute}
                    className="h-6 w-6 p-0"
                    disabled={!isPlayerReady || isLoading}
                  >
                    {isMuted ? <VolumeX className="h-3 w-3" /> : <Volume2 className="h-3 w-3" />}
                  </Button>
                  <input
                    type="range"
                    min="0"
                    max="100"
                    value={isMuted ? 0 : volume}
                    onChange={(e) => handleVolumeChange(Number.parseInt(e.target.value))}
                    className="flex-1 h-1 bg-muted rounded-lg appearance-none cursor-pointer"
                    disabled={!isPlayerReady || isLoading}
                  />
                  <span className="text-xs text-muted-foreground w-8">{isMuted ? 0 : volume}</span>
                </div>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>

      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="h-12 w-12 rounded-full shadow-lg"
        variant={isOpen ? "secondary" : "default"}
      >
        <Music className="h-5 w-5" />
        {isPlaying && <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse" />}
      </Button>
    </div>
  )
}
