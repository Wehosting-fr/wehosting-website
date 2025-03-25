import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

enum ProService {
  YES = 1,
  NO = 0,
}
interface ServiceProps {
  title: string;
  pro: ProService;
  description: string;
}
const serviceList: ServiceProps[] = [
  {
    title: "Hébergements Game",
    description:
      "Vous pouvez héberger vos serveurs de jeux sur nos infrastructures. Nous vous garantissons une latence minimale et des performances optimales.",
    pro: 0,
  },
  {
    title: "Hébergements Web",
    description:
      "Nous vous proposons des offres d'hébergement web pour tous vos projets. Nos infrastructures sont situées en France pour une latence minimale.",
    pro: 0,
  },
  {
    title: "Hébergements Dev",
    description: "Vous pouvez héberger vos projets de développement sur nos infrastructures. NodeJS, Python, PHP, Ruby... Tout est possible.",
    pro: 0,
  },
  {
    title: "Hébergements VPS",
    description: "Nos VPS sont performants et sécurisés. Vous pouvez les personnaliser selon vos besoins. Linux ? Windows ? C'est vous qui choisissez.",
    pro: 1,
  },
  {
    title: "Hébergements Personnalisés",
    description: "Vous avez des besoins spécifiques ? Contactez-nous pour une offre personnalisée. Nous vous accompagnerons tout au long de l'installation.",
    pro: 0,
  },
];

export const ServicesSection = () => {
  return (
    <section id="services" className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Services
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Développez votre activité
      </h2>
      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground mb-8">
        Découvrez nos offres d'hébergement et choisissez celle qui vous correspond le mieux
      </h3>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-4 w-full lg:w-[60%] mx-auto">
        {serviceList.map(({ title, description, pro }) => (
          <Card
            key={title}
            className="bg-muted/60 dark:bg-card h-full relative"
          >
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{description}</CardDescription>
            </CardHeader>
            <Badge
              data-pro={ProService.YES === pro}
              variant="secondary"
              className="absolute -top-2 -right-3 data-[pro=false]:hidden"
            >
              ⌛BIENTÔT
            </Badge>
          </Card>
        ))}
      </div>
    </section>
  );
};
