"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Star } from "lucide-react";

interface ReviewProps {
  image: string;
  name: string;
  userName: string;
  comment: string;
  rating: number;
}

const reviewList: ReviewProps[] = [
  {
    image: "https://cdn.discordapp.com/avatars/810317581353353227/c76a12853eb5aae390946cfd805b737d.png",
    name: "ltriopikeur",
    userName: "Client Minecraft",
    comment:
      "Mon serveur Minecraft est stable et tourne sans problèmes. Le support est pro et à l'écoute, je recommande.",
    rating: 5.0,
  },
  {
    image: "https://media.discordapp.net/attachments/1320113140775518258/1354056114064461895/7539-cookie-monster.gif?ex=67e3e686&is=67e29506&hm=b7960f2721c14c8689bcf63eea4ae150e97af814272f0cba0415f4a6e17d1d7d&=",
    name: "Hardyf_55",
    userName: "Client NodeJS",
    comment:
      "Interfaces claires et propres, l'équipe est agréable et toujours à l'écoute de plus mon serveur tourne parfaitement bien.",
    rating: 4.0,
  },
  {
    image: "https://cdn.discordapp.com/avatars/832724679134281769/bcdc19e5a1f2095aa9e7edb793005620.png",
    name: "ninouoggy66",
    userName: "Partenaire",
    comment:
      "",
    rating: 4.0,
  },
];

export const TestimonialSection = () => {
  return (
    <section id="testimonials" className="container py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Les Avis
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold mb-4">
          Obtenez l'avis de nos clients
        </h2>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="relative w-[80%] sm:w-[90%] lg:max-w-screen-xl mx-auto"
      >
        <CarouselContent>
          {reviewList.map((review) => (
            <CarouselItem
              key={review.name}
              className="md:basis-1/2 lg:basis-1/3"
            >
              <Card className="bg-muted/50 dark:bg-card">
                <CardContent className="pt-6 pb-0">
                  <div className="flex gap-1 pb-6">
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                    <Star className="size-4 fill-primary text-primary" />
                  </div>
                  <span className="italic">
                    {`"${review.comment}"`}
                  </span>
                </CardContent>

                <CardHeader>
                  <div className="flex flex-row items-center gap-4">
                    <Avatar>
                      <AvatarImage
                        src={review.image}
                        alt="radix"
                      />
                      <AvatarFallback>SV</AvatarFallback>
                    </Avatar>

                    <div className="flex flex-col">
                      <CardTitle className="text-lg">{review.name}</CardTitle>
                      <CardDescription>{review.userName}</CardDescription>
                    </div>
                  </div>
                </CardHeader>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
};
