import { motion } from "framer-motion";
import { useLang } from "@/hooks/use-lang";
import { useScrollAnimation, useCountUp } from "@/hooks/use-scroll-effects";
import GoldGlobe3D from "@/components/GoldGlobe3D";

const statsData = [
  { value: 500, suffix: "+", key: "hotels" as const },
  { value: 120, suffix: "+", key: "countries" as const },
  { value: 1000000, suffix: "+", key: "guests" as const, format: true },
  { value: 4.9, suffix: "★", key: "rating" as const, decimal: true },
];

const StatsBar = () => {
  const { t } = useLang();
  const { ref, visible } = useScrollAnimation(0.3);

  return (
    <section ref={ref} className="relative py-12 md:py-16">
      <div className="absolute inset-0 glass-card rounded-none" />
      <div className="relative content-grid">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
          {statsData.map((stat, i) => (
            <motion.div
              key={stat.key}
              initial={{ opacity: 0, y: 20 }}
              animate={visible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="text-center"
            >
              {stat.key === "countries" ? (
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 mb-2">
                    <GoldGlobe3D className="w-full h-full" />
                  </div>
                  <CounterDisplay end={stat.value} started={visible} decimal={stat.decimal} format={stat.format} suffix={stat.suffix} />
                  <p className="text-sm text-foreground/50 mt-1 tracking-wide">{t.stats[stat.key]}</p>
                </div>
              ) : (
                <>
                  <CounterDisplay end={stat.value} started={visible} decimal={stat.decimal} format={stat.format} suffix={stat.suffix} />
                  <p className="text-sm text-foreground/50 mt-1 tracking-wide">{t.stats[stat.key]}</p>
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

function CounterDisplay({ end, started, decimal, format: fmt, suffix }: { end: number; started: boolean; decimal?: boolean; format?: boolean; suffix: string }) {
  const raw = useCountUp(decimal ? end * 10 : end, 2000, started);
  let display: string;
  if (decimal) {
    display = (raw / 10).toFixed(1);
  } else if (fmt) {
    display = raw >= 1000000 ? "1M" : raw >= 1000 ? `${Math.floor(raw / 1000)}K` : `${raw}`;
  } else {
    display = `${raw}`;
  }

  return (
    <p className="font-serif text-3xl md:text-4xl font-bold gold-gradient-text">
      {display}{suffix}
    </p>
  );
}

export default StatsBar;
