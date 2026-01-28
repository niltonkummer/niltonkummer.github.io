import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

type Language = 'en' | 'pt';

interface Translations {
  nav: {
    about: string;
    skills: string;
    experience: string;
    projects: string;
    contact: string;
  };
  hero: {
    greeting: string;
    title: string;
    subtitle: string;
    cta: string;
    viewProjects: string;
  };
  about: {
    title: string;
    description: string;
    currentFocus: string;
    location: string;
  };
  skills: {
    title: string;
    subtitle: string;
    languages: string;
    cloud: string;
    databases: string;
    devops: string;
  };
  experience: {
    title: string;
    subtitle: string;
    present: string;
  };
  projects: {
    title: string;
    subtitle: string;
    viewCode: string;
    liveDemo: string;
  };
  contact: {
    title: string;
    subtitle: string;
    name: string;
    email: string;
    message: string;
    send: string;
    sending: string;
    success: string;
    error: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    messagePlaceholder: string;
  };
  footer: {
    rights: string;
    builtWith: string;
  };
}

const translations: Record<Language, Translations> = {
  en: {
    nav: {
      about: 'About',
      skills: 'Skills',
      experience: 'Experience',
      projects: 'Projects',
      contact: 'Contact',
    },
    hero: {
      greeting: "Hi, I'm",
      title: 'Software Developer',
      subtitle: 'I build scalable software solutions with modern technologies. Specialized in backend development, cloud infrastructure, and DevOps practices.',
      cta: 'Get in Touch',
      viewProjects: 'View Projects',
    },
    about: {
      title: 'About Me',
      description: "I'm a passionate software developer with expertise in building robust, scalable applications. With years of experience in backend development, cloud infrastructure, and DevOps, I help businesses transform their ideas into reliable software solutions.",
      currentFocus: 'Currently focusing on Terraform, Kubernetes, Rust, and Java. Always learning and exploring new technologies.',
      location: 'Based in Portugal 🇵🇹 | CrossFit enthusiast 🏋️',
    },
    skills: {
      title: 'Tech Stack',
      subtitle: 'Technologies I work with',
      languages: 'Languages',
      cloud: 'Cloud & Infrastructure',
      databases: 'Databases',
      devops: 'DevOps & Tools',
    },
    experience: {
      title: 'Experience',
      subtitle: 'My professional journey',
      present: 'Present',
    },
    projects: {
      title: 'Projects',
      subtitle: 'Some of my recent work',
      viewCode: 'View Code',
      liveDemo: 'Live Demo',
    },
    contact: {
      title: 'Get in Touch',
      subtitle: "Have a project in mind? Let's work together!",
      name: 'Name',
      email: 'Email',
      message: 'Message',
      send: 'Send Message',
      sending: 'Sending...',
      success: 'Message sent successfully!',
      error: 'Failed to send message. Please try again.',
      namePlaceholder: 'Your name',
      emailPlaceholder: 'your@email.com',
      messagePlaceholder: 'Tell me about your project...',
    },
    footer: {
      rights: 'All rights reserved.',
      builtWith: 'Built with',
    },
  },
  pt: {
    nav: {
      about: 'Sobre',
      skills: 'Habilidades',
      experience: 'Experiência',
      projects: 'Projetos',
      contact: 'Contato',
    },
    hero: {
      greeting: 'Olá, eu sou',
      title: 'Desenvolvedor de Software',
      subtitle: 'Construo soluções de software escaláveis com tecnologias modernas. Especializado em desenvolvimento backend, infraestrutura cloud e práticas DevOps.',
      cta: 'Entre em Contato',
      viewProjects: 'Ver Projetos',
    },
    about: {
      title: 'Sobre Mim',
      description: 'Sou um desenvolvedor de software apaixonado com experiência em construir aplicações robustas e escaláveis. Com anos de experiência em desenvolvimento backend, infraestrutura cloud e DevOps, ajudo empresas a transformar suas ideias em soluções de software confiáveis.',
      currentFocus: 'Atualmente focado em Terraform, Kubernetes, Rust e Java. Sempre aprendendo e explorando novas tecnologias.',
      location: 'Baseado em Portugal 🇵🇹 | Entusiasta de CrossFit 🏋️',
    },
    skills: {
      title: 'Stack Tecnológico',
      subtitle: 'Tecnologias com as quais trabalho',
      languages: 'Linguagens',
      cloud: 'Cloud & Infraestrutura',
      databases: 'Bancos de Dados',
      devops: 'DevOps & Ferramentas',
    },
    experience: {
      title: 'Experiência',
      subtitle: 'Minha jornada profissional',
      present: 'Presente',
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Alguns dos meus trabalhos recentes',
      viewCode: 'Ver Código',
      liveDemo: 'Demo',
    },
    contact: {
      title: 'Entre em Contato',
      subtitle: 'Tem um projeto em mente? Vamos trabalhar juntos!',
      name: 'Nome',
      email: 'Email',
      message: 'Mensagem',
      send: 'Enviar Mensagem',
      sending: 'Enviando...',
      success: 'Mensagem enviada com sucesso!',
      error: 'Falha ao enviar mensagem. Por favor, tente novamente.',
      namePlaceholder: 'Seu nome',
      emailPlaceholder: 'seu@email.com',
      messagePlaceholder: 'Conte-me sobre seu projeto...',
    },
    footer: {
      rights: 'Todos os direitos reservados.',
      builtWith: 'Construído com',
    },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: Translations;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>(() => {
    // Check localStorage first
    const saved = localStorage.getItem('language') as Language;
    if (saved && (saved === 'en' || saved === 'pt')) {
      return saved;
    }
    // Then check browser language
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith('pt')) {
      return 'pt';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('language', language);
    document.documentElement.lang = language;
  }, [language]);

  const value = {
    language,
    setLanguage,
    t: translations[language],
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
