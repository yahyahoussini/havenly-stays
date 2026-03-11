import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { useLang } from "@/hooks/use-lang";
import { toast } from "sonner";
import { Check } from "lucide-react";

interface Props {
  hotelName: string | null;
  open: boolean;
  onClose: () => void;
}

const LuxuryBookingModal = ({ hotelName, open, onClose }: Props) => {
  const { t } = useLang();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      toast.success(t.modal.success, { description: t.modal.successDesc });
      setName(""); setEmail(""); setPhone("");
      setSuccess(false);
      onClose();
    }, 2000);
  };

  return (
    <Dialog open={open} onOpenChange={(v) => { if (!v) { setSuccess(false); onClose(); } }}>
      <DialogContent className="sm:max-w-md glass-card-strong border-primary/20">
        <AnimatePresence mode="wait">
          {success ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex flex-col items-center justify-center py-12"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
                className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4"
              >
                <Check size={32} className="text-primary" />
              </motion.div>
              <h3 className="font-serif text-xl text-foreground">{t.modal.success}</h3>
              <p className="text-sm text-muted-foreground mt-2">{t.modal.successDesc}</p>
            </motion.div>
          ) : (
            <motion.div key="form" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
              <DialogHeader>
                <DialogTitle className="font-serif text-xl gold-gradient-text">{t.modal.title}</DialogTitle>
                <DialogDescription className="text-muted-foreground text-sm">{hotelName}</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-4">
                {[
                  { label: t.modal.name, type: "text", value: name, set: setName },
                  { label: t.modal.email, type: "email", value: email, set: setEmail },
                  { label: t.modal.phone, type: "tel", value: phone, set: setPhone },
                ].map((field) => (
                  <div key={field.label}>
                    <label className="text-xs font-medium text-primary/80 uppercase tracking-wider block mb-1.5">{field.label}</label>
                    <input
                      required type={field.type} value={field.value} onChange={(e) => field.set(e.target.value)}
                      className="w-full px-3 py-2.5 bg-muted/50 border border-primary/10 rounded-lg text-sm text-foreground focus:outline-none focus:border-primary/40 transition-colors"
                    />
                  </div>
                ))}
                <button type="submit" className="mt-2 gold-button py-2.5 rounded-lg text-sm tracking-wide">
                  {t.modal.confirm}
                </button>
              </form>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default LuxuryBookingModal;
