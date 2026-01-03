"use client"

import { motion } from 'framer-motion'

export function Header() {
  return (
    <div className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b z-50">
      <div className="h-12 overflow-hidden">
        <motion.div
          className="flex items-center h-full whitespace-nowrap text-sm text-muted-foreground"
          animate={{ x: [1000, -1000] }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <span className="mx-8">
            Professional Cybersecurity Expert & Full-Stack Developer
          </span>
          <span className="mx-8">•</span>
          <span className="mx-8">
            Securing Digital Infrastructure with Advanced Technologies
          </span>
          <span className="mx-8">•</span>
          <span className="mx-8">
            Penetration Testing • Vulnerability Assessment • Secure Development
          </span>
          <span className="mx-8">•</span>
          <span className="mx-8">
            Профессиональный эксперт по кибербезопасности и Full-Stack разработчик
          </span>
          <span className="mx-8">•</span>
        </motion.div>
      </div>
    </div>
  )
}
