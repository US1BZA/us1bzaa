"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight, Code, Shield, Terminal, Lock, Globe } from "lucide-react"
import Link from "next/link"
import { useLanguage } from "@/components/language-provider"
import Image from "next/image"

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
}

const floatingAnimation = {
  y: [-10, 10, -10],
  transition: {
    duration: 6,
    repeat: Number.POSITIVE_INFINITY,
    ease: "easeInOut",
  },
} as const

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"
          animate={floatingAnimation as any}
        />
        <motion.div
          className="absolute top-40 right-20 w-32 h-32 bg-primary/5 rounded-full blur-2xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
        <motion.div
          className="absolute bottom-40 left-1/4 w-24 h-24 bg-primary/8 rounded-full blur-xl"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        />
        <motion.div
          className="absolute bottom-20 right-1/3 w-16 h-16 bg-primary/12 rounded-full blur-lg"
          animate={{ y: [-10, 10, -10] }}
          transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 0.5 }}
        />
      </div>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative z-10 px-4 pt-20">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Logo */}
          <motion.div variants={itemVariants} className="mb-4">
            <div className="w-56 h-56 mx-auto mb-6 relative">
              <Image
                src="/us1bza-avatar.png"
                alt="US1BZA Logo"
                fill
                className="object-cover rounded-full border-4 border-primary/20"
                priority
              />
            </div>
          </motion.div>

          {/* Animated Title */}
          <motion.div variants={itemVariants} className="mb-8">
            <motion.h1
              className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-foreground via-primary to-foreground bg-clip-text text-transparent"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              US1BZA
            </motion.h1>
            <motion.div
              className="h-1 w-24 bg-gradient-to-r from-primary to-primary/50 mx-auto rounded-full"
              initial={{ width: 0 }}
              animate={{ width: 96 }}
              transition={{ duration: 1, delay: 1 }}
            />
          </motion.div>

          {/* Professional Tagline */}
          <motion.div variants={itemVariants} className="mb-12">
            <p className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">{t.home.tagline}</p>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">{t.home.subtitle}</p>
          </motion.div>

          {/* Expertise Icons */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-8 mb-8">
              <motion.div
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Shield className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">{t.home.expertise.security}</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Terminal className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">{t.home.expertise.linux}</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Code className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">{t.home.expertise.development}</span>
              </motion.div>
              <motion.div
                className="flex flex-col items-center gap-2 p-4 rounded-lg bg-background/50 backdrop-blur-sm border border-border/50"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <Lock className="h-8 w-8 text-primary" />
                <span className="text-sm font-medium">{t.home.expertise.pentesting}</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Call-to-Action Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild size="lg" className="group px-8 py-3 text-lg">
                <Link href="/projects">
                  {t.home.cta.projects}
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button asChild variant="outline" size="lg" className="group px-8 py-3 text-lg bg-transparent">
                <Link href="/about">
                  {t.home.cta.about}
                  <Globe className="ml-2 h-5 w-5 transition-transform group-hover:rotate-12" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>
    </div>
  )
}
