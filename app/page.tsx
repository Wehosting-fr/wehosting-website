import { BenefitsSection } from "@/components/layout/sections/benefits";
import { CommunitySection } from "@/components/layout/sections/community";
import { ContactSection } from "@/components/layout/sections/contact";
import { FAQSection } from "@/components/layout/sections/faq";
import { FeaturesSection } from "@/components/layout/sections/features";
import { FooterSection } from "@/components/layout/sections/footer";
import { HeroSection } from "@/components/layout/sections/hero";
import { PricingSection } from "@/components/layout/sections/pricing";
import { ServicesSection } from "@/components/layout/sections/services";
import { SponsorsSection } from "@/components/layout/sections/sponsors";
import { TeamSection } from "@/components/layout/sections/team";
import { TestimonialSection } from "@/components/layout/sections/testimonial";

export const metadata = {
  title: "Wehosting - Hébergement de serveurs privés",
  description: "Hébergez vos serveurs de jeux vidéo, sites web et services web à faibles coûts avec Wehosting.",
  openGraph: {
    type: "website",
    url: "https://wehosting.fr",
    title: "Wehosting - Hébergement de serveurs privés",
    description: "Hébergez vos serveurs de jeux vidéo, sites web et services web à faibles coûts avec Wehosting.",
    images: [
      {
        url: "https://www.wehosting.fr/assets/branding/logo.png",
        width: 1200,
        height: 630,
        alt:  "Wehosting - Hébergement de serveurs privés",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "https://github.com/wehosting-fr",
    title: "Wehosting - Hébergement de serveurs privés",
    description: "Hébergez vos serveurs de jeux vidéo, sites web et services web à faibles coûts avec Wehosting.",
    images: [
      "https://www.wehosting.fr/assets/branding/logo.png",
    ],
  },
};

export default function Home() {
  return (
    <div className="flex flex-col w-full items-center">
      <HeroSection />
      <SponsorsSection />
      <BenefitsSection />
      <FeaturesSection />
      <ServicesSection />
      <TestimonialSection />
      <TeamSection />
      <CommunitySection />
      <PricingSection />
      <ContactSection />
      <FAQSection />
      <FooterSection />
    </div>
  );
}
