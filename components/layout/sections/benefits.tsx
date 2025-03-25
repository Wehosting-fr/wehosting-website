import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface BenefitsProps {
  icon: string;
  title: string;
  description: string;
}

const benefitList: BenefitsProps[] = [
  {
    icon: "Flag",
    title: "Entreprise Française",
    description:
      "Profitez de nos infrastructures situées en France pour une latence minimale et des prix inégalables.",
  },
  {
    icon: "LineChart",
    title: "Vos données privées",
    description:
      "Vos données sont intégralement entre nos mains. Comme mentionné dans notre démarche, nous ne vendons absolument aucune donnée.",
  },
  {
    icon: "Wallet",
    title: "Prix compétitifs",
    description:
      "Nos prix sont étudiés pour être les plus compétitifs du marché. Nous vous garantissons les meilleurs tarifs.",
  },
  {
    icon: "Sparkle",
    title: "Support 24/7",
    description:
      "Notre équipe est disponible 24/7 pour répondre à toutes vos questions et vous aider dans vos démarches.",
  },
];

export const BenefitsSection = () => {
  return (
    <section id="benefits" className="container py-24 sm:py-32">
      <div className="grid lg:grid-cols-2 place-items-center lg:gap-24">
        <div>
          <h2 className="text-lg text-primary mb-2 tracking-wider">Pourquoi nous ?</h2>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Choisir Wehosting a quatre avantages
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Wehosting est une entreprise française qui vous propose des services d'hébergement web, de serveurs de jeux et de VPS. Nous vous garantissons des prix compétitifs, un support 24/7 et des infrastructures situées en France. Nous ne vendons aucune donnée et nous nous engageons à respecter votre vie privée.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-4 w-full">
          {benefitList.map(({ icon, title, description }, index) => (
            <Card
              key={title}
              className="bg-muted/50 dark:bg-card hover:bg-background transition-all delay-75 group/number"
            >
              <CardHeader>
                <div className="flex justify-between">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={32}
                    color="hsl(var(--primary))"
                    className="mb-6 text-primary"
                  />
                  <span className="text-5xl text-muted-foreground/15 font-medium transition-all delay-75 group-hover/number:text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground">
                {description}
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
