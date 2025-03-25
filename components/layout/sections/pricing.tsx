import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";

enum PopularPlan {
  NO = 0,
  YES = 1,
}

interface PlanProps {
  title: string;
  popular: PopularPlan;
  price: number;
  description: string;
  buttonText: string;
  benefitList: string[];
}

const plans: PlanProps[] = [
  {
    title: "FreeJS & FreePy",
    popular: 0,
    price: 0,
    description:
      "Hébergez vos projets NodeJS ou Python gratuitement.",
    buttonText: "Commander mon serveur Gratuit",
    benefitList: [
      "512 Mo DDR4",
      "1 vCore 3.5GHz",
      "2 Go SSD NVMe",
      "1 Backup",
      "1 Port dédié",
      "1 Base de données"
    ],
  },
  {
    title: "FreeCraft",
    popular: 1,
    price: 0,
    description:
      "Lancez votre aventure survie ou créatif 100% gratuitement.",
    buttonText: "Commander mon serveur Gratuit",
    benefitList: [
      "2 Go DDR4",
      "2 vCore 3.5GHz",
      "4 Go SSD NVMe",
      "1 Backup",
      "1 Port dédié",
      "1 Base de données"
    ],
  },
  {
    title: "Personnalisé",
    popular: 0,
    price: 0,
    description:
      "Besoins spécifiques ? Contactez-nous pour une offre sur mesure.",
      buttonText: "Commander mon serveur Personnalisé",
      benefitList: [
      "? Go DDR4",
      "? vCore 3.5GHz",
      "? Go SSD NVMe",
      "? Backup",
      "? Port dédié",
      "? Base de données",
      "Domaine votreDomaine.whst.fr offert"
    ],
  },
];

export const PricingSection = () => {
  return (
    <section className="container py-24 sm:py-32">
      <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
        Pricing
      </h2>

      <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
        Get unlimitted access
      </h2>

      <h3 className="md:w-1/2 mx-auto text-xl text-center text-muted-foreground pb-14">
        Lorem ipsum dolor sit amet consectetur adipisicing reiciendis.
      </h3>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-4">
        {plans.map(
          ({ title, popular, price, description, buttonText, benefitList }) => (
            <Card
              key={title}
              className={
                popular === PopularPlan?.YES
                  ? "drop-shadow-xl shadow-black/10 dark:shadow-white/10 border-[1.5px] border-primary lg:scale-[1.1]"
                  : ""
              }
            >
              <CardHeader>
                <CardTitle className="pb-2">{title}</CardTitle>

                <CardDescription className="pb-4">
                  {description}
                </CardDescription>

                <div>
                  <span className="text-3xl font-bold">€{price}</span>
                  <span className="text-muted-foreground"> / mois</span>
                </div>
              </CardHeader>

              <CardContent className="flex">
                <div className="space-y-4">
                  {benefitList.map((benefit) => (
                    <span key={benefit} className="flex">
                      <Check className="text-primary mr-2" />
                      <h3>{benefit}</h3>
                    </span>
                  ))}
                </div>
              </CardContent>

              <CardFooter>
                <Button
                  variant={
                    popular === PopularPlan?.YES ? "default" : "secondary"
                  }
                  className="w-full"
                >
                  {buttonText}
                </Button>
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
