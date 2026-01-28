import { useLanguage } from '@/lib/i18n';

const experiences = [
  {
    company: 'Leboncoin',
    role: {
      en: 'Senior Software Developer',
      pt: 'Desenvolvedor de Software Sênior',
    },
    period: {
      en: '2025 - Present',
      pt: '2025 - Presente',
    },
    description: {
      en: 'Building scalable APIs and microservices architecture for a leading classifieds platform. Working with Go, Kubernetes, and AWS infrastructure.',
      pt: 'Construindo APIs escaláveis e arquitetura de microsserviços para uma plataforma líder de classificados. Trabalhando com Go, Kubernetes e infraestrutura AWS.',
    },
    location: 'France',
  },
  {
    company: 'Worten',
    role: {
      en: 'Senior Software Developer',
      pt: 'Desenvolvedor de Software Sênior',
    },
    period: {
      en: '2024 - 2025',
      pt: '2024 - 2025',
    },
    description: {
      en: 'Building scalable e-commerce solutions and microservices architecture. Working with Go, Kubernetes, and AWS infrastructure.',
      pt: 'Construindo soluções de e-commerce escaláveis e arquitetura de microsserviços. Trabalhando com Go, Kubernetes e infraestrutura AWS.',
    },
    location: 'Portugal',
  },
  {
    company: 'Previous Company',
    role: {
      en: 'Backend Developer',
      pt: 'Desenvolvedor Backend',
    },
    period: {
      en: '2019 - 2024',
      pt: '2019 - 2024',
    },
    description: {
      en: 'Developed and maintained backend services using Java and Python. Implemented CI/CD pipelines and automated deployment processes.',
      pt: 'Desenvolvi e mantive serviços backend usando Java e Python. Implementei pipelines CI/CD e processos de deployment automatizados.',
    },
    location: 'Brazil',
  },
  {
    company: 'Freelance',
    role: {
      en: 'Software Consultant',
      pt: 'Consultor de Software',
    },
    period: {
      en: '2015 - 2019',
      pt: '2015 - 2019',
    },
    description: {
      en: 'Provided software consulting services for various clients. Specialized in PHP, Python, and cloud migrations.',
      pt: 'Prestei serviços de consultoria de software para diversos clientes. Especializado em PHP, Python e migrações para cloud.',
    },
    location: 'Remote',
  },
];

export function ExperienceSection() {
  const { t, language } = useLanguage();

  return (
    <section id="experience" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            <span className="font-mono text-primary">&lt;</span>
            {t.experience.title}
            <span className="font-mono text-primary"> /&gt;</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            {t.experience.subtitle}
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-1/2" />

            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 mb-12 last:mb-0 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-1/2" />

                {/* Content */}
                <div className={`ml-8 md:ml-0 md:w-1/2 ${index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'}`}>
                  <div className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors">
                    <span className="font-mono text-sm text-primary">
                      {exp.period[language]}
                    </span>
                    <h3 className="text-xl font-bold text-foreground mt-2">
                      {exp.role[language]}
                    </h3>
                    <p className="text-muted-foreground font-medium">
                      {exp.company} • {exp.location}
                    </p>
                    <p className="text-muted-foreground mt-4 text-sm leading-relaxed">
                      {exp.description[language]}
                    </p>
                  </div>
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
