import { notFound } from "next/navigation";
import { projects, getProject } from "@/data/projects";
import PageTransition from "@/components/layout/PageTransition";
import CaseStudyHero from "@/components/case-study/CaseStudyHero";
import Overview from "@/components/case-study/Overview";
import ProblemStatement from "@/components/case-study/ProblemStatement";
import ResearchInsights from "@/components/case-study/ResearchInsights";
import DesignStrategy from "@/components/case-study/DesignStrategy";
import ImageShowcase from "@/components/case-study/ImageShowcase";
import BeforeAfter from "@/components/case-study/BeforeAfter";
import DesignCallout from "@/components/case-study/DesignCallout";
import UserJourney from "@/components/case-study/UserJourney";
import ImpactSection from "@/components/case-study/ImpactSection";
import KeyLearnings from "@/components/case-study/KeyLearnings";
import BehavioralInsights from "@/components/case-study/BehavioralInsights";
import AppliedPsychology from "@/components/case-study/AppliedPsychology";
import BehavioralImpact from "@/components/case-study/BehavioralImpact";
import NextProject from "@/components/case-study/NextProject";
import type { Metadata } from "next";

interface PageProps {
  params: { slug: string };
}

// Generate static paths for all projects
export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const project = getProject(params.slug);
  if (!project) return { title: "Project Not Found" };

  return {
    title: `${project.title} | Case Study`,
    description: project.shortDescription,
  };
}

export default function CaseStudyPage({ params }: PageProps) {
  const project = getProject(params.slug);

  if (!project) {
    notFound();
  }

  // Find next project for navigation
  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <PageTransition>
      <CaseStudyHero project={project} />
      <Overview overview={project.overview} />
      <ProblemStatement problem={project.problem} />
      <ResearchInsights research={project.research} />

      {project.behavioralInsights && project.behavioralInsights.length > 0 && (
        <BehavioralInsights insights={project.behavioralInsights} />
      )}

      {project.userJourney && project.userJourney.length > 0 && (
        <UserJourney steps={project.userJourney} />
      )}

      <DesignStrategy strategy={project.designStrategy} />

      {project.appliedPsychology && project.appliedPsychology.length > 0 && (
        <AppliedPsychology items={project.appliedPsychology} />
      )}

      <ImageShowcase
        label="Wireframes"
        title="Exploring the structure"
        images={project.wireframeImages}
        columns={2}
      />

      {project.prototypeImages.length > 0 && (
        <ImageShowcase
          label="Prototypes"
          title="Testing interactions"
          images={project.prototypeImages}
          columns={1}
        />
      )}

      {project.beforeAfter && project.beforeAfter.length > 0 && (
        <BeforeAfter items={project.beforeAfter} />
      )}

      <ImageShowcase
        label="Final UI"
        title="The finished product"
        images={project.finalUIImages}
        columns={3}
      />

      {project.designDecisions && project.designDecisions.length > 0 && (
        <DesignCallout decisions={project.designDecisions} />
      )}

      <ImpactSection metrics={project.impact} accentColor={project.color} />

      {project.behavioralImpact && project.behavioralImpact.length > 0 && (
        <BehavioralImpact items={project.behavioralImpact} />
      )}

      <KeyLearnings learnings={project.keyLearnings} />
      <NextProject project={nextProject} />
    </PageTransition>
  );
}
