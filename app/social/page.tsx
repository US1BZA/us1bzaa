"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  ExternalLink,
  Github,
  Mail,
  MessageSquare,
  Shield,
  Cloud,
  Terminal,
  Code,
  Lock,
  Globe,
  AlertTriangle,
  Users,
  ShoppingCart,
  Eye,
} from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function SocialPage() {
  const { t } = useLanguage()

  const platforms = [
    // Developer & Repository Profiles
    {
      name: "GitHub",
      category: t.social.categories.development,
      icon: Github,
      url: "https://github.com/us1bza",
      username: "us1bza",
      description: t.social.platforms.github,
      color: "hover:bg-gray-100 dark:hover:bg-gray-800",
      verified: true,
    },
    {
      name: "GitLab",
      category: t.social.categories.development,
      icon: Code,
      url: "https://gitlab.com/us1bza",
      username: "us1bza",
      description: t.social.platforms.gitlab,
      color: "hover:bg-orange-50 dark:hover:bg-orange-900/20",
      verified: true,
    },
    {
      name: "Gitee",
      category: t.social.categories.development,
      icon: Code,
      url: "https://gitee.com/us1bza",
      username: "us1bza",
      description: t.social.platforms.gitee,
      color: "hover:bg-red-50 dark:hover:bg-red-900/20",
      verified: true,
    },
    // Social & Communication
    {
      name: "Telegram",
      category: t.social.categories.communication,
      icon: MessageSquare,
      url: "https://t.me/us1bza",
      username: "@us1bza",
      description: t.social.platforms.telegram,
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
      verified: true,
    },
    {
      name: "Discord",
      category: t.social.categories.communication,
      icon: MessageSquare,
      url: "#",
      username: "us1bza",
      description: t.social.platforms.discord,
      color: "hover:bg-indigo-50 dark:hover:bg-indigo-900/20",
      verified: true,
    },
    {
      name: "Matrix/Element",
      category: t.social.categories.communication,
      icon: Lock,
      url: "https://matrix.to/#/@us1bza:matrix.org",
      username: "@us1bza:matrix.org",
      description: t.social.platforms.matrix,
      color: "hover:bg-green-50 dark:hover:bg-green-900/20",
      verified: true,
    },
    // Social Networks
    {
      name: "Bluesky",
      category: t.social.categories.social,
      icon: Cloud,
      url: "https://bsky.app/profile/us1bza.bsky.social",
      username: "us1bza",
      description: t.social.platforms.bluesky,
      color: "hover:bg-sky-50 dark:hover:bg-sky-900/20",
      verified: true,
    },
    {
      name: "Mastodon",
      category: t.social.categories.social,
      icon: Globe,
      url: "https://mastodon.social/@us1bza",
      username: "@us1bza",
      description: t.social.platforms.mastodon,
      color: "hover:bg-purple-50 dark:hover:bg-purple-900/20",
      verified: true,
    },
    {
      name: "Reddit",
      category: t.social.categories.social,
      icon: MessageSquare,
      url: "https://www.reddit.com/user/us1bza",
      username: "u/us1bza",
      description: t.social.platforms.reddit,
      color: "hover:bg-orange-50 dark:hover:bg-orange-900/20",
      verified: true,
    },
    {
      name: "Lemmy",
      category: t.social.categories.social,
      icon: Users,
      url: "#",
      username: "us1bza",
      description: t.social.platforms.lemmy,
      color: "hover:bg-green-50 dark:hover:bg-green-900/20",
      verified: true,
    },
    // Technical Forums (Clearnet)
    {
      name: "4PDA",
      category: t.social.categories.forums,
      icon: Terminal,
      url: "https://4pda.to/forum/index.php",
      username: "us1bza",
      description: t.social.platforms["4pda"],
      color: "hover:bg-gray-50 dark:hover:bg-gray-900/20",
      verified: true,
    },
    {
      name: "CyberForum.ru",
      category: t.social.categories.forums,
      icon: Shield,
      url: "https://www.cyberforum.ru/",
      username: "us1bza",
      description: t.social.platforms.cyberforum,
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
      verified: true,
    },
    {
      name: "4Cheat",
      category: t.social.categories.forums,
      icon: Terminal,
      url: "https://4cheat.org/",
      username: "us1bza",
      description: t.social.platforms.cheat4,
      color: "hover:bg-gray-50 dark:hover:bg-gray-900/20",
      verified: true,
    },
    {
      name: "Xleet.sh",
      category: t.social.categories.forums,
      icon: Code,
      url: "https://xleet.sh/",
      username: "us1bza",
      description: t.social.platforms.xleet,
      color: "hover:bg-slate-50 dark:hover:bg-slate-900/20",
      verified: true,
    },
    // Security Research & Dark Web (Clearnet Gateways)
    {
      name: "XSS Forum",
      category: t.social.categories.security,
      icon: AlertTriangle,
      url: "https://xss.is",
      username: "us1bza",
      description: t.social.platforms.xss,
      color: "hover:bg-yellow-50 dark:hover:bg-yellow-900/20",
      verified: true,
    },
    {
      name: "BreachForums",
      category: t.social.categories.security,
      icon: Shield,
      url: "https://breachforums.st",
      username: "us1bza",
      description: t.social.platforms.breach,
      color: "hover:bg-red-50 dark:hover:bg-red-900/20",
      verified: true,
    },
    {
      name: "Ramp4u",
      category: t.social.categories.security,
      icon: Users,
      url: "#",
      username: "us1bza",
      description: t.social.platforms.ramp4u,
      color: "hover:bg-purple-50 dark:hover:bg-purple-900/20",
      verified: true,
    },
    {
      name: "AntiSkam.ru",
      category: t.social.categories.security,
      icon: Shield,
      url: "https://antiskam.ru/",
      username: "us1bza",
      description: t.social.platforms.antiskam,
      color: "hover:bg-green-50 dark:hover:bg-green-900/20",
      verified: true,
    },
    {
      name: "DarkSeller",
      category: t.social.categories.security,
      icon: ShoppingCart,
      url: "https://darkseller.org/",
      username: "us1bza",
      description: t.social.platforms.darkseller,
      color: "hover:bg-slate-50 dark:hover:bg-slate-900/20",
      verified: true,
    },
    {
      name: "OlkPeace",
      category: t.social.categories.security,
      icon: Globe,
      url: "https://olkpeace.org/",
      username: "us1bza",
      description: t.social.platforms.olkpeace,
      color: "hover:bg-blue-50 dark:hover:bg-blue-900/20",
      verified: true,
    },
    {
      name: "Omnia.st",
      category: t.social.categories.security,
      icon: Eye,
      url: "https://omnia.st/",
      username: "us1bza",
      description: t.social.platforms.omnias,
      color: "hover:bg-indigo-50 dark:hover:bg-indigo-900/20",
      verified: true,
    },
    {
      name: "Umbra.by",
      category: t.social.categories.security,
      icon: Lock,
      url: "https://umbra.by/",
      username: "us1bza",
      description: t.social.platforms.umbra,
      color: "hover:bg-gray-50 dark:hover:bg-gray-900/20",
      verified: true,
    },
    // Dark Web / Tor Services (Onion Links)
    {
      name: "XSS Forum (Tor)",
      category: t.social.categories.darkweb,
      icon: AlertTriangle,
      url: "https://xssforum7mmh3n56inuf2h73hvhnzobi7h2ytb3gvklrfqm7ut3xdnyd.onion/",
      username: "us1bza",
      description: t.social.platforms.xssTor,
      color: "hover:bg-purple-50 dark:hover:bg-purple-900/20",
      verified: true,
      isTor: true,
    },
    {
      name: "Dread",
      category: t.social.categories.darkweb,
      icon: MessageSquare,
      url: "https://dreadytofatroptsdj6io7l3xptbet6onoyno2yv7jicoxknyazubrad.onion/",
      username: "us1bza",
      description: t.social.platforms.dread,
      color: "hover:bg-slate-50 dark:hover:bg-slate-900/20",
      verified: true,
      isTor: true,
    },
    {
      name: "24rc (Tor)",
      category: t.social.categories.darkweb,
      icon: ShoppingCart,
      url: "http://24rcbiz4qjrqbdujezuky6bxwspryh3eou4fudnmcveo5maol2jb5xid.onion/",
      username: "us1bza",
      description: t.social.platforms.rc24,
      color: "hover:bg-orange-50 dark:hover:bg-orange-900/20",
      verified: true,
      isTor: true,
    },
    {
      name: "OMG Market",
      category: t.social.categories.darkweb,
      icon: ShoppingCart,
      url: "https://omgomgomg5j4yrr4mjdv3h5c5xfvxtqqs2in7smi65mjps7wvkmqmtqd.onion/",
      username: "us1bza",
      description: t.social.platforms.omg,
      color: "hover:bg-red-50 dark:hover:bg-red-900/20",
      verified: true,
      isTor: true,
    },
    // Fraud Prevention & Verification
    {
      name: "BLSP.at",
      category: t.social.categories.verification,
      icon: Shield,
      url: "https://blsp.at/check",
      username: "us1bza",
      description: t.social.platforms.blsp,
      color: "hover:bg-green-50 dark:hover:bg-green-900/20",
      verified: true,
    },
    {
      name: "2easy.shop",
      category: t.social.categories.security,
      icon: Eye,
      url: "https://2easy.shop/",
      username: "us1bza",
      description: t.social.platforms.easy2,
      color: "hover:bg-cyan-50 dark:hover:bg-cyan-900/20",
      verified: true,
    },
    {
      name: "OMGup1.cc",
      category: t.social.categories.security,
      icon: Globe,
      url: "https://omgup1.cc/",
      username: "us1bza",
      description: t.social.platforms.omgup,
      color: "hover:bg-violet-50 dark:hover:bg-violet-900/20",
      verified: true,
    },
    // Privacy & Secure Communication
    {
      name: "Proton Mail",
      category: t.social.categories.privacy,
      icon: Mail,
      url: "mailto:us1bza@proton.me",
      username: "us1bza@proton.me",
      description: t.social.platforms.proton,
      color: "hover:bg-purple-50 dark:hover:bg-purple-900/20",
      verified: true,
    },
    {
      name: "qTox",
      category: t.social.categories.privacy,
      icon: Lock,
      url: "#",
      username: "us1bza",
      description: t.social.platforms.qtox,
      color: "hover:bg-green-50 dark:hover:bg-green-900/20",
      verified: true,
    },
  ]

  const groupedPlatforms = platforms.reduce(
    (acc, platform) => {
      if (!acc[platform.category]) {
        acc[platform.category] = []
      }
      acc[platform.category].push(platform)
      return acc
    },
    {} as Record<string, typeof platforms>,
  )

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.05,
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.social.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.social.description}</p>
        <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">{t.social.usernameNotice}</p>
      </motion.div>

      {/* Platforms by Category */}
      {Object.entries(groupedPlatforms).map(([category, categoryPlatforms]) => (
        <motion.div key={category} variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold mb-6">{category}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryPlatforms.map((platform) => (
              <motion.div
                key={platform.name}
                variants={itemVariants}
                whileHover={{ y: -5, scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <Card
                  className={`h-full cursor-pointer transition-all duration-300 ${platform.color} hover:shadow-lg border-2 hover:border-primary/20 group`}
                >
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <platform.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 flex-wrap">
                          <h3 className="font-semibold text-lg group-hover:text-primary transition-colors">
                            {platform.name}
                          </h3>
                          {platform.verified && (
                            <div className="w-2 h-2 bg-green-500 rounded-full" title="Verified Profile" />
                          )}
                          {platform.isTor && (
                            <Badge variant="secondary" className="text-xs">
                              Tor
                            </Badge>
                          )}
                        </div>
                        <p className="text-xs text-muted-foreground font-mono">{platform.username}</p>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{platform.description}</p>
                    <Button variant="outline" size="sm" className="w-full group/btn bg-transparent" asChild>
                      <a
                        href={platform.url}
                        target={platform.url === "#" ? "_self" : "_blank"}
                        rel={platform.url === "#" ? undefined : "noopener noreferrer"}
                      >
                        <ExternalLink className="h-4 w-4 mr-2 transition-transform group-hover/btn:translate-x-1" />
                        {t.social.visitProfile}
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      ))}

      {/* Contact Section */}
      <motion.div variants={itemVariants} className="mt-16 text-center">
        <Card className="max-w-2xl mx-auto">
          <CardContent className="p-8">
            <h2 className="text-2xl font-bold mb-4">{t.social.contact.title}</h2>
            <p className="text-muted-foreground mb-6">{t.social.contact.description}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild className="group">
                <a href="mailto:us1bza@proton.me">
                  <Mail className="h-4 w-4 mr-2" />
                  {t.social.contact.email}
                </a>
              </Button>
              <Button asChild variant="outline" className="group bg-transparent">
                <a href="https://github.com/us1bza" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4 mr-2" />
                  {t.social.contact.github}
                  <ExternalLink className="h-4 w-4 ml-2 transition-transform group-hover:translate-x-1" />
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
