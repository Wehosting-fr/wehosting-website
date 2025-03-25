import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Icon } from "@/components/ui/icon";
import { icons } from "lucide-react";

interface FeaturesProps {
  icon: string;
  title: string;
  description: string;
}

const featureList: FeaturesProps[] = [
  {
    icon: "TabletSmartphone",
    title: "Mobile Friendly",
    description:
      "Toutes nos interfaces sont conçues pour être utilisées sur mobile, tablette et ordinateur. Même sur les Wiko :)",
  },
  {
    icon: "BadgeCheck",
    title: "Quality Content",
    description:
      "Nos contenus sont de qualité et vérifiés par nos équipes pour vous garantir une expérience optimale.",
  },
  {
    icon: "Goal",
    title: "Suivi complet",
    description:
      "Notre équipe vous accompagnent dans vos démarches et vous proposent un suivi complet de vos projets.",
  },
  {
    icon: "PictureInPicture",
    title: "Clear Design",
    description:
      "Nos designs sont clairs et épurés pour vous permettre de vous concentrer sur l'essentiel. Pas de fioritures.",
  },
  {
    icon: "MousePointerClick",
    title: "User Friendly",
    description:
      "Nos interfaces sont conçues pour être intuitives et faciles à prendre en main. Pas besoin de mode d'emploi.",
  },
  {
    icon: "Newspaper",
    title: "Informative",
    description:
      "Notre newsletter vous informe régulièrement des nouveautés et des mises à jour de nos services, ainsi que des éventuels incidents.",
  },
];

export const FeaturesSection = () => {
  return (
    <section id="features" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Features
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Qu'est ce qui nous différencie ?
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Chez Wehosting, nous mettons un point d'honneur à vous proposer des services de qualité, pensés pour vous et vos besoins. Découvrez ce qui nous différencie de la concurrence.
      </h3>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {featureList.map(({ icon, title, description }) => (
          <div key={title}>
            <Card className="h-full bg-background border-0 shadow-none">
              <CardHeader className="flex justify-center items-center">
                <div className="bg-primary/20 p-2 rounded-full ring-8 ring-primary/10 mb-4">
                  <Icon
                    name={icon as keyof typeof icons}
                    size={24}
                    color="hsl(var(--primary))"
                    className="text-primary"
                  />
                </div>

                <CardTitle>{title}</CardTitle>
              </CardHeader>

              <CardContent className="text-muted-foreground text-center">
                {description}
              </CardContent>
            </Card>
          </div>
        ))}
      </div>
    </section>
  );
};
