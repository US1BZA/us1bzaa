"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Terminal, Shield, Globe, Smartphone, Monitor, Code } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function ProjectsPage() {
  const { t } = useLanguage()

  const projects = [
    {
      title: "US1BZA Linux",
      description: t.projects.us1bzalinux.description,
      longDescription: t.projects.us1bzalinux.longDescription,
      tech: ["Linux Kernel", "C", "Shell", "Python", "Security Tools"],
      category: "Operating System",
      icon: Terminal,
      github: "https://github.com/us1bza/us1bzalinux",
      featured: true,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      title: "US1BZA 400 Cyber Security Tools",
      description: t.projects.us1bzatools.description,
      longDescription: t.projects.us1bzatools.longDescription,
      tech: ["Python", "Bash", "Network Security", "Penetration Testing", "OSINT"],
      category: "Security Suite",
      icon: Shield,
      github: "https://github.com/us1bza/us1bzatools",
      featured: true,
      color: "from-red-500/20 to-orange-500/20",
    },
    {
      title: "US1BZA Browser",
      description: t.projects.us1bzabrowser.description,
      longDescription: t.projects.us1bzabrowser.longDescription,
      tech: ["Chromium", "C++", "JavaScript", "Privacy", "Security"],
      category: "Web Browser",
      icon: Globe,
      github: "https://github.com/us1bza/us1bzabrowser",
      featured: true,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      title: "US1BZA Secure Android OS",
      description: t.projects.us1bzaos.description,
      longDescription: t.projects.us1bzaos.longDescription,
      tech: ["Android AOSP", "Java", "C++", "Security Hardening", "Privacy"],
      category: "Mobile OS",
      icon: Smartphone,
      github: "https://github.com/us1bza/us1bzaos",
      featured: false,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      title: "US1BZA Linux Desktop Environment",
      description: t.projects.us1bzade.description,
      longDescription: t.projects.us1bzade.longDescription,
      tech: ["GTK", "C", "Python", "X11", "Wayland"],
      category: "Desktop Environment",
      icon: Monitor,
      github: "https://github.com/us1bza/us1bzade",
      featured: false,
      color: "from-indigo-500/20 to-blue-500/20",
    },
    {
      title: "Open Source Portfolio Website",
      description: t.projects.portfolio.description,
      longDescription: t.projects.portfolio.longDescription,
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      category: "Web Development",
      icon: Code,
      github: null,
      featured: false,
      color: "from-yellow-500/20 to-orange-500/20",
    },
  ]

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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.projects.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.projects.description}</p>
      </motion.div>

      {/* Featured Projects */}
      <motion.div variants={itemVariants} className="mb-16">
        <h2 className="text-2xl font-bold mb-8">{t.projects.featured}</h2>
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <motion.div key={index} whileHover={{ y: -8, scale: 1.02 }} transition={{ duration: 0.3 }}>
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden group">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  />
                  <CardHeader className="relative z-10">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                        <project.icon className="h-6 w-6 text-primary" />
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{project.longDescription}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tech.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.github ? (
                      <Button asChild className="w-full group/btn">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
                          {t.projects.viewOnGithub}
                          <ExternalLink className="h-4 w-4 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    ) : (
                      <Button className="w-full" disabled>
                        <Github className="h-4 w-4 mr-2" />
                        Coming Soon
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>
      </motion.div>

      {/* All Projects */}
      <motion.div variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-8">{t.projects.allProjects}</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <motion.div key={index} whileHover={{ y: -5, scale: 1.02 }} transition={{ duration: 0.2 }}>
                <Card className="h-full hover:shadow-lg transition-all duration-300 group">
                  <CardHeader className="pb-3">
                    <div className="flex items-center gap-2 mb-2">
                      <project.icon className="h-5 w-5 text-primary" />
                      <Badge variant="outline" className="text-xs">
                        {project.category}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-sm">{project.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <div className="flex flex-wrap gap-1 mb-4">
                      {project.tech.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="outline" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.tech.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{project.tech.length - 3}
                        </Badge>
                      )}
                    </div>
                    {project.github ? (
                      <Button asChild variant="outline" size="sm" className="w-full group/btn bg-transparent">
                        <a href={project.github} target="_blank" rel="noopener noreferrer">
                          <Github className="h-3 w-3 mr-2" />
                          {t.projects.viewCode}
                          <ExternalLink className="h-3 w-3 ml-2 transition-transform group-hover/btn:translate-x-1" />
                        </a>
                      </Button>
                    ) : (
                      <Button variant="outline" size="sm" className="w-full bg-transparent" disabled>
                        <Github className="h-3 w-3 mr-2" />
                        Private Repository
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
        </div>
      </motion.div>
    </motion.div>
  )
}
