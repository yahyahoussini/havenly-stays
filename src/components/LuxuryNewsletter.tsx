import { useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/hooks/use-lang";
import { useScrollAnimation } from "@/hooks/use-scroll-effects";
import { toast } from "sonner";
import WaveBackground3D from "@/components/WaveBackground3D";

const LuxuryNewsletter = () => {
  const { t } = useLang();
  const { ref, visible } = useScrollAnimation();
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Subscribed!", { description: "Exclusive deals are on their way." });
    setEmail("");
  };

  return (
    <section id="contact" className="section-spacing relative overflow-hidden" ref={ref}>
      {/* 3D Wave Background */}
      <WaveBackground3D />

      {/* Animated gradient background */}
      <div
        className="absolute inset-0 animate-gradient-shift opacity-30"
        style={{ background: "linear-gradient(135deg, hsl(43 52% 54% / 0.1), hsl(210 40% 10% / 0.3), hsl(43 52% 54% / 0.1))" }}
      />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={visible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8 }}
        className="relative content-grid max-w-2xl text-center"
        style={{ zIndex: 1 }}
      >
        <h2 className="font-serif font-bold text-3xl md:text-5xl text-foreground mb-3">{t.newsletter.title}</h2>
        <div className="gold-line mx-auto mb-4" />
        <p className="text-muted-foreground text-sm mb-10">{t.newsletter.subtitle}</p>

        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
            placeholder={t.newsletter.placeholder}
            className="flex-1 px-4 py-3 bg-muted/50 border border-primary/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
          />
          <button type="submit" className="gold-button py-3 px-8 rounded-lg text-sm tracking-wide whitespace-nowrap animate-glow-pulse">
            {t.newsletter.subscribe}
          </button>
        </form>
      </motion.div>
    </section>
  );
};

export default LuxuryNewsletter;
