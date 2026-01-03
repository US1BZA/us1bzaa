"use client"

import { useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertTriangle, RefreshCcw, Home } from "lucide-react"
import Link from "next/link"

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    if (process.env.NODE_ENV === "development") {
      console.error("[DEV] Error occurred:", error)
    } else {
      // In production, log only safe metadata (no sensitive error messages)
      console.error("[PROD] Error digest:", error.digest)
      // TODO: Send to Sentry or logging service: { digest: error.digest, timestamp: Date.now() }
    }
  }, [error])

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <Card className="max-w-md w-full">
        <CardHeader>
          <div className="flex items-center gap-3 mb-2">
            <AlertTriangle className="h-8 w-8 text-destructive" />
            <CardTitle className="text-2xl">Something went wrong</CardTitle>
          </div>
          <CardDescription>An unexpected error occurred. Please try again.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          {process.env.NODE_ENV === "development" && error.message && (
            <div className="p-3 bg-destructive/10 rounded-md">
              <p className="text-xs text-destructive font-mono break-words">{error.message}</p>
            </div>
          )}

          <div className="flex flex-col gap-3">
            <Button onClick={() => reset()} className="w-full">
              <RefreshCcw className="mr-2 h-4 w-4" />
              Try Again
            </Button>
            <Button asChild variant="outline" className="w-full bg-transparent">
              <Link href="/">
                <Home className="mr-2 h-4 w-4" />
                Return Home
              </Link>
            </Button>
          </div>

          {error.digest && (
            <p className="text-xs text-center text-muted-foreground">Error ID: {error.digest.slice(0, 8)}</p>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
