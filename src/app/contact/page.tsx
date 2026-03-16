import PageTransition from "@/components/layout/PageTransition";
import ContactContent from "@/components/contact/ContactContent";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Portfolio",
  description: "Get in touch to discuss your next project or collaboration opportunity.",
};

export default function ContactPage() {
  return (
    <PageTransition>
      <ContactContent />
    </PageTransition>
  );
}
