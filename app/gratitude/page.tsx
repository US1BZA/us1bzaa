"use client"

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Heart, Shield, Users, Award, BookOpen, Star, Globe, Terminal, Code, MessageSquare } from 'lucide-react'
import { useLanguage } from '@/components/language-provider'

export default function GratitudePage() {
  const { t } = useLanguage()

  const hackers = [
    {
      name: "Evgeniy Bogachev",
      category: t.gratitude.categories.hacker,
      description: t.gratitude.hackers.bogachev,
      icon: Terminal
    },
    {
      name: "Maksim Yakubets",
      category: t.gratitude.categories.hacker,
      description: t.gratitude.hackers.yakubets,
      icon: Code
    },
    {
      name: "Kevin Mitnick",
      category: t.gratitude.categories.legend,
      description: t.gratitude.hackers.mitnick,
      icon: Shield
    },
    {
      name: "Cyber Warrior",
      category: t.gratitude.categories.hacker,
      description: t.gratitude.hackers.cyberwarrior,
      icon: Shield
    },
    {
      name: "Aflonzo Aytemkov",
      category: t.gratitude.categories.hacker,
      description: t.gratitude.hackers.aflonzo,
      icon: Terminal
    },
    {
      name: "Alexei Saytnkov",
      category: t.gratitude.categories.hacker,
      description: t.gratitude.hackers.alexei,
      icon: Code
    },
    {
      name: "dreadditevelidot",
      category: t.gratitude.categories.hacker,
      description: t.gratitude.hackers.dreadditevelidot,
      icon: Globe
    }
  ]

  const groups = [
    {
      name: "Sofacy",
      category: t.gratitude.categories.group,
      description: t.gratitude.groups.sofacy,
      icon: Users
    },
    {
      name: "The Dukes",
      category: t.gratitude.categories.group,
      description: t.gratitude.groups.dukes,
      icon: Shield
    },
    {
      name: "LulzSec",
      category: t.gratitude.categories.group,
      description: t.gratitude.groups.lulzsec,
      icon: Terminal
    }
  ]

  const forums = [
    {
      name: "nulled",
      category: t.gratitude.categories.forum,
      description: t.gratitude.forums.nulled,
      icon: MessageSquare
    },
    {
      name: "RAMP",
      category: t.gratitude.categories.marketplace,
      description: t.gratitude.forums.ramp,
      icon: Globe
    },
    {
      name: "BHN Onion",
      category: t.gratitude.categories.forum,
      description: t.gratitude.forums.bhn,
      icon: Globe
    },
    {
      name: "RutorBoard",
      category: t.gratitude.categories.forum,
      description: t.gratitude.forums.rutor,
      icon: MessageSquare
    },
    {
      name: "0day.today",
      category: t.gratitude.categories.exploit,
      description: t.gratitude.forums.zeroday,
      icon: Code
    }
  ]

  const islamicScholars = [
    {
      name: "Kadir Mısıroğlu",
      category: t.gratitude.categories.historian,
      description: t.gratitude.scholars.misirolu,
      icon: BookOpen
    },
    {
      name: "Said Nursi",
      category: t.gratitude.categories.scholar,
      description: t.gratitude.scholars.nursi,
      icon: Star
    },
    {
      name: "Muhammed Nazım Adil el-Hakkânî el-Kıbrısî",
      category: t.gratitude.categories.sufi,
      description: t.gratitude.scholars.nazim,
      icon: Heart
    },
    {
      name: "Şeyh Said Efendi Çirkevi",
      category: t.gratitude.categories.sheikh,
      description: t.gratitude.scholars.said,
      icon: Star
    },
    {
      name: "Kunta-Hacı Kişiyev",
      category: t.gratitude.categories.guide,
      description: t.gratitude.scholars.kunta,
      icon: Heart
    },
    {
      name: "Vyaçeslav Polosin",
      category: t.gratitude.categories.convert,
      description: t.gratitude.scholars.polosin,
      icon: BookOpen
    },
    {
      name: "Damir Hazrat Gizatullin",
      category: t.gratitude.categories.imam,
      description: t.gratitude.scholars.damir,
      icon: Star
    },
    {
      name: "İmam Gazzali",
      category: t.gratitude.categories.classical,
      description: t.gratitude.scholars.gazzali,
      icon: BookOpen
    },
    {
      name: "İmam Şafi",
      category: t.gratitude.categories.classical,
      description: t.gratitude.scholars.shafi,
      icon: Award
    },
    {
      name: "İmam Azam Ebu Hanife",
      category: t.gratitude.categories.classical,
      description: t.gratitude.scholars.hanife,
      icon: Star
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  }

  return (
    <motion.div
      className="container mx-auto px-4 py-24 pb-20"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Header */}
      <motion.div variants={itemVariants} className="text-center mb-16">
        <div className="flex items-center justify-center mb-4">
          <Heart className="h-8 w-8 text-red-500 mr-3" />
          <h1 className="text-4xl md:text-5xl font-bold">{t.gratitude.title}</h1>
          <Heart className="h-8 w-8 text-red-500 ml-3" />
        </div>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          {t.gratitude.description}
        </p>
      </motion.div>

      {/* Individual Hackers */}
      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
          <Terminal className="h-6 w-6 mr-3 text-blue-500" />
          {t.gratitude.sections.hackers}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {hackers.map((hacker, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group border-blue-200/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-colors">
                      <hacker.icon className="h-5 w-5 text-blue-600" />
                    </div>
                    <Badge variant="secondary" className="text-xs border-blue-200">{hacker.category}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-blue-600 transition-colors">
                    {hacker.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">
                    {hacker.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Hacker Groups */}
      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
          <Users className="h-6 w-6 mr-3 text-purple-500" />
          {t.gratitude.sections.groups}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {groups.map((group, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group border-purple-200/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-colors">
                      <group.icon className="h-5 w-5 text-purple-600" />
                    </div>
                    <Badge variant="secondary" className="text-xs border-purple-200">{group.category}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-purple-600 transition-colors">
                    {group.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">
                    {group.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Forums & Platforms */}
      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
          <Globe className="h-6 w-6 mr-3 text-green-500" />
          {t.gratitude.sections.forums}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {forums.map((forum, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group border-green-200/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <forum.icon className="h-5 w-5 text-green-600" />
                    <Badge variant="outline" className="text-xs border-green-200">{forum.category}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-green-600 transition-colors">
                    {forum.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">
                    {forum.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Islamic Scholars & Spiritual Guides */}
      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8 flex items-center justify-center">
          <Star className="h-6 w-6 mr-3 text-yellow-500" />
          {t.gratitude.sections.spiritual}
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {islamicScholars.map((scholar, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 group border-yellow-200/20">
                <CardHeader className="pb-3">
                  <div className="flex items-center gap-2 mb-2">
                    <scholar.icon className="h-5 w-5 text-yellow-600" />
                    <Badge variant="outline" className="text-xs border-yellow-200">{scholar.category}</Badge>
                  </div>
                  <CardTitle className="text-lg group-hover:text-yellow-600 transition-colors">
                    {scholar.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">
                    {scholar.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Closing Message */}
      <motion.div variants={itemVariants} className="mt-16 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <Heart className="h-12 w-12 text-red-500 mx-auto mb-4" />
            <h3 className="text-2xl font-bold mb-4">{t.gratitude.closing.title}</h3>
            <p className="text-muted-foreground leading-relaxed">
              {t.gratitude.closing.message}
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
