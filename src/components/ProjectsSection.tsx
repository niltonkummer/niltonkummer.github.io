import { Github, ExternalLink, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/i18n';

const projects = [
  {
    title: 'Cloud Infrastructure Toolkit',
    description: {
      en: 'A collection of Terraform modules and scripts for automating cloud infrastructure deployment on AWS and GCP.',
      pt: 'Uma coleção de módulos Terraform e scripts para automatizar deploy de infraestrutura cloud na AWS e GCP.',
    },
    tech: ['Terraform', 'AWS', 'GCP', 'Go'],
    github: 'https://github.com/niltonkummer',
    demo: null,
  },
  {
    title: 'Microservices Template',
    description: {
      en: 'Production-ready microservices template with Go, featuring health checks, metrics, and distributed tracing.',
      pt: 'Template de microsserviços pronto para produção com Go, incluindo health checks, métricas e tracing distribuído.',
    },
    tech: ['Go', 'Docker', 'Kubernetes', 'Prometheus'],
    github: 'https://github.com/niltonkummer',
    demo: null,
  },
  {
    title: 'API Gateway Solution',
    description: {
      en: 'High-performance API gateway with rate limiting, authentication, and request transformation capabilities.',
      pt: 'API gateway de alta performance com rate limiting, autenticação e capacidades de transformação de requisições.',
    },
    tech: ['Go', 'Redis', 'PostgreSQL', 'Docker'],
    github: 'https://github.com/niltonkummer',
    demo: null,
  },
  {
    title: 'DevOps Automation Suite',
    description: {
      en: 'CI/CD pipeline templates and automation scripts for streamlining development workflows.',
      pt: 'Templates de pipelines CI/CD e scripts de automação para otimizar workflows de desenvolvimento.',
    },
    tech: ['GitHub Actions', 'Python', 'Ansible', 'Shell'],
    github: 'https://github.com/niltonkummer',
    demo: null,
  },
];

export function ProjectsSection() {
  const { t, language } = useLanguage();

  return (
    <section id="projects" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            <span className="font-mono text-primary">&lt;</span>
            {t.projects.title}
            <span className="font-mono text-primary"> /&gt;</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            {t.projects.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-all hover:-translate-y-1"
              >
                <div className="flex items-start justify-between mb-4">
                  <Folder className="text-primary" size={32} />
                  <div className="flex items-center gap-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View on GitHub"
                      >
                        <Github size={20} />
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-muted-foreground hover:text-primary transition-colors"
                        aria-label="View Demo"
                      >
                        <ExternalLink size={20} />
                      </a>
                    )}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                  {project.description[language]}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge 
                      key={tech} 
                      variant="outline"
                      className="font-mono text-xs"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* View More on GitHub */}
          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg">
              <a
                href="https://github.com/niltonkummer"
                target="_blank"
                rel="noopener noreferrer"
                className="font-mono"
              >
                <Github className="mr-2" size={20} />
                {t.projects.viewCode}
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
