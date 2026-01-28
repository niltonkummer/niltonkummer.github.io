import { Github, Linkedin, Instagram, ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/lib/i18n';

export function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <p className="font-mono text-primary mb-4 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            {t.hero.greeting}
          </p>

          {/* Name */}
          <h1 
            className="text-5xl md:text-7xl font-bold text-foreground mb-4 animate-fade-in-up" 
            style={{ animationDelay: '0.2s' }}
          >
            Nilton Kummer
          </h1>

          {/* Title */}
          <h2 
            className="text-2xl md:text-3xl font-mono text-primary mb-6 animate-fade-in-up" 
            style={{ animationDelay: '0.3s' }}
          >
            {t.hero.title}
          </h2>

          {/* Subtitle */}
          <p 
            className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8 animate-fade-in-up" 
            style={{ animationDelay: '0.4s' }}
          >
            {t.hero.subtitle}
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up" 
            style={{ animationDelay: '0.5s' }}
          >
            <Button asChild size="lg" className="font-medium">
              <a href="#contact">{t.hero.cta}</a>
            </Button>
          
          </div>

          {/* Social Links */}
          <div 
            className="flex items-center justify-center gap-6 animate-fade-in-up" 
            style={{ animationDelay: '0.6s' }}
          >
            <a
              href="https://github.com/niltonkummer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
              aria-label="GitHub"
            >
              <Github size={24} />
            </a>
            <a
              href="https://linkedin.com/in/niltonkummer"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
          <ArrowDown size={24} />
        </a>
      </div>
    </section>
  );
}
