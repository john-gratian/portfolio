import PageTransition from "@/components/layout/PageTransition";
import Bio from "@/components/about/Bio";
import Experience from "@/components/about/Experience";
import HomeCTA from "@/components/home/HomeCTA";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Human Behavior Specialist in UX Design",
  description: "UX Designer with a Masters in Clinical Psychology — applying behavioral science and cognitive principles to create impactful digital experiences.",
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
