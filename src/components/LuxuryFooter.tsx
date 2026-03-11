import { useLang } from "@/hooks/use-lang";
import { Instagram, Twitter, Facebook, Youtube } from "lucide-react";

const socialIcons = [
  { Icon: Instagram, href: "#" },
  { Icon: Twitter, href: "#" },
  { Icon: Facebook, href: "#" },
  { Icon: Youtube, href: "#" },
];

const LuxuryFooter = () => {
  const { t } = useLang();

  const links = [
    { label: t.footer.home, href: "#home" },
    { label: t.footer.hotels, href: "#hotels" },
    { label: t.footer.about, href: "#about" },
    { label: t.footer.contact, href: "#contact" },
    { label: t.footer.privacy, href: "#" },
    { label: t.footer.terms, href: "#" },
  ];

  return (
    <footer className="relative">
      {/* Gold gradient top border */}
      <div className="h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent" />

      <div className="py-12">
        <div className="content-grid flex flex-col md:flex-row items-center justify-between gap-8">
          <a href="#" className="font-serif text-xl gold-gradient-text tracking-wider flex items-center gap-2">
            <img src="/favicon.ico" alt="Hotele" className="w-6 h-6" />
            HOTELE
          </a>

          <ul className="flex flex-wrap items-center justify-center gap-6">
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href} className="text-xs text-muted-foreground tracking-wide uppercase transition-colors hover:text-primary">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            {socialIcons.map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                className="text-muted-foreground transition-all duration-300 hover:text-primary"
                style={{ filter: "drop-shadow(0 0 0 transparent)" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.filter = "drop-shadow(0 0 8px hsl(43 52% 54% / 0.5))"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.filter = "drop-shadow(0 0 0 transparent)"; }}
              >
                <Icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div className="content-grid mt-8">
          <p className="text-xs text-muted-foreground/50 text-center">
            © {new Date().getFullYear()} HOTELE. {t.footer.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default LuxuryFooter;
