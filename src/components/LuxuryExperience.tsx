import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { useLang } from "@/hooks/use-lang";
import { useScrollAnimation } from "@/hooks/use-scroll-effects";
import heroImage from "@/assets/hero-hotel.jpg";

const LuxuryExperience = () => {
  const { t, dir } = useLang();
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="section-spacing" ref={ref}>
      <div className="content-grid">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${dir === "rtl" ? "lg:grid-flow-dense" : ""}`}>
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? 50 : -50 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className={`relative rounded-xl overflow-hidden ${dir === "rtl" ? "lg:col-start-2" : ""}`}
          >
            <img src={heroImage} alt="Luxury experience" className="w-full aspect-[4/3] object-cover rounded-xl" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent rounded-xl" />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? -50 : 50 }}
            animate={visible ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={dir === "rtl" ? "lg:col-start-1 lg:row-start-1" : ""}
          >
            <h2 className="font-serif font-bold text-3xl md:text-4xl text-foreground mb-3">{t.luxury.title}</h2>
            <div className="gold-line mb-4" />
            <p className="text-muted-foreground text-sm mb-8">{t.luxury.subtitle}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {t.luxury.features.map((feature, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={visible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.4 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <Check size={16} className="text-primary flex-shrink-0" />
                  <span className="text-sm text-foreground/80">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LuxuryExperience;
