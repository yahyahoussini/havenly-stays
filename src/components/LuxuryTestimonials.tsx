import { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useLang } from "@/hooks/use-lang";
import { useScrollAnimation } from "@/hooks/use-scroll-effects";

const reviews = [
  { name: "Elena M.", country: "🇮🇹", rating: 5, text: "An unforgettable experience. Every detail was flawless, from the booking to checkout." },
  { name: "James W.", country: "🇬🇧", rating: 5, text: "The most seamless hotel booking I've ever used. The property exceeded all expectations." },
  { name: "Aiko T.", country: "🇯🇵", rating: 5, text: "Beautifully curated selection. Found the perfect ryokan for our anniversary trip." },
  { name: "Marco P.", country: "🇧🇷", rating: 4, text: "Impressed by the quality of every listed hotel. Will definitely use again for my next vacation." },
  { name: "Fatima H.", country: "🇲🇦", rating: 5, text: "Exceptional service and stunning properties. The booking process was incredibly smooth." },
];

const LuxuryTestimonials = () => {
  const { t } = useLang();
  const { ref, visible } = useScrollAnimation();
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;
    let animFrame: number;
    let scrollPos = 0;

    const scroll = () => {
      if (!isPaused) {
        scrollPos += 0.5;
        if (scrollPos >= el.scrollWidth / 2) scrollPos = 0;
        el.scrollLeft = scrollPos;
      }
      animFrame = requestAnimationFrame(scroll);
    };
    animFrame = requestAnimationFrame(scroll);
    return () => cancelAnimationFrame(animFrame);
  }, [isPaused]);

  const allReviews = [...reviews, ...reviews];

  return (
    <section className="section-spacing" ref={ref}>
      <div className="content-grid mb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-foreground mb-3">{t.testimonials.title}</h2>
          <div className="gold-line mx-auto mb-4" />
          <p className="text-muted-foreground text-sm">{t.testimonials.subtitle}</p>
        </motion.div>
      </div>

      <div
        ref={scrollRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className="overflow-hidden"
      >
        <div className="flex gap-6 w-max px-6">
          {allReviews.map((review, i) => (
            <div
              key={i}
              className="glass-card p-6 w-[340px] flex-shrink-0 flex flex-col"
            >
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: 5 }).map((_, s) => (
                  <span key={s} className={s < review.rating ? "text-primary" : "text-muted-foreground/30"}>★</span>
                ))}
              </div>
              <p className="text-sm text-foreground/80 leading-relaxed mb-6 flex-1">"{review.text}"</p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-sm">
                  {review.country}
                </div>
                <p className="text-sm font-medium text-foreground">{review.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LuxuryTestimonials;
