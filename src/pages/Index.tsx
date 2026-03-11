import LuxuryNavbar from "@/components/LuxuryNavbar";
import LuxuryHero from "@/components/LuxuryHero";
import StatsBar from "@/components/StatsBar";
import LuxuryFeaturedHotels from "@/components/LuxuryFeaturedHotels";
import LuxuryHowItWorks from "@/components/LuxuryHowItWorks";
import LuxuryExperience from "@/components/LuxuryExperience";
import LuxuryTestimonials from "@/components/LuxuryTestimonials";
import LuxuryNewsletter from "@/components/LuxuryNewsletter";
import LuxuryFooter from "@/components/LuxuryFooter";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <LuxuryNavbar />
      <LuxuryHero />
      <StatsBar />
      <LuxuryFeaturedHotels />
      <LuxuryHowItWorks />
      <LuxuryExperience />
      <LuxuryTestimonials />
      <LuxuryNewsletter />
      <LuxuryFooter />
    </div>
  );
};

export default Index;
