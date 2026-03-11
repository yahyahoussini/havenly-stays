import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLang } from "@/hooks/use-lang";
import { useScrollAnimation } from "@/hooks/use-scroll-effects";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { MapPin, Star, Wifi, Car, UtensilsCrossed, Dumbbell, Waves, Coffee } from "lucide-react";
import LuxuryBookingModal from "@/components/LuxuryBookingModal";
import TiltCard3D from "@/components/TiltCard3D";

import hotel1 from "@/assets/hotel-1.jpg";
import hotel2 from "@/assets/hotel-2.jpg";
import hotel3 from "@/assets/hotel-3.jpg";
import hotel4 from "@/assets/hotel-4.jpg";
import hotel5 from "@/assets/hotel-5.jpg";
import hotel6 from "@/assets/hotel-6.jpg";

const hotels = [
  { name: "The Ando Suite", location: "Kyoto, Japan", country: "Japan", rating: 5, price: 520, image: hotel1, amenities: ["wifi", "dining", "spa", "gym"], description: "A serene Japanese-inspired suite nestled in the heart of Kyoto, offering breathtaking views of ancient temples and zen gardens." },
  { name: "Horizon Cliff Resort", location: "Algarve, Portugal", country: "Portugal", rating: 5, price: 680, image: hotel2, amenities: ["wifi", "dining", "pool", "parking"], description: "Perched on dramatic Atlantic cliffs, this resort offers infinity pools and world-class seafood dining with panoramic ocean views." },
  { name: "Pine Lodge Retreat", location: "Montana, USA", country: "USA", rating: 4, price: 310, image: hotel3, amenities: ["wifi", "dining", "parking", "coffee"], description: "A cozy mountain retreat surrounded by pristine forests, perfect for nature lovers seeking luxury in the wilderness." },
  { name: "Skyline Penthouse", location: "New York, USA", country: "USA", rating: 5, price: 950, image: hotel4, amenities: ["wifi", "dining", "gym", "coffee"], description: "An ultra-modern penthouse in Manhattan with floor-to-ceiling windows showcasing the iconic New York City skyline." },
  { name: "Desert Oasis Villa", location: "Marrakech, Morocco", country: "Morocco", rating: 5, price: 475, image: hotel5, amenities: ["wifi", "dining", "pool", "spa"], description: "A palatial villa with traditional Moroccan architecture, lush courtyards, and a private hammam spa experience." },
  { name: "Lakeside Mist Hotel", location: "Quebec, Canada", country: "Canada", rating: 4, price: 295, image: hotel6, amenities: ["wifi", "dining", "parking", "pool"], description: "A tranquil lakeside hotel offering misty morning views, canoe excursions, and authentic Canadian hospitality." },
];

const amenityIcons: Record<string, { icon: React.ElementType; label: string }> = {
  wifi: { icon: Wifi, label: "Wi-Fi" },
  dining: { icon: UtensilsCrossed, label: "Dining" },
  spa: { icon: Waves, label: "Spa" },
  gym: { icon: Dumbbell, label: "Gym" },
  pool: { icon: Waves, label: "Pool" },
  parking: { icon: Car, label: "Parking" },
  coffee: { icon: Coffee, label: "Café" },
};

interface HotelDetailProps {
  hotel: typeof hotels[0];
  open: boolean;
  onClose: () => void;
  onBook: () => void;
  bookNowLabel: string;
}

const HotelDetailModal = ({ hotel, open, onClose, onBook, bookNowLabel }: HotelDetailProps) => (
  <Dialog open={open} onOpenChange={(v) => !v && onClose()}>
    <DialogContent className="sm:max-w-lg p-0 glass-card-strong border-primary/20 overflow-hidden">
      <motion.div
        initial={{ rotateY: 90, opacity: 0 }}
        animate={{ rotateY: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        style={{ perspective: 1000, transformStyle: "preserve-3d" }}
      >
        <div className="relative">
          <img src={hotel.image} alt={hotel.name} className="w-full h-52 object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>
        <div className="p-6 pt-2 space-y-4">
          <div>
            <h3 className="font-serif text-2xl text-foreground">{hotel.name}</h3>
            <div className="flex items-center gap-2 mt-1 text-sm text-muted-foreground">
              <MapPin size={14} className="text-primary" />
              {hotel.location}
            </div>
          </div>
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className={i < hotel.rating ? "text-primary fill-primary" : "text-muted-foreground/30"} />
            ))}
            <span className="text-xs text-muted-foreground ms-2">{hotel.rating}.0</span>
          </div>
          <p className="text-sm text-foreground/70 leading-relaxed">{hotel.description}</p>
          <div className="flex flex-wrap gap-3">
            {hotel.amenities.map((a) => {
              const info = amenityIcons[a];
              if (!info) return null;
              const Icon = info.icon;
              return (
                <div key={a} className="flex items-center gap-1.5 text-xs text-foreground/60 bg-muted/40 px-3 py-1.5 rounded-full border border-primary/10">
                  <Icon size={14} className="text-primary" />
                  {info.label}
                </div>
              );
            })}
          </div>
          <div className="flex items-center justify-between pt-2 border-t border-primary/10">
            <p className="text-foreground font-semibold text-lg">
              ${hotel.price}<span className="text-foreground/40 text-sm font-normal"> / night</span>
            </p>
            <button onClick={onBook} className="gold-button px-6 py-2.5 rounded-lg text-sm tracking-wide">
              {bookNowLabel}
            </button>
          </div>
        </div>
      </motion.div>
    </DialogContent>
  </Dialog>
);

const LuxuryFeaturedHotels = () => {
  const { t } = useLang();
  const { ref, visible } = useScrollAnimation();
  const [selectedHotel, setSelectedHotel] = useState<typeof hotels[0] | null>(null);
  const [bookingHotel, setBookingHotel] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredHotels = useMemo(() => {
    if (!searchQuery.trim()) return hotels;
    const q = searchQuery.toLowerCase();
    return hotels.filter(
      (h) =>
        h.name.toLowerCase().includes(q) ||
        h.location.toLowerCase().includes(q) ||
        h.country.toLowerCase().includes(q)
    );
  }, [searchQuery]);

  return (
    <section id="hotels" className="section-spacing" ref={ref}>
      <div className="content-grid">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-10"
        >
          <h2 className="font-serif font-bold text-3xl md:text-5xl text-foreground mb-3">{t.featured.title}</h2>
          <div className="gold-line mx-auto mb-4" />
          <p className="text-muted-foreground text-sm max-w-lg mx-auto">{t.featured.subtitle}</p>
        </motion.div>

        {/* Search input */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={visible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-md mx-auto mb-10"
        >
          <div className="relative">
            <MapPin size={16} className="absolute start-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder={t.search.whereTo}
              className="w-full ps-9 pe-3 py-2.5 bg-muted/50 border border-primary/10 rounded-lg text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/40 transition-colors"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredHotels.map((hotel, i) => (
              <motion.div
                key={hotel.name}
                layout
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <TiltCard3D
                  className="group relative rounded-xl overflow-hidden border border-primary/10 cursor-pointer"
                  onClick={() => setSelectedHotel(hotel)}
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={hotel.image}
                      alt={hotel.name}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent" />
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <p className="text-xs text-primary/80 tracking-wider uppercase mb-1">{hotel.location}</p>
                    <h3 className="font-serif text-lg text-foreground mb-1">{hotel.name}</h3>
                    <p className="text-xs text-foreground/50 mb-3">
                      {"★".repeat(hotel.rating)}{"☆".repeat(5 - hotel.rating)}
                    </p>
                    <div className="flex items-center justify-between">
                      <p className="text-foreground font-semibold">
                        ${hotel.price}<span className="text-foreground/40 text-xs font-normal"> / night</span>
                      </p>
                      <button
                        onClick={(e) => { e.stopPropagation(); setBookingHotel(hotel.name); }}
                        className="gold-button px-4 py-1.5 rounded-lg text-xs tracking-wide"
                      >
                        {t.featured.bookNow}
                      </button>
                    </div>
                  </div>
                </TiltCard3D>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredHotels.length === 0 && (
          <p className="text-center text-muted-foreground text-sm mt-8">No hotels found matching your search.</p>
        )}
      </div>

      {selectedHotel && (
        <HotelDetailModal
          hotel={selectedHotel}
          open={!!selectedHotel}
          onClose={() => setSelectedHotel(null)}
          onBook={() => { setBookingHotel(selectedHotel.name); setSelectedHotel(null); }}
          bookNowLabel={t.featured.bookNow}
        />
      )}

      <LuxuryBookingModal hotelName={bookingHotel} open={!!bookingHotel} onClose={() => setBookingHotel(null)} />
    </section>
  );
};

export default LuxuryFeaturedHotels;
