import { motion } from "framer-motion";
import { Search, Building, CheckCircle } from "lucide-react";
import { useLang } from "@/hooks/use-lang";
import { useScrollAnimation } from "@/hooks/use-scroll-effects";

const icons = [Search, Building, CheckCircle];

const LuxuryHowItWorks = () => {
  const { t } = useLang();
  const { ref, visible } = useScrollAnimation();

  return (
    <section className="section-spacing relative" ref={ref}>
      <div className="content-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-foreground mb-3">{t.howItWorks.title}</h2>
          <div className="gold-line mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">{t.howItWorks.subtitle}</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          {/* Connecting line */}
          <div className="hidden md:block absolute top-16 left-[20%] right-[20%] h-px border-t-2 border-dashed border-primary/20" />

          {t.howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                animate={visible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3 + i * 0.2 }}
                className="text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={visible ? { scale: 1, rotateY: [0, 360] } : {}}
                  transition={{
                    scale: { type: "spring", stiffness: 200, delay: 0.5 + i * 0.2 },
                    rotateY: { duration: 8, repeat: Infinity, ease: "linear", delay: 0.5 + i * 0.2 },
                  }}
                  className="w-20 h-20 rounded-full border border-primary/30 flex items-center justify-center mx-auto mb-6 relative"
                  style={{ boxShadow: "0 0 30px hsl(43 52% 54% / 0.15)", transformStyle: "preserve-3d" }}
                >
                  <Icon size={28} className="text-primary" />
                  <span className="absolute -top-2 -end-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                    {i + 1}
                  </span>
                </motion.div>
                <h3 className="font-serif text-lg text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">{step.desc}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LuxuryHowItWorks;
