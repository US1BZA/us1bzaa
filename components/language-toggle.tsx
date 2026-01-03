"use client"

import { Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { useLanguage } from '@/components/language-provider'
import { motion } from 'framer-motion'

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="relative"
    >
      <motion.div
        className="flex items-center gap-1"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Languages className="h-4 w-4" />
        <span className="text-xs font-medium">{language.toUpperCase()}</span>
      </motion.div>
      <span className="sr-only">Toggle language</span>
    </Button>
  )
}
