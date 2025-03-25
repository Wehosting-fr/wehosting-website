import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "Les serveurs gratuits sont temporaires?",
    answer: "Non. si vous prenez un serveur gratuit, il sera à vie. Vous pouvez bénéficier de maximum 2 serveurs gratuites sur deux services différents.",
    value: "item-1",
  },
  {
    question: "Ai-je le droit de miner de la cryptomonnaie sur les serveurs?",
    answer:
      "Non. On est pas responsable de l'utilisation de nos services pour miner de la cryptomonnaie. Tout minage sera suivit d'une suspension de votre serveur sans possibilitée de récupération des données.",
    value: "item-2",
  },
  {
    question:
      "Comment puis-je commander un serveur ?",
    answer:
      "Pour le moment, vous pouvez commander un serveur en rejoignant notre discord et en demandant un serveur en ouvrant un ticket. Nous n'acceptons que les paiements par Paypal pour le moment.",
    value: "item-3",
  },
  {
    question: "Vous recrutez ?",
    answer: "Oui, nous recrutons constement sans CV obligatoire (il est quand même conseillé). Vous n'avez pas d'experience ? Pas de soucis, nous vous formerons.",
    value: "item-4",
  },
];

export const FAQSection = () => {
  return (
    <section id="faq" className="container md:w-[700px] py-24 sm:py-32">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center mb-2 tracking-wider">
          FAQS
        </h2>

        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Les questions fréquentes
        </h2>
      </div>

      <Accordion type="single" collapsible className="AccordionRoot">
        {FAQList.map(({ question, answer, value }) => (
          <AccordionItem key={value} value={value}>
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};
