"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Shield, Terminal, Code, Server, Palette, Languages, Briefcase } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function AboutPage() {
  const { t } = useLanguage()
  const [skillProgress, setSkillProgress] = useState<Record<string, number>>({})

  const skills = {
    cybersecurity: [
      { name: "Penetration Testing", level: 95 },
      { name: "Vulnerability Assessment", level: 92 },
      { name: "Network Security", level: 90 },
      { name: "Digital Forensics", level: 88 },
      { name: "Incident Response", level: 85 },
      { name: "Security Architecture", level: 87 },
      { name: "AppSec", level: 89 },
      { name: "OSINT", level: 86 },
    ],
    linux: [
      { name: "BlackArch Linux", level: 95 },
      { name: "Athena OS", level: 93 },
      { name: "Arch Linux", level: 95 },
      { name: "Gentoo Linux", level: 90 },
      { name: "Void Linux", level: 88 },
      { name: "Fedora Linux", level: 90 },
      { name: "Custom Distribution Development", level: 98 },
      { name: "Kernel Modification", level: 90 },
      { name: "System Administration", level: 95 },
    ],
    development: [
      { name: "HTML/CSS", level: 92 },
      { name: "Tailwind CSS", level: 90 },
      { name: "JavaScript/TypeScript", level: 88 },
      { name: "React/Next.js", level: 85 },
      { name: "Node.js", level: 87 },
      { name: "PostgreSQL", level: 85 },
      { name: "MySQL", level: 83 },
      { name: "MongoDB", level: 80 },
    ],
    devops: [
      { name: "Docker", level: 95 },
      { name: "Kubernetes", level: 92 },
      { name: "Podman", level: 90 },
      { name: "CI/CD Pipelines", level: 88 },
      { name: "Infrastructure as Code", level: 86 },
      { name: "Cloud Security", level: 89 },
      { name: "Monitoring & Logging", level: 84 },
    ],
    languages: [
      { name: "Python", level: 94 },
      { name: "Rust", level: 85 },
      { name: "Go", level: 82 },
      { name: "C++", level: 82 },
      { name: "AI/Machine Learning", level: 78 },
    ],
    design: [
      { name: "UX/UI Design", level: 75 },
      { name: "User Experience", level: 73 },
      { name: "Interface Design", level: 70 },
    ],
  }

  const languages = [
    { name: "English", level: "Professional", flag: "🇺🇸", proficiency: 90 },
    { name: "Russian", level: "Native", flag: "🇷🇺", proficiency: 100 },
    { name: "Turkish", level: "Conversational", flag: "🇹🇷", proficiency: 75 },
    { name: "Hebrew", level: "Intermediate", flag: "🇮🇱", proficiency: 65 },
    { name: "Chinese", level: "Intermediate", flag: "🇨🇳", proficiency: 60 },
    { name: "Arabic", level: "Intermediate", flag: "🇸🇦", proficiency: 65 },
    { name: "Ottoman Turkish", level: "Intermediate", flag: "🇹🇷", proficiency: 60 },
    { name: "Uyghur", level: "Intermediate", flag: "🏴", proficiency: 55 },
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      const newProgress: Record<string, number> = {}
      Object.values(skills)
        .flat()
        .forEach((skill) => {
          newProgress[skill.name] = skill.level
        })
      setSkillProgress(newProgress)
    }, 500)

    return () => clearTimeout(timer)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1,
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

  return (
    <motion.div
      className="container mx-auto px-4 py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.about.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.about.description}</p>
      </motion.div>

      {/* Profile Section */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        <motion.div variants={itemVariants} className="lg:col-span-1">
          <Card className="text-center h-full">
            <CardContent className="pt-8">
              <div className="w-56 h-56 mx-auto mb-6 relative">
                <Image
                  src="/us1bza-avatar.png"
                  alt="US1BZA Profile"
                  fill
                  className="object-cover rounded-full border-4 border-primary/20"
                />
              </div>
              <h2 className="text-3xl font-bold mb-2">US1BZA</h2>
              <p className="text-muted-foreground mb-6">{t.about.role}</p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Shield className="w-3 h-3" />
                  {t.about.badges.security}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Terminal className="w-3 h-3" />
                  {t.about.badges.linux}
                </Badge>
                <Badge variant="secondary" className="flex items-center gap-1">
                  <Code className="w-3 h-3" />
                  {t.about.badges.developer}
                </Badge>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        <motion.div variants={itemVariants} className="lg:col-span-2">
          <Card className="h-full">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Briefcase className="h-5 w-5" />
                {t.about.experience.title}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">{t.about.experience.specialization}</h4>
                <p className="text-muted-foreground leading-relaxed">{t.about.experience.description}</p>
              </div>
              <div>
                <h4 className="font-semibold text-lg mb-2">{t.about.experience.achievements}</h4>
                <ul className="text-muted-foreground space-y-2">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {t.about.experience.achievement1}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {t.about.experience.achievement2}
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                    {t.about.experience.achievement3}
                  </li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>

      {/* Skills Section */}
      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-12">{t.about.skills.title}</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Cybersecurity Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                {t.about.skills.cybersecurity}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.cybersecurity.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skillProgress[skill.name] || 0} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Linux Development */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Terminal className="h-5 w-5 text-primary" />
                {t.about.skills.linux}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.linux.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skillProgress[skill.name] || 0} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Development Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                {t.about.skills.development}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.development.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skillProgress[skill.name] || 0} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* DevOps Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Server className="h-5 w-5 text-primary" />
                {t.about.skills.devops}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.devops.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skillProgress[skill.name] || 0} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Programming Languages */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Code className="h-5 w-5 text-primary" />
                {t.about.skills.languages}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.languages.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skillProgress[skill.name] || 0} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Design Skills */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="h-5 w-5 text-primary" />
                UX/UI Design
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {skills.design.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="text-sm font-medium">{skill.name}</span>
                    <span className="text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <Progress value={skillProgress[skill.name] || 0} className="h-2" />
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </motion.div>

      {/* Languages Section */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Languages className="h-5 w-5" />
              {t.about.languages.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {languages.map((lang) => (
                <div key={lang.name} className="text-center">
                  <div className="text-4xl mb-2">{lang.flag}</div>
                  <h4 className="font-semibold mb-1">{lang.name}</h4>
                  <Badge variant="outline" className="mb-2">
                    {lang.level}
                  </Badge>
                  <Progress value={lang.proficiency} className="h-2" />
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
