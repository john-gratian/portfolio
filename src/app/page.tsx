import Hero from "@/components/home/Hero";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Philosophy from "@/components/home/Philosophy";
import Skills from "@/components/home/Skills";
import HomeCTA from "@/components/home/HomeCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProjects />
      <Philosophy />
      <Skills />
      <HomeCTA />
    </>
  );
}
