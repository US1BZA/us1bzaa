"use client"

import { motion } from 'framer-motion'
import { useLanguage } from '@/components/language-provider'

export function BottomMarquee() {
  const { t } = useLanguage()

  return (
    <div className="fixed bottom-0 w-full bg-background/95 backdrop-blur-sm border-t z-40">
      <div className="h-10 overflow-hidden">
        <motion.div
          className="flex items-center h-full whitespace-nowrap text-sm text-muted-foreground"
          animate={{ x: [1000, -2000] }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span className="mx-8">
            {t.marquee.cybersecurity}
          </span>
          <span className="mx-8">•</span>
          <span className="mx-8">
            {t.marquee.innovation}
          </span>
          <span className="mx-8">•</span>
          <span className="mx-8">
            {t.marquee.security}
          </span>
          <span className="mx-8">•</span>
          <span className="mx-8">
            {t.marquee.excellence}
          </span>
          <span className="mx-8">•</span>
          <span className="mx-8">
            {t.marquee.protection}
          </span>
          <span className="mx-8">•</span>
        </motion.div>
      </div>
    </div>
  )
}
