"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "en" | "ru"

interface Translations {
  nav: {
    home: string
    about: string
    projects: string
    social: string
    certifications: string
    gratitude: string
  }
  home: {
    tagline: string
    subtitle: string
    expertise: {
      security: string
      linux: string
      development: string
      pentesting: string
    }
    cta: {
      projects: string
      about: string
    }
  }
  about: {
    title: string
    description: string
    role: string
    badges: {
      security: string
      linux: string
      developer: string
    }
    experience: {
      title: string
      specialization: string
      description: string
      achievements: string
      achievement1: string
      achievement2: string
      achievement3: string
    }
    skills: {
      title: string
      cybersecurity: string
      linux: string
      development: string
      devops: string
      languages: string
      ai: string
    }
    languages: {
      title: string
    }
  }
  projects: {
    title: string
    description: string
    featured: string
    allProjects: string
    viewOnGithub: string
    viewCode: string
    us1bzalinux: {
      description: string
      longDescription: string
    }
    us1bzatools: {
      description: string
      longDescription: string
    }
    us1bzabrowser: {
      description: string
      longDescription: string
    }
    us1bzaos: {
      description: string
      longDescription: string
    }
    us1bzade: {
      description: string
      longDescription: string
    }
    portfolio: {
      description: string
      longDescription: string
    }
  }
  social: {
    title: string
    description: string
    usernameNotice: string
    visitProfile: string
    categories: {
      development: string
      security: string
      certification: string
      cloud: string
      privacy: string
      professional: string
      communication: string
      social: string
      forums: string
      darkweb: string
      verification: string
    }
    platforms: {
      github: string
      gitlab: string
      gitee: string
      telegram: string
      discord: string
      matrix: string
      bluesky: string
      mastodon: string
      reddit: string
      lemmy: string
      "4pda": string
      cyberforum: string
      cheat4: string
      xleet: string
      xss: string
      xssTor: string
      breach: string
      ramp4u: string
      antiskam: string
      darkseller: string
      olkpeace: string
      omnias: string
      umbra: string
      dread: string
      rc24: string
      omg: string
      blsp: string
      easy2: string
      omgup: string
      qtox: string
      offsec: string
      htb: string
      thm: string
      bugcrowd: string
      hackerone: string
      cisco: string
      isc2: string
      fortinet: string
      microsoft: string
      aws: string
      gcp: string
      proton: string
      stackoverflow: string
      linkedin: string
    }
    contact: {
      title: string
      description: string
      email: string
      github: string
    }
  }
  certifications: {
    title: string
    description: string
    viewCertificateId: string
    modal: {
      title: string
      description: string
      confidential: string
      reason: string
      verification: string
      contact: string
    }
    stats: {
      title: string
      total: string
      active: string
      authorities: string
      latest: string
    }
    securityplus: { description: string }
    ccna: { description: string }
    rhcsa: { description: string }
    ceh: { description: string }
    rhce: { description: string }
    cissp: { description: string }
    awssecurity: { description: string }
    nse4: { description: string }
    dca: { description: string }
    cka: { description: string }
    azuresecurity: { description: string }
    oscp: { description: string }
    cks: { description: string }
    rhcss: { description: string }
  }
  gratitude: {
    title: string
    description: string
    sections: {
      hackers: string
      groups: string
      forums: string
      spiritual: string
    }
    categories: {
      hacker: string
      legend: string
      group: string
      forum: string
      marketplace: string
      exploit: string
      historian: string
      scholar: string
      sufi: string
      sheikh: string
      guide: string
      convert: string
      imam: string
      classical: string
    }
    hackers: {
      bogachev: string
      yakubets: string
      mitnick: string
      cyberwarrior: string
      aflonzo: string
      alexei: string
      dreadditevelidot: string
    }
    groups: {
      sofacy: string
      dukes: string
      lulzsec: string
    }
    forums: {
      nulled: string
      ramp: string
      bhn: string
      rutor: string
      zeroday: string
    }
    scholars: {
      misirolu: string
      nursi: string
      nazim: string
      said: string
      kunta: string
      polosin: string
      damir: string
      gazzali: string
      shafi: string
      hanife: string
    }
    closing: {
      title: string
      message: string
    }
  }
  marquee: {
    cybersecurity: string
    innovation: string
    security: string
    excellence: string
    protection: string
  }
}

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: Translations
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      projects: "Projects",
      social: "Social",
      certifications: "Certifications",
      gratitude: "Gratitude",
    },
    home: {
      tagline: "Elite Cybersecurity Expert & Linux Systems Architect",
      subtitle:
        "Specializing in penetration testing, custom Linux distribution development, and secure infrastructure design with 13+ years of professional experience.",
      expertise: {
        security: "Cybersecurity",
        linux: "Linux Expert",
        development: "Full-Stack Dev",
        pentesting: "Penetration Testing",
      },
      cta: {
        projects: "View Projects",
        about: "Learn More",
      },
    },
    about: {
      title: "About US1BZA",
      description:
        "Passionate cybersecurity professional with extensive experience in penetration testing, custom Linux distribution development, and secure infrastructure design.",
      role: "Cybersecurity Expert & Linux Systems Developer",
      badges: {
        security: "Security Expert",
        linux: "Linux Developer",
        developer: "Full-Stack Dev",
      },
      experience: {
        title: "Professional Experience",
        specialization: "Cybersecurity & Linux Development Specialist",
        description:
          "With over 13 years of experience in cybersecurity and Linux systems development, I specialize in creating secure, custom solutions for enterprise environments. My expertise spans from low-level kernel modifications to high-level security architecture design, with deep knowledge of multiple Linux distributions and containerization technologies.",
        achievements: "Key Achievements",
        achievement1:
          "Developed US1BZA Linux - a security-focused custom distribution with advanced penetration testing capabilities",
        achievement2:
          "Created comprehensive cybersecurity toolkit with 400+ specialized tools for security professionals",
        achievement3: "Designed and implemented secure Android OS with enhanced privacy and security features",
      },
      skills: {
        title: "Technical Expertise",
        cybersecurity: "Cybersecurity & Security",
        linux: "Linux Distributions & Systems",
        development: "Full-Stack Development",
        devops: "DevOps & Containerization",
        languages: "Programming Languages",
        ai: "AI & Machine Learning",
      },
      languages: {
        title: "Languages",
      },
    },
    projects: {
      title: "Featured Projects",
      description:
        "Explore my portfolio of open-source projects, custom Linux distributions, and security tools designed to enhance cybersecurity capabilities.",
      featured: "Featured Projects",
      allProjects: "All Projects",
      viewOnGithub: "View on GitHub",
      viewCode: "View Code",
      us1bzalinux: {
        description:
          "Custom security-focused Linux distribution for penetration testing and cybersecurity professionals",
        longDescription:
          "A comprehensive Linux distribution built from the ground up with security professionals in mind. Features custom kernel modifications, pre-installed security tools, and optimized performance for penetration testing workflows.",
      },
      us1bzatools: {
        description:
          "Comprehensive collection of 400+ cybersecurity tools for penetration testing and security analysis",
        longDescription:
          "An extensive toolkit containing carefully curated and custom-developed security tools covering network analysis, vulnerability assessment, digital forensics, and penetration testing methodologies.",
      },
      us1bzabrowser: {
        description: "Privacy-focused web browser with advanced security features and anonymity protection",
        longDescription:
          "A secure web browser built on Chromium with enhanced privacy features, built-in VPN capabilities, advanced ad blocking, and comprehensive tracking protection for security-conscious users.",
      },
      us1bzaos: {
        description: "Hardened Android operating system with enhanced privacy and security features",
        longDescription:
          "A custom Android OS focused on privacy and security, featuring advanced encryption, secure boot process, privacy-focused app ecosystem, and comprehensive security hardening measures.",
      },
      us1bzade: {
        description: "Custom desktop environment optimized for security workflows and productivity",
        longDescription:
          "A lightweight, security-focused desktop environment designed specifically for cybersecurity professionals, featuring integrated security tools, customizable workflows, and optimized resource management.",
      },
      portfolio: {
        description: "Open-source portfolio website showcasing modern web development practices",
        longDescription:
          "A fully responsive, multilingual portfolio website built with Next.js, featuring dark/light themes, smooth animations, and modern web development best practices. Available as open-source for the community.",
      },
    },
    social: {
      title: "Professional Networks & Communities",
      description:
        "Connect with me across various platforms including development repositories, secure communication channels, technical communities, and security research forums where I contribute to cybersecurity research and open-source projects.",
      usernameNotice: "On most platforms, you can find me using the username: us1bza",
      visitProfile: "Visit Profile",
      categories: {
        development: "Development Platforms",
        security: "Security Research",
        certification: "Certification",
        cloud: "Cloud Platform",
        privacy: "Privacy & Encrypted Communication",
        professional: "Professional",
        communication: "Secure Communication",
        social: "Social Networks",
        forums: "Technical Forums",
        darkweb: "Dark Web / Tor Networks",
        verification: "Verification & Fraud Prevention",
      },
      platforms: {
        github: "Open source projects, security tools, and Linux distributions",
        gitlab: "Additional repositories and collaborative projects",
        gitee: "China-based Git repository hosting and collaboration",
        telegram: "Secure messaging and community discussions",
        discord: "Real-time communication for technical discussions",
        matrix: "Decentralized secure messaging protocol",
        bluesky: "Decentralized social network activity and updates",
        mastodon: "Open-source federated social network presence",
        reddit: "Community discussions and technical contributions",
        lemmy: "Federated link aggregation and discussion platform",
        "4pda": "Russian mobile development and technology forum",
        cyberforum: "Programming and cybersecurity Russian community",
        cheat4: "Game modification and reverse engineering community",
        xleet: "Elite hacking and security research forum",
        xss: "Security research and vulnerability disclosure forum",
        xssTor: "Tor-based security research forum for advanced discussions",
        breach: "Data breach research and cybersecurity discussions",
        ramp4u: "Underground marketplace and security research",
        antiskam: "Russian anti-fraud and scam prevention community",
        darkseller: "Marketplace verification and security research",
        olkpeace: "Eastern European cybersecurity community",
        omnias: "Intelligence gathering and OSINT research",
        umbra: "Privacy-focused security research platform",
        dread: "Reddit-like dark web forum for security discussions",
        rc24: "Underground marketplace and carding forum",
        omg: "Russian darknet marketplace for security research",
        blsp: "Blacklist verification and fraud prevention database",
        easy2: "Credential verification and security research",
        omgup: "Gateway to OMG marketplace and related services",
        qtox: "P2P encrypted messaging - request Tox ID via handle",
        offsec: "Offensive Security training and certifications",
        htb: "Hack The Box challenges and achievements",
        thm: "TryHackMe learning paths and rooms",
        bugcrowd: "Bug bounty programs and vulnerability reports",
        hackerone: "Security research and responsible disclosure",
        cisco: "Networking certifications and credentials",
        isc2: "CISSP and security certifications",
        fortinet: "Network security certifications",
        microsoft: "Azure and cloud security certifications",
        aws: "Cloud security and infrastructure",
        gcp: "Google Cloud platform expertise",
        proton: "Privacy-focused encrypted email service",
        stackoverflow: "Technical contributions and solutions",
        linkedin: "Professional network and connections",
      },
      contact: {
        title: "Get in Touch",
        description:
          "For secure communication, use Proton Mail or encrypted messaging platforms listed above. Find me on most platforms using username: us1bza",
        email: "Send Email",
        github: "GitHub Profile",
      },
    },
    certifications: {
      title: "Professional Certifications",
      description:
        "Industry-recognized certifications demonstrating expertise in cybersecurity, cloud security, Linux administration, and penetration testing.",
      viewCertificateId: "View Details",
      modal: {
        title: "Certificate Information",
        description: "Certification details and verification information.",
        confidential: "Confidential Information",
        reason:
          "Certificate IDs and verification numbers are kept private for security reasons. This protects against potential misuse and maintains the integrity of professional credentials.",
        verification: "For verification of credentials, please contact directly:",
        contact: "Contact for Verification",
      },
      stats: {
        title: "Certification Statistics",
        total: "Total Certifications",
        active: "Active Certifications",
        authorities: "Issuing Authorities",
        latest: "Latest Certification",
      },
      securityplus: {
        description:
          "Foundation-level security certification covering network security, compliance, operational security, and security architecture.",
      },
      ccna: {
        description:
          "Industry-standard networking certification demonstrating proficiency in network fundamentals, IP services, and security basics.",
      },
      rhcsa: {
        description:
          "Linux system administration certification validating skills in managing Red Hat Enterprise Linux environments.",
      },
      ceh: {
        description:
          "Ethical hacking certification demonstrating knowledge of security vulnerabilities and penetration testing methodologies.",
      },
      rhce: {
        description:
          "Advanced Linux certification for experienced system administrators focusing on automation and enterprise deployments.",
      },
      cissp: {
        description:
          "Premier certification for information security professionals covering eight domains of cybersecurity expertise.",
      },
      awssecurity: {
        description:
          "Specialized AWS certification demonstrating expertise in securing AWS cloud platforms and implementing security controls.",
      },
      nse4: {
        description:
          "Fortinet network security expert certification covering firewall policies, VPNs, and security best practices.",
      },
      dca: {
        description:
          "Docker containerization certification demonstrating proficiency in container orchestration and deployment.",
      },
      cka: {
        description:
          "Kubernetes administration certification validating skills in deploying and managing production-grade Kubernetes clusters.",
      },
      azuresecurity: {
        description:
          "Microsoft Azure security certification demonstrating expertise in implementing security controls and managing identity.",
      },
      oscp: {
        description:
          "Hands-on penetration testing certification requiring successful exploitation of multiple systems in a controlled environment.",
      },
      cks: {
        description:
          "Advanced Kubernetes security certification focusing on cluster hardening, system hardening, and supply chain security.",
      },
      rhcss: {
        description:
          "Red Hat security specialist certification demonstrating advanced Linux security configuration and hardening techniques.",
      },
    },
    gratitude: {
      title: "Acknowledgements",
      description:
        "Gratitude to those who have shaped the cybersecurity landscape, spiritual guides who illuminate the path, and communities that preserve knowledge.",
      sections: {
        hackers: "Security Researchers & Pioneers",
        groups: "Notable Groups & Collectives",
        forums: "Forums & Knowledge Hubs",
        spiritual: "Islamic Scholars & Spiritual Guides",
      },
      categories: {
        hacker: "Security Researcher",
        legend: "Legend",
        group: "Group",
        forum: "Forum",
        marketplace: "Marketplace",
        exploit: "Exploit Database",
        historian: "Historian",
        scholar: "Scholar",
        sufi: "Sufi Master",
        sheikh: "Sheikh",
        guide: "Spiritual Guide",
        convert: "Convert Scholar",
        imam: "Imam",
        classical: "Classical Scholar",
      },
      hackers: {
        bogachev: "Innovative cybersecurity researcher with advanced technical expertise",
        yakubets: "Skilled technical specialist in complex security systems",
        mitnick: "Legendary figure in cybersecurity history and social engineering pioneer",
        cyberwarrior: "Dedicated security professional advancing digital defense",
        aflonzo: "Innovative researcher exploring security boundaries",
        alexei: "Technical expert in advanced security methodologies",
        dreadditevelidot: "Privacy advocate and security researcher in anonymous networks",
      },
      groups: {
        sofacy: "Advanced persistent threat group known for sophisticated operations",
        dukes: "Elite technical group with advanced capabilities",
        lulzsec: "Notable hacktivist collective that influenced security awareness",
      },
      forums: {
        nulled: "Community forum for technical discussions and learning",
        ramp: "Historical marketplace that shaped dark web evolution",
        bhn: "Technical community for security research and discussion",
        rutor: "Russian technical forum for sharing knowledge",
        zeroday: "Exploit research and vulnerability database platform",
      },
      scholars: {
        misirolu: "Turkish historian and Islamic scholar known for Ottoman history research",
        nursi: "Kurdish Islamic scholar, author of Risale-i Nur collection",
        nazim: "Cypriot-Turkish Sufi master of the Naqshbandi order",
        said: "Kurdish Islamic scholar and spiritual leader",
        kunta: "Chechen spiritual guide and Islamic scholar",
        polosin: "Russian convert scholar and Islamic researcher",
        damir: "Contemporary Russian Islamic scholar and imam",
        gazzali: "Persian theologian, philosopher, and Sufi mystic",
        shafi: "Founder of the Shafi'i school of Islamic jurisprudence",
        hanife: "Founder of the Hanafi school, the largest Islamic jurisprudence school",
      },
      closing: {
        title: "With Sincere Gratitude",
        message:
          "Thank you to everyone who has contributed to knowledge, security, and spiritual enlightenment. Your work continues to inspire and guide future generations.",
      },
    },
    marquee: {
      cybersecurity: "Cybersecurity Excellence",
      innovation: "Innovation in Security",
      security: "Protecting Digital Assets",
      excellence: "Technical Excellence",
      protection: "Advanced Threat Protection",
    },
  },
  ru: {
    nav: {
      home: "Главная",
      about: "Обо мне",
      projects: "Проекты",
      social: "Социальные сети",
      certifications: "Сертификаты",
      gratitude: "Благодарности",
    },
    home: {
      tagline: "Элитный эксперт по кибербезопасности и архитектор Linux-систем",
      subtitle:
        "Специализируюсь на тестировании на проникновение, разработке пользовательских дистрибутивов Linux и проектировании безопасной инфраструктуры с опытом работы более 13 лет.",
      expertise: {
        security: "Кибербезопасность",
        linux: "Эксперт Linux",
        development: "Full-Stack разработка",
        pentesting: "Тестирование на проникновение",
      },
      cta: {
        projects: "Просмотр проектов",
        about: "Узнать больше",
      },
    },
    about: {
      title: "О US1BZA",
      description:
        "Увлеченный профессионал в области кибербезопасности с обширным опытом в тестировании на проникновение, разработке пользовательских дистрибутивов Linux и проектировании безопасной инфраструктуры.",
      role: "Эксперт по кибербезопасности и разработчик Linux-систем",
      badges: {
        security: "Эксперт по безопасности",
        linux: "Linux разработчик",
        developer: "Full-Stack разработчик",
      },
      experience: {
        title: "Профессиональный опыт",
        specialization: "Специалист по кибербезопасности и разработке Linux",
        description:
          "Имея более 13 лет опыта в кибербезопасности и разработке Linux-систем, я специализируюсь на создании безопасных, пользовательских решений для корпоративных сред. Моя экспертиза охватывает от низкоуровневых модификаций ядра до высокоуровневого проектирования архитектуры безопасности, с глубокими знаниями множественных дистрибутивов Linux и технологий контейнеризации.",
        achievements: "Ключевые достижения",
        achievement1:
          "Разработал US1BZA Linux - ориентированный на безопасность пользовательский дистрибутив с продвинутыми возможностями тестирования на проникновение",
        achievement2:
          "Создал комплексный набор инструментов кибербезопасности с 400+ специализированными инструментами для специалистов по безопасности",
        achievement3:
          "Спроектировал и реализовал безопасную Android OS с улучшенными функциями конфиденциальности и безопасности",
      },
      skills: {
        title: "Техническая экспертиза",
        cybersecurity: "Кибербезопасность и безопасность",
        linux: "Дистрибутивы Linux и системы",
        development: "Full-Stack разработка",
        devops: "DevOps и контейнеризация",
        languages: "Языки программирования",
        ai: "ИИ и машинное обучение",
      },
      languages: {
        title: "Языки",
      },
    },
    projects: {
      title: "Избранные проекты",
      description:
        "Изучите мое портфолио проектов с открытым исходным кодом, пользовательских дистрибутивов Linux и инструментов безопасности, разработанных для улучшения возможностей кибербезопасности.",
      featured: "Избранные проекты",
      allProjects: "Все проекты",
      viewOnGithub: "Посмотреть на GitHub",
      viewCode: "Посмотреть код",
      us1bzalinux: {
        description:
          "Пользовательский дистрибутив Linux, ориентированный на безопасность, для тестирования на проникновение и специалистов по кибербезопасности",
        longDescription:
          "Комплексный дистрибутив Linux, созданный с нуля с учетом потребностей специалистов по безопасности. Включает пользовательские модификации ядра, предустановленные инструменты безопасности и оптимизированную производительность для рабочих процессов тестирования на проникновение.",
      },
      us1bzatools: {
        description:
          "Комплексная коллекция из 400+ инструментов кибербезопасности для тестирования на проникновение и анализа безопасности",
        longDescription:
          "Обширный набор инструментов, содержащий тщательно отобранные и разработанные на заказ инструменты безопасности, охватывающие анализ сети, оценку уязвимостей, цифровую криминалистику и методологии тестирования на проникновение.",
      },
      us1bzabrowser: {
        description:
          "Браузер, ориентированный на конфиденциальность, с продвинутыми функциями безопасности и защитой анонимности",
        longDescription:
          "Безопасный веб-браузер, построенный на Chromium с улучшенными функциями конфиденциальности, встроенными VPN-возможностями, продвинутой блокировкой рекламы и комплексной защитой от отслеживания для пользователей, заботящихся о безопасности.",
      },
      us1bzaos: {
        description:
          "Защищенная операционная система Android с улучшенными функциями конфиденциальности и безопасности",
        longDescription:
          "Пользовательская Android OS, ориентированная на конфиденциальность и безопасность, включающая продвинутое шифрование, безопасный процесс загрузки, экосистему приложений, ориентированную на конфиденциальность, и комплексные меры защиты безопасности.",
      },
      us1bzade: {
        description:
          "Пользовательская среда рабочего стола, оптимизированная для рабочих процессов безопасности и продуктивности",
        longDescription:
          "Легкая, ориентированная на безопасность среда рабочего стола, разработанная специально для специалистов по кибербезопасности, включающая интегрированные инструменты безопасности, настраиваемые рабочие процессы и оптимизированное управление ресурсами.",
      },
      portfolio: {
        description:
          "Веб-сайт портфолио с открытым исходным кодом, демонстрирующий современные практики веб-разработки",
        longDescription:
          "Полностью адаптивный, многоязычный веб-сайт портфолио, созданный с помощью Next.js, включающий темные/светлые темы, плавные анимации и современные лучшие практики веб-разработки. Доступен как открытый исходный код для сообщества.",
      },
    },
    social: {
      title: "Профессиональные сети и сообщества",
      description:
        "Свяжитесь со мной на различных платформах, включая репозитории разработки, защищенные каналы связи, технические сообщества и форумы по безопасности, где я участвую в исследованиях кибербезопасности и проектах с открытым исходным кодом.",
      usernameNotice: "На большинстве платформ вы можете найти меня по имени пользователя: us1bza",
      visitProfile: "Посетить профиль",
      categories: {
        development: "Платформы разработки",
        security: "Исследование безопасности",
        certification: "Сертификация",
        cloud: "Облачная платформа",
        privacy: "Конфиденциальность и шифрование",
        professional: "Профессиональное",
        communication: "Защищенная связь",
        social: "Социальные сети",
        forums: "Технические форумы",
        darkweb: "Даркнет / Tor сети",
        verification: "Проверка и защита от мошенничества",
      },
      platforms: {
        github: "Проекты с открытым исходным кодом, инструменты безопасности и дистрибутивы Linux",
        gitlab: "Дополнительные репозитории и совместные проекты",
        gitee: "Китайская платформа для хостинга Git-репозиториев",
        telegram: "Безопасный обмен сообщениями и обсуждения в сообществе",
        discord: "Коммуникация в реальном времени для технических обсуждений",
        matrix: "Децентрализованный протокол безопасного обмена сообщениями",
        bluesky: "Децентрализованная социальная сеть и обновления",
        mastodon: "Присутствие в федеративной социальной сети с открытым исходным кодом",
        reddit: "Обсуждения в сообществе и технические вклады",
        lemmy: "Федеративная платформа для агрегации ссылок и обсуждений",
        "4pda": "Российский форум по мобильной разработке и технологиям",
        cyberforum: "Российское сообщество программирования и кибербезопасности",
        cheat4: "Сообщество модификации игр и реверс-инжиниринга",
        xleet: "Элитный хакерский форум и исследование безопасности",
        xss: "Форум исследований безопасности и раскрытия уязвимостей",
        xssTor: "Форум исследований безопасности на базе Tor для продвинутых обсуждений",
        breach: "Исследование утечек данных и обсуждения кибербезопасности",
        ramp4u: "Подпольный маркетплейс и исследование безопасности",
        antiskam: "Российское сообщество по борьбе с мошенничеством",
        darkseller: "Проверка маркетплейсов и исследование безопасности",
        olkpeace: "Восточноевропейское сообщество кибербезопасности",
        omnias: "Сбор разведданных и исследования OSINT",
        umbra: "Платформа исследования безопасности с фокусом на конфиденциальность",
        dread: "Даркнет-форум в стиле Reddit для обсуждений безопасности",
        rc24: "Подпольный маркетплейс и кардинг-форум",
        omg: "Российский даркнет-маркетплейс для исследования безопасности",
        blsp: "База данных проверки черных списков и предотвращения мошенничества",
        easy2: "Проверка учетных данных и исследование безопасности",
        omgup: "Шлюз к маркетплейсу OMG и связанным сервисам",
        qtox: "P2P зашифрованный обмен сообщениями - запросите Tox ID через handle",
        offsec: "Обучение и сертификация Offensive Security",
        htb: "Вызовы и достижения Hack The Box",
        thm: "Обучающие пути и комнаты TryHackMe",
        bugcrowd: "Программы bug bounty и отчеты об уязвимостях",
        hackerone: "Исследование безопасности и ответственное раскрытие",
        cisco: "Сертификация и учетные данные по сетям",
        isc2: "CISSP и сертификации по безопасности",
        fortinet: "Сертификации сетевой безопасности",
        microsoft: "Сертификации Azure и облачной безопасности",
        aws: "Облачная безопасность и инфраструктура",
        gcp: "Экспертиза платформы Google Cloud",
        proton: "Зашифрованная почта с фокусом на конфиденциальность",
        stackoverflow: "Технические вклады и решения",
        linkedin: "Профессиональная сеть и связи",
      },
      contact: {
        title: "Связаться",
        description:
          "Для безопасной связи используйте Proton Mail или платформы зашифрованного обмена сообщениями, перечисленные выше. Найдите меня на большинстве платформ по имени пользователя: us1bza",
        email: "Отправить email",
        github: "Профиль GitHub",
      },
    },
    certifications: {
      title: "Профессиональные сертификаты",
      description:
        "Признанные в отрасли сертификаты, демонстрирующие экспертизу в кибербезопасности, облачной безопасности, администрировании Linux и тестировании на проникновение.",
      viewCertificateId: "Просмотр деталей",
      modal: {
        title: "Информация о сертификате",
        description: "Детали сертификата и информация о верификации.",
        confidential: "Конфиденциальная информация",
        reason:
          "Идентификаторы сертификатов и номера верификации хранятся в частном порядке по соображениям безопасности. Это защищает от потенциального злоупотребления и поддерживает целостность профессиональных учетных данных.",
        verification: "Для верификации учетных данных, пожалуйста, свяжитесь напрямую:",
        contact: "Контакт для верификации",
      },
      stats: {
        title: "Статистика сертификатов",
        total: "Всего сертификатов",
        active: "Активных сертификатов",
        authorities: "Выдающих органов",
        latest: "Последний сертификат",
      },
      securityplus: {
        description:
          "Базовый сертификат безопасности, охватывающий сетевую безопасность, соответствие требованиям, операционную безопасность и архитектуру безопасности.",
      },
      ccna: {
        description:
          "Стандартный отраслевой сертификат по сетям, демонстрирующий владение основами сетей, IP-сервисами и основами безопасности.",
      },
      rhcsa: {
        description:
          "Сертификат администрирования системы Linux, подтверждающий навыки управления средами Red Hat Enterprise Linux.",
      },
      ceh: {
        description:
          "Сертификат этического хакерства, демонстрирующий знание уязвимостей безопасности и методологий тестирования на проникновение.",
      },
      rhce: {
        description:
          "Продвинутый сертификат Linux для опытных системных администраторов, сосредоточенный на автоматизации и корпоративных развертываниях.",
      },
      cissp: {
        description:
          "Премиальный сертификат для профессионалов информационной безопасности, охватывающий восемь доменов экспертизы кибербезопасности.",
      },
      awssecurity: {
        description:
          "Специализированный сертификат AWS, демонстрирующий экспертизу в защите облачных платформ AWS и внедрении контроля безопасности.",
      },
      nse4: {
        description:
          "Сертификат эксперта сетевой безопасности Fortinet, охватывающий политики брандмауэра, VPN и лучшие практики безопасности.",
      },
      dca: {
        description:
          "Сертификат контейнеризации Docker, демонстрирующий владение оркестрацией и развертыванием контейнеров.",
      },
      cka: {
        description:
          "Сертификат администрирования Kubernetes, подтверждающий навыки развертывания и управления производственными кластерами Kubernetes.",
      },
      azuresecurity: {
        description:
          "Сертификат безопасности Microsoft Azure, демонстрирующий экспертизу во внедрении контроля безопасности и управлении идентификацией.",
      },
      oscp: {
        description:
          "Практический сертификат тестирования на проникновение, требующий успешной эксплуатации нескольких систем в контролируемой среде.",
      },
      cks: {
        description:
          "Продвинутый сертификат безопасности Kubernetes, сосредоточенный на укреплении кластера, укреплении системы и безопасности цепочки поставок.",
      },
      rhcss: {
        description:
          "Сертификат специалиста по безопасности Red Hat, демонстрирующий продвинутую конфигурацию безопасности Linux и техники укрепления.",
      },
    },
    gratitude: {
      title: "Благодарности",
      description:
        "Благодарность тем, кто сформировал ландшафт кибербезопасности, духовным наставникам, освещающим путь, и сообществам, сохраняющим знания.",
      sections: {
        hackers: "Исследователи безопасности и первопроходцы",
        groups: "Известные группы и коллективы",
        forums: "Форумы и центры знаний",
        spiritual: "Исламские ученые и духовные наставники",
      },
      categories: {
        hacker: "Исследователь безопасности",
        legend: "Легенда",
        group: "Группа",
        forum: "Форум",
        marketplace: "Маркетплейс",
        exploit: "База эксплойтов",
        historian: "Историк",
        scholar: "Ученый",
        sufi: "Суфийский мастер",
        sheikh: "Шейх",
        guide: "Духовный наставник",
        convert: "Ученый-неофит",
        imam: "Имам",
        classical: "Классический ученый",
      },
      hackers: {
        bogachev: "Инновационный исследователь кибербезопасности с передовой технической экспертизой",
        yakubets: "Квалифицированный технический специалист в сложных системах безопасности",
        mitnick: "Легендарная фигура в истории кибербезопасности и пионер социальной инженерии",
        cyberwarrior: "Преданный специалист по безопасности, развивающий цифровую защиту",
        aflonzo: "Инновационный исследователь, изучающий границы безопасности",
        alexei: "Технический эксперт в продвинутых методологиях безопасности",
        dreadditevelidot: "Защитник конфиденциальности и исследователь безопасности в анонимных сетях",
      },
      groups: {
        sofacy: "Группа продвинутых постоянных угроз, известная сложными операциями",
        dukes: "Элитная техническая группа с продвинутыми возможностями",
        lulzsec: "Известный хактивистский коллектив, повлиявший на осведомленность о безопасности",
      },
      forums: {
        nulled: "Форум сообщества для технических дискуссий и обучения",
        ramp: "Исторический маркетплейс, сформировавший эволюцию даркнета",
        bhn: "Техническое сообщество для исследований безопасности и дискуссий",
        rutor: "Российский технический форум для обмена знаниями",
        zeroday: "Платформа исследования эксплойтов и база данных уязвимостей",
      },
      scholars: {
        misirolu: "Турецкий историк и исламский ученый, известный исследованиями истории Османской империи",
        nursi: "Курдский исламский ученый, автор сборника Рисале-и Нур",
        nazim: "Кипрско-турецкий суфийский мастер ордена Накшбанди",
        said: "Курдский исламский ученый и духовный лидер",
        kunta: "Чеченский духовный наставник и исламский ученый",
        polosin: "Русский ученый-неофит и исламский исследователь",
        damir: "Современный российский исламский ученый и имам",
        gazzali: "Персидский теолог, философ и суфийский мистик",
        shafi: "Основатель шафиитской школы исламской юриспруденции",
        hanife: "Основатель ханафитской школы, крупнейшей школы исламской юриспруденции",
      },
      closing: {
        title: "С искренней благодарностью",
        message:
          "Спасибо всем, кто внес вклад в знания, безопасность и духовное просвещение. Ваша работа продолжает вдохновлять и направлять будущие поколения.",
      },
    },
    marquee: {
      cybersecurity: "Превосходство в кибербезопасности",
      innovation: "Инновации в безопасности",
      security: "Защита цифровых активов",
      excellence: "Техническое совершенство",
      protection: "Продвинутая защита от угроз",
    },
  },
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<"en" | "ru">("en")
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const savedLanguage = localStorage.getItem("language") as "en" | "ru" | null
    if (savedLanguage && (savedLanguage === "en" || savedLanguage === "ru")) {
      setLanguage(savedLanguage)
    }
  }, [])

  const toggleLanguage = () => {
    const newLanguage = language === "en" ? "ru" : "en"
    setLanguage(newLanguage)
    if (mounted) {
      localStorage.setItem("language", newLanguage)
    }
  }

  const currentTranslations = translations[language] || translations.en

  if (process.env.NODE_ENV === "development") {
    console.log(
      "LanguageProvider - language:",
      language,
      "mounted:",
      mounted,
      "translations available:",
      !!currentTranslations,
    )
  }

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
        t: currentTranslations,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)

  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }

  if (!context.t) {
    if (process.env.NODE_ENV === "development") {
      console.error("useLanguage - translations object is undefined!")
    }
    return { ...context, t: translations.en }
  }

  return context
}
