"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";
import Image from "next/image";
import Link from "next/link";

export const HeroSection = () => {
  const { theme } = useTheme();
  return (
    <section className="w-full max-w-[90%] md:max-w-[85%] lg:max-w-[80%] mx-auto mt-10">
      <div className="grid place-items-center gap-8 mx-auto py-12 md:py-24">
        <div className="text-center space-y-6 md:space-y-8 w-full px-2 md:px-0">
          <Badge variant="outline" className="text-sm py-2 max-w-full overflow-hidden">
            <span className="mr-2 text-primary">
              <Badge>Nouveau</Badge>
            </span>
            <span> Wehosting recrutre, Rejoignez notre Discord</span>
          </Badge>

          <div className="max-w-full md:max-w-screen-md mx-auto text-center text-3xl md:text-4xl lg:text-6xl font-bold px-2">
            <h1>
              Découvrez
              <span className="text-transparent px-2 bg-gradient-to-r from-[#D247BF] to-primary bg-clip-text">
                l'hébergement
              </span>
              à faibles couts
            </h1>
          </div>

          <p className="max-w-full text-justify md:max-w-screen-sm mx-auto text-lg md:text-xl text-muted-foreground px-2">
            {`Wehosting.fr est une entreprise d'hébergement de serveurs de jeux vidéo, de sites web et de services web. Nous proposons des services de qualité à des prix très compétitifs.`}
          </p>

          <div className="space-y-4 md:space-y-0 md:space-x-4">
            <Button className="w-5/6 md:w-1/4 font-bold">
              <Link href="https://discord.gg/" target="_blank">
                Nous rejoindre
              </Link>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="w-5/6 md:w-1/4 font-bold"
            >
              <Link
                href="/boutique"
              >
                Notre Boutique
              </Link>
            </Button>
          </div>
        </div>

        <div className="relative group mt-8 md:mt-14 w-full">
          <div className="absolute top-2 lg:-top-8 left-1/2 transform -translate-x-1/2 w-[90%] mx-auto h-24 lg:h-80 bg-primary/50 rounded-full blur-3xl"></div>
          <Image
            width={1200}
            height={1200}
            className="w-full max-w-[95vw] md:max-w-[90vw] lg:max-w-[1200px] mx-auto rounded-lg relative"
            src={
              theme === "light"
                ? "/hero-image-light.jpeg"
                : "/hero-image-dark.jpeg"
            }
            alt="dashboard"
          />

          <div className="absolute bottom-0 left-0 w-full h-20 md:h-28 bg-gradient-to-b from-background/0 via-background/50 to-background rounded-lg"></div>
        </div>
      </div>
    </section>
  );
};
