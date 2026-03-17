import Hero from "@/components/home/Hero";
import BehavioralApproach from "@/components/home/BehavioralApproach";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Philosophy from "@/components/home/Philosophy";
import Skills from "@/components/home/Skills";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <BehavioralApproach />
      <FeaturedProjects />
      <Philosophy />
      <Skills />
      <HomeCTA />
    </>
  );
}
