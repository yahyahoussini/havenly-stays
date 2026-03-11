import { useState, useEffect, useMemo } from "react";
import { MapPin, CalendarIcon, Users, ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import { useLang } from "@/hooks/use-lang";
import { useParallax } from "@/hooks/use-scroll-effects";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import heroImage from "@/assets/hero-hotel.jpg";
import HeroParticles3D from "@/components/HeroParticles3D";

const LuxuryHero = () => {
  const { t } = useLang();
  const parallaxOffset = useParallax(0.4);
  const [typedText, setTypedText] = useState("");
  const fullText = t.hero.subtitle;

  const [destination, setDestination] = useState("");
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [guests, setGuests] = useState("");

  useEffect(() => {
    setTypedText("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) {
        setTypedText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, 35);
    return () => clearInterval(interval);
  }, [fullText]);

  const isComplete = useMemo(
    () => destination.trim() !== "" && checkIn && checkOut && guests.trim() !== "",
    [destination, checkIn, checkOut, guests]
  );

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax Background */}
      <div
        className="absolute inset-0 scale-110"
        style={{ transform: `translateY(${parallaxOffset}px) scale(1.1)` }}
      >
        <img src={heroImage} alt="Luxury hotel" className="w-full h-full object-cover" loading="eager" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />

      {/* 3D Particles instead of Bokeh */}
      <HeroParticles3D />

      <div className="relative content-grid w-full pt-20" style={{ zIndex: 2 }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="text-center mb-12"
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="font-serif font-bold text-4xl md:text-6xl lg:text-7xl text-foreground mb-6 leading-tight"
          >
            {t.hero.headline.split(" ").map((word, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + i * 0.1 }}
                className={word.toLowerCase() === "luxury" || word.toLowerCase() === "luxe" || word.toLowerCase() === "lujo" || word === "الفخامة" ? "gold-gradient-text" : ""}
              >
                {word}{" "}
              </motion.span>
            ))}
          </motion.h1>

          <div className="text-foreground/60 text-base md:text-lg h-8 font-light">
            {typedText}
            <span className="animate-pulse text-primary">|</span>
          </div>
        </motion.div>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
          className="glass-card-strong p-4 md:p-6 flex flex-col md:flex-row gap-4 items-end max-w-4xl mx-auto"
        >
          <div className="flex-1 w-full">
            <label className="text-xs font-medium text-primary/80 mb-1.5 block tracking-wider uppercase">{t.search.destination}</label>
            <div className="relative">
              <MapPin size={16} className="absolute start-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="text" value={destination} onChange={(e) => setDestination(e.target.value)} placeholder={t.search.whereTo}
                className="w-full ps-9 pe-3 py-2.5 bg-muted/50 border border-primary/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors" />
            </div>
          </div>

          <div className="flex-1 w-full">
            <label className="text-xs font-medium text-primary/80 mb-1.5 block tracking-wider uppercase">{t.search.checkin}</label>
            <Popover>
              <PopoverTrigger asChild>
                <button className={cn("w-full flex items-center gap-2 px-3 py-2.5 bg-muted/50 border border-primary/10 rounded-lg text-sm transition-colors focus:outline-none focus:border-primary/40", !checkIn && "text-muted-foreground")}>
                  <CalendarIcon size={16} className="text-muted-foreground" />
                  {checkIn ? format(checkIn, "MMM d, yyyy") : t.search.selectDate}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 glass-card-strong" align="start">
                <Calendar mode="single" selected={checkIn} onSelect={setCheckIn} disabled={(d) => d < new Date()} initialFocus className="p-3 pointer-events-auto" />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex-1 w-full">
            <label className="text-xs font-medium text-primary/80 mb-1.5 block tracking-wider uppercase">{t.search.checkout}</label>
            <Popover>
              <PopoverTrigger asChild>
                <button className={cn("w-full flex items-center gap-2 px-3 py-2.5 bg-muted/50 border border-primary/10 rounded-lg text-sm transition-colors focus:outline-none focus:border-primary/40", !checkOut && "text-muted-foreground")}>
                  <CalendarIcon size={16} className="text-muted-foreground" />
                  {checkOut ? format(checkOut, "MMM d, yyyy") : t.search.selectDate}
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0 glass-card-strong" align="start">
                <Calendar mode="single" selected={checkOut} onSelect={setCheckOut} disabled={(d) => d < (checkIn || new Date())} initialFocus className="p-3 pointer-events-auto" />
              </PopoverContent>
            </Popover>
          </div>

          <div className="flex-1 w-full">
            <label className="text-xs font-medium text-primary/80 mb-1.5 block tracking-wider uppercase">{t.search.guests}</label>
            <div className="relative">
              <Users size={16} className="absolute start-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
              <input type="number" min="1" max="10" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder={t.search.howMany}
                className="w-full ps-9 pe-3 py-2.5 bg-muted/50 border border-primary/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors" />
            </div>
          </div>

          <button
            className={cn(
              "gold-button py-2.5 px-8 rounded-lg text-sm whitespace-nowrap transition-all duration-500",
              isComplete ? "opacity-100 animate-glow-pulse" : "opacity-40 cursor-default"
            )}
          >
            {t.search.search}
          </button>
        </motion.div>

        {/* Scroll Arrow */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="flex justify-center mt-16"
        >
          <ChevronDown size={28} className="text-primary/60 animate-scroll-arrow" />
        </motion.div>
      </div>
    </section>
  );
};

export default LuxuryHero;
