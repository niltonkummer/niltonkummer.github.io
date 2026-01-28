import { useState } from 'react';
import { Mail, Send, Github, Linkedin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useLanguage } from '@/lib/i18n';
import { useToast } from '@/hooks/use-toast';

export function ContactSection() {
  const { t } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // TODO: Integrate with backend when Cloud is enabled
    // For now, simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: t.contact.success,
      description: '',
    });

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
            <span className="font-mono text-primary">&lt;</span>
            {t.contact.title}
            <span className="font-mono text-primary"> /&gt;</span>
          </h2>


          {/* Alternative Contact */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              {t.contact.subtitle}
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="mailto:nilton@nhktech.dev"
                className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail size={20} />
                <span className="font-mono text-sm">nilton@nhktech.dev</span>
              </a>
            </div>
            <div className="flex items-center justify-center gap-4 mt-4">
              <a
                href="https://github.com/niltonkummer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                aria-label="GitHub"
              >
                <Github size={20} />
              </a>
              <a
                href="https://linkedin.com/in/niltonkummer"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border text-muted-foreground hover:text-primary hover:border-primary transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
