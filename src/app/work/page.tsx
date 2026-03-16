import PageTransition from "@/components/layout/PageTransition";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectGrid from "@/components/work/ProjectGrid";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Work | Portfolio",
  description: "A collection of UI/UX design projects spanning mobile apps, web platforms, and design systems.",
};

export default function WorkPage() {
  return (
    <PageTransition>
      <section className="pt-32 sm:pt-40 pb-24 sm:pb-32">
        <div className="page-container">
          <SectionHeading
            label="Work"
            title="Case studies & projects"
            description="Each project represents a unique challenge solved through research, design thinking, and iterative refinement."
          />

          <ProjectGrid />
        </div>
      </section>
    </PageTransition>
  );
}
