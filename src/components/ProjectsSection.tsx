import { Github, ExternalLink, Folder } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/lib/i18n';

const projects = [
  {
    title: 'Khairus',
    description: {
      en: 'Scheduling system for small businesses, featuring an intuitive interface and client/service management capabilities.',
      pt: 'Sistema de agendamento para pequenos negocios, com interface intuitiva e recursos de gerenciamento de clientes e serviços.',
    },
    tech: ['Typescript', 'AWS', 'Cloudflare', 'Node.js', 'React', 'PostgreSQL'], 
    demo: 'https://khairus.com.br',
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
