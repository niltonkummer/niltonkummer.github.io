import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { useLanguage } from '@/lib/i18n';

export function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
            <span className="font-mono text-primary">&lt;</span>
            {t.about.title}
            <span className="font-mono text-primary"> /&gt;</span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            {/* Profile Image */}
            <div className="flex-shrink-0">
              <Avatar className="w-48 h-48 border-4 border-primary/20">
                <AvatarImage 
                  src="https://avatars.githubusercontent.com/u/823477?v=4" 
                  alt="Nilton Kummer"
                />
                <AvatarFallback className="text-4xl font-bold">NK</AvatarFallback>
              </Avatar>
            </div>

            {/* About Text */}
            <div className="flex-1 text-center md:text-left">
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                {t.about.description}
              </p>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {t.about.currentFocus}
              </p>

              <p className="font-mono text-sm text-primary">
                {t.about.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
