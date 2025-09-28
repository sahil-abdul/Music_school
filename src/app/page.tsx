import Courses from "@/components/Courses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import MovingCards from "@/components/MovingCards";
import Webinars from "@/components/Webinars";
import WhyCooseUs from "@/components/WhyCooseUs";

export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
        <HeroSection />
        <Courses />
        <WhyCooseUs />
        <MovingCards />
        <Webinars />
        <Instructors/>
        <Footer/>
      </main>
    </>
  );
}
