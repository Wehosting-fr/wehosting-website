import GithubIcon from "@/components/icons/github-icon";
import LinkedInIcon from "@/components/icons/linkedin-icon";
import EmailIcon from "@/components/icons/email-icon";
import LinkIcon from "@/components/icons/link-icon";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
interface TeamProps {
  imageUrl: string;
  firstName: string;
  lastName: string;
  positions: string[];
  socialNetworks: SocialNetworkProps[];
}
interface SocialNetworkProps {
  name: string;
  url: string;
}
export const TeamSection = () => {
  const teamList: TeamProps[] = [
    {
      imageUrl: "https://www.wehosting.fr/assets/team/selunik.jpg",
      firstName: "Selunik",
      lastName: "",
      positions: ["CEO", "Fondateur"],
      socialNetworks: [
        {
          name: "Github",
          url: "https://github.com/qrlmza",
        },
        {
          name: "Email",
          url: "mailto:qrlmza@icloud.com",
        },
      ],
    },
    {
      imageUrl:
        "https://www.wehosting.fr/assets/team/gihzo.jpg",
      firstName: "Gihzo",
      lastName: "",
      positions: ["Administrateur", "Support Technique"],
      socialNetworks: [
        {
          name: "Email",
          url: "mailto:gihzo.me@wehosting.fr",
        },
      ],
    },
    {
      imageUrl:
        "https://www.wehosting.fr/assets/team/le_trolleur.jpg",
      firstName: "Le_trolleur70",
      lastName: "",
      positions: ["Responsable Communautaire"],
      socialNetworks: [
        
      ],
    },
    {
      imageUrl:
        "https://cdn.discordapp.com/avatars/800062039518871562/a48ff25a94a91e585260b6a0ea98dee8.png",
      firstName: "TomoT",
      lastName: "",
      positions: ["Développeur Web"],
      socialNetworks: [
        {
          name: "Link",
          url: "https://tomot.fr",
        },
        {
          name: "Github",
          url: "https://github.com/tomotdev",
        }
      ],
    },
  ];
  const socialIcon = (socialName: string) => {
    switch (socialName) {
      case "LinkedIn":
        return <LinkedInIcon />;
      case "Github":
        return <GithubIcon />;
      case "Email":
        return <EmailIcon />;
      case "Link":
        return <LinkIcon />;
    }
  };

  return (
    <section id="team" className="container lg:w-[75%] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          Team
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Voici notre Dream Team
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {teamList.map(
          (
            { imageUrl, firstName, lastName, positions, socialNetworks },
            index
          ) => (
            <Card
              key={index}
              className="bg-muted/60 dark:bg-card flex flex-col h-full overflow-hidden group/hoverimg"
            >
              <CardHeader className="p-0 gap-0">
                <div className="h-full overflow-hidden">
                  <Image
                    src={imageUrl}
                    alt=""
                    width={300}
                    height={300}
                    className="w-full aspect-square object-cover saturate-0 transition-all duration-200 ease-linear size-full group-hover/hoverimg:saturate-100 group-hover/hoverimg:scale-[1.01]"
                  />
                </div>
                <CardTitle className="py-6 pb-4 px-6">
                  {firstName}<br/>
                  <span className="text-primary ml-0">{lastName}</span>
                </CardTitle>
              </CardHeader>
              {positions.map((position, index) => (
                <CardContent
                  key={index}
                  className={`pb-0 text-muted-foreground ${
                    index === positions.length - 1 && "pb-6"
                  }`}
                >
                  {position}
                  {index < positions.length - 1 && <span>,</span>}
                </CardContent>
              ))}

              <CardFooter className="space-x-4 mt-auto">
                {socialNetworks.map(({ name, url }, index) => (
                  <Link
                    key={index}
                    href={url}
                    target="_blank"
                    className="hover:opacity-80 transition-all"
                  >
                    {socialIcon(name)}
                  </Link>
                ))}
              </CardFooter>
            </Card>
          )
        )}
      </div>
    </section>
  );
};
