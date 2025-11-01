import HeroSection from "../components/HeroSection";
import AmenitiesSection from "../components/AmenitiesSection";
import ConstructionProgress from "../components/ConstructionProgress";
import GallerySection from "../components/GallerySection";
import FloorPlanSection from "../components/FloorPlanSection";
import LocationSection from "../components/LocationSection";
import SustainabilitySection from "../components/SustainabilitySection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";
import VideoSection from "@/components/VideoSection";

export default function Home() {
  return (
    <main className="h-screen w-screen overflow-x-hidden Inter bg-white text-gray-900">
      <HeroSection />
      <VideoSection />
      <AmenitiesSection />
      <FloorPlanSection />
      <LocationSection />
      <ConstructionProgress />
      <GallerySection />
      <SustainabilitySection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
