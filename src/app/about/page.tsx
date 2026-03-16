import PageTransition from "@/components/layout/PageTransition";
import Bio from "@/components/about/Bio";
import Experience from "@/components/about/Experience";
import HomeCTA from "@/components/home/HomeCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Portfolio",
  description: "Learn about my design philosophy, experience, and the tools I use to create exceptional digital experiences.",
};

export default function AboutPage() {
  return (
    <PageTransition>
      <Bio />
      <Experience />
      <HomeCTA />
    </PageTransition>
  );
}
