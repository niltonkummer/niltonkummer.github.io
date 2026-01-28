import { Heart } from 'lucide-react';
import { useLanguage } from '@/lib/i18n';

export function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Nilton Kummer. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
}
