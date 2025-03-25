import { Separator } from "@/components/ui/separator";
import { ChevronsDownIcon } from "lucide-react";
import Link from "next/link";

export const FooterSection = () => {
  return (
    <footer id="footer" className="container py-24 sm:py-32">
      <div className="p-10 bg-card border border-secondary rounded-2xl">
        <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
          <div className="col-span-full xl:col-span-2">
            <Link href="/" className="flex font-bold items-center">
              <img src="https://www.wehosting.fr/assets/branding/logo.png" className="w-9 h-9 mr-2 rounded-lg"  />

              <h3 className="text-2xl">Wehosting.fr</h3>
            </Link>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Contact</h3>
            <div>
              <Link href="https://discord.gg/Se3HN4pJW8 " className="opacity-60 hover:opacity-100">
                Discord
              </Link>
            </div>

            <div>
              <Link href="mailto:pro@wehosting.fr" className="opacity-60 hover:opacity-100">
                Email Contact
              </Link>
            </div>

            <div>
              <Link href="mailto:support@wehosting.fr" className="opacity-60 hover:opacity-100">
                Email Support
              </Link>
            </div>

            <div>
              <Link href="https://www.instagram.com/wehosting.fr/" className="opacity-60 hover:opacity-100">
                Instagram
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Outils</h3>
            <div>
              <Link href="/outils/wegen" className="opacity-60 hover:opacity-100">
                WeGen
              </Link>
            </div>

            <div>
              <Link href="/outils/giveaways-bot" className="opacity-60 hover:opacity-100">
                GiveawaysBot
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Help</h3>
            <div>
              <Link href="https://docs.wehosting.fr/" className="opacity-60 hover:opacity-100">
                Documentations
              </Link>
            </div>

            <div>
              <Link href="#faq" className="opacity-60 hover:opacity-100">
                FAQ
              </Link>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="font-bold text-lg">Pages</h3>
            <div>
              <Link href="https://pteroq.wehosting.fr/" className="opacity-60 hover:opacity-100">
                Panel
              </Link>
            </div>

            <div>
              <Link href="https://client.wehosting.fr" className="opacity-60 hover:opacity-100">
                Dashboard
              </Link>
            </div>

            <div>
              <Link href="https://github.com/Wehosting-fr" className="opacity-60 hover:opacity-100">
                Github
              </Link>
            </div>
          </div>
        </div>

        <Separator className="my-6" />
        <section className="">
          <h3 className="">
            &copy; 2025 Designed and developed by
            <Link
              target="_blank"
              href="https://github.com/qrlmza"
              className="text-primary transition-all border-primary hover:border-b-2 ml-1"
            >
              Selunik
            </Link>
          </h3>
        </section>
      </div>
    </footer>
  );
};
