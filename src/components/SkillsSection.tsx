import { useLanguage } from '@/lib/i18n';
import { Badge } from '@/components/ui/badge';

const skills = {
  languages: ['Golang', 'Python', 'C', 'Rust', 'PHP', 'JavaScript', 'Node.js'],
  cloud: ['AWS', 'Terraform', 'Kubernetes', 'Docker'],
  databases: ['PostgreSQL', 'MySQL', 'DynamoDB', 'Redis'],
  devops: ['Git', 'GitHub', 'GitLab', 'Docker', 'Kubernetes', 'TCP/IP', 'DNS', 'HTTP', 'HTTPS', 'gRPC'],
};

export function SkillsSection() {
  const { t } = useLanguage();

  const categories = [
    { key: 'languages', title: t.skills.languages, items: skills.languages },
    { key: 'cloud', title: t.skills.cloud, items: skills.cloud },
    { key: 'databases', title: t.skills.databases, items: skills.databases },
    { key: 'devops', title: t.skills.devops, items: skills.devops },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            <span className="font-mono text-primary">&lt;</span>
            {t.skills.title}
            <span className="font-mono text-primary"> /&gt;</span>
          </h2>
          <p className="text-muted-foreground text-center mb-12">
            {t.skills.subtitle}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {categories.map((category) => (
              <div 
                key={category.key} 
                className="p-6 rounded-lg border border-border bg-card hover:border-primary/50 transition-colors"
              >
                <h3 className="font-mono text-lg font-semibold text-primary mb-4">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.items.map((skill) => (
                    <Badge 
                      key={skill} 
                      variant="secondary"
                      className="font-mono text-xs hover:bg-primary hover:text-primary-foreground transition-colors cursor-default"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
