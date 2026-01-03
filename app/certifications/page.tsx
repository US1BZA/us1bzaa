"use client"
import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Shield, Cloud, Network, Lock, Eye, Calendar, Building, Terminal } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export default function CertificationsPage() {
  const { t } = useLanguage()

  const certifications = [
    {
      name: "CompTIA Security+",
      authority: "CompTIA",
      category: "Security Fundamentals",
      icon: Shield,
      year: "2016",
      status: "Active",
      description: t.certifications.securityplus.description,
      color: "from-purple-500/20 to-pink-500/20",
    },
    {
      name: "Cisco Certified Network Associate (CCNA)",
      authority: "Cisco",
      category: "Networking",
      icon: Network,
      year: "2017",
      status: "Active",
      description: t.certifications.ccna.description,
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      name: "Red Hat Certified System Administrator (RHCSA)",
      authority: "Red Hat",
      category: "Linux Administration",
      icon: Terminal,
      year: "2019",
      status: "Active",
      description: t.certifications.rhcsa.description,
      color: "from-red-500/20 to-orange-500/20",
    },
    {
      name: "Certified Ethical Hacker (CEH)",
      authority: "EC-Council",
      category: "Ethical Hacking",
      icon: Shield,
      year: "2020",
      status: "Active",
      description: t.certifications.ceh.description,
      color: "from-green-500/20 to-emerald-500/20",
    },
    {
      name: "Red Hat Certified Engineer (RHCE)",
      authority: "Red Hat",
      category: "Linux Engineering",
      icon: Terminal,
      year: "2021",
      status: "Active",
      description: t.certifications.rhce.description,
      color: "from-red-500/20 to-pink-500/20",
    },
    {
      name: "Certified Information Systems Security Professional (CISSP)",
      authority: "ISC2",
      category: "Information Security",
      icon: Shield,
      year: "2021",
      status: "Active",
      description: t.certifications.cissp.description,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "AWS Certified Security - Specialty",
      authority: "Amazon Web Services",
      category: "Cloud Security",
      icon: Cloud,
      year: "2022",
      status: "Active",
      description: t.certifications.awssecurity.description,
      color: "from-orange-500/20 to-yellow-500/20",
    },
    {
      name: "Fortinet Network Security Expert (NSE 4)",
      authority: "Fortinet",
      category: "Network Security",
      icon: Shield,
      year: "2022",
      status: "Active",
      description: t.certifications.nse4.description,
      color: "from-red-500/20 to-pink-500/20",
    },
    {
      name: "Docker Certified Associate (DCA)",
      authority: "Docker Inc.",
      category: "Containerization",
      icon: Cloud,
      year: "2023",
      status: "Active",
      description: t.certifications.dca.description,
      color: "from-cyan-500/20 to-blue-500/20",
    },
    {
      name: "Certified Kubernetes Administrator (CKA)",
      authority: "Cloud Native Computing Foundation",
      category: "Container Orchestration",
      icon: Cloud,
      year: "2023",
      status: "Active",
      description: t.certifications.cka.description,
      color: "from-blue-500/20 to-indigo-500/20",
    },
    {
      name: "Microsoft Azure Security Engineer Associate",
      authority: "Microsoft",
      category: "Cloud Security",
      icon: Cloud,
      year: "2024",
      status: "Active",
      description: t.certifications.azuresecurity.description,
      color: "from-blue-500/20 to-cyan-500/20",
    },
    {
      name: "Offensive Security Certified Professional (OSCP)",
      authority: "Offensive Security",
      category: "Penetration Testing",
      icon: Shield,
      year: "2024",
      status: "Active",
      description: t.certifications.oscp.description,
      color: "from-red-500/20 to-orange-500/20",
    },
    {
      name: "Certified Kubernetes Security Specialist (CKS)",
      authority: "Cloud Native Computing Foundation",
      category: "Kubernetes Security",
      icon: Shield,
      year: "2024",
      status: "Active",
      description: t.certifications.cks.description,
      color: "from-purple-500/20 to-blue-500/20",
    },
    {
      name: "Red Hat Certified Specialist in Security",
      authority: "Red Hat",
      category: "Linux Security",
      icon: Shield,
      year: "2025",
      status: "Active",
      description: t.certifications.rhcss.description,
      color: "from-red-500/20 to-purple-500/20",
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
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{t.certifications.title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{t.certifications.description}</p>
      </motion.div>

      {/* Certifications Grid */}
      <motion.div variants={itemVariants} className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            whileHover={{ y: -5, scale: 1.02 }}
            transition={{ duration: 0.3 }}
          >
            <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/20 overflow-hidden group">
              <div
                className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
              />
              <CardHeader className="relative z-10">
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                    <cert.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="secondary" className="text-xs">
                      {cert.category}
                    </Badge>
                    <div className="w-2 h-2 bg-green-500 rounded-full" title="Active Certification" />
                  </div>
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  {cert.name}
                </CardTitle>
                <CardDescription className="flex items-center gap-2">
                  <Building className="h-4 w-4" />
                  {cert.authority}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <p className="text-sm text-muted-foreground mb-4 line-clamp-3">{cert.description}</p>

                <div className="flex items-center justify-between text-sm mb-4">
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{cert.year}</span>
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {cert.status}
                  </Badge>
                </div>

                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-full group/btn bg-transparent">
                      <Eye className="h-4 w-4 mr-2" />
                      {t.certifications.viewCertificateId}
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle className="flex items-center gap-2">
                        <Lock className="h-5 w-5 text-primary" />
                        {t.certifications.modal.title}
                      </DialogTitle>
                      <DialogDescription>{t.certifications.modal.description}</DialogDescription>
                    </DialogHeader>
                    <div className="space-y-4">
                      <div className="p-4 bg-muted/50 rounded-lg border border-dashed border-muted-foreground/30">
                        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-2">
                          <Shield className="h-4 w-4" />
                          <span>{t.certifications.modal.confidential}</span>
                        </div>
                        <p className="text-sm">{t.certifications.modal.reason}</p>
                      </div>
                      <div className="text-center">
                        <p className="text-sm text-muted-foreground mb-4">{t.certifications.modal.verification}</p>
                        <Button asChild variant="outline" size="sm">
                          <a href="mailto:contact@us1bza.dev">{t.certifications.modal.contact}</a>
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Statistics Section */}
      <motion.div variants={itemVariants}>
        <Card>
          <CardHeader>
            <CardTitle className="text-center">{t.certifications.stats.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-4 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-primary mb-2">{certifications.length}</div>
                <p className="text-sm text-muted-foreground">{t.certifications.stats.total}</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">
                  {certifications.filter((c) => c.status === "Active").length}
                </div>
                <p className="text-sm text-muted-foreground">{t.certifications.stats.active}</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">7</div>
                <p className="text-sm text-muted-foreground">{t.certifications.stats.authorities}</p>
              </div>
              <div>
                <div className="text-3xl font-bold text-primary mb-2">2025</div>
                <p className="text-sm text-muted-foreground">{t.certifications.stats.latest}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>
    </motion.div>
  )
}
