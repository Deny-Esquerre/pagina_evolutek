"use client";

import { useState } from "react";

import { Cpu, Factory, Package, Users } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { categorizedFaqs, type Faq } from "@/lib/faqs";
import { cn } from "@/lib/utils";

const categoryIcons = {
  Soluciones: Package,
  Industrias: Factory,
  "Tecnología y experiencia": Cpu,
  "Contacto y proyectos": Users,
} as const;

const categorizedFaqsWithIcons = categorizedFaqs.map((category) => ({
  ...category,
  icon: categoryIcons[category.category as keyof typeof categoryIcons],
}));

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(
    categorizedFaqsWithIcons[0].category
  );
  const activeFaqs = categorizedFaqsWithIcons.find(
    ({ category }) => category === activeCategory
  )?.faqs;

  return (
    <div className="mx-auto max-w-7xl px-6 py-12 sm:py-20">
      <h2 className="text-balance text-center font-medium text-4xl tracking-[-0.04em] sm:text-[2.75rem]">
        Preguntas frecuentes
      </h2>
      <p className="mt-3 text-balance text-center text-lg text-muted-foreground md:text-2xl md:tracking-[-0.015em]">
        Resolvemos las dudas más comunes sobre nuestros servicios y soluciones
      </p>

      <div className="mx-auto mt-12 max-w-4xl sm:mt-16">
        {/* Mobile FAQs */}
        <div className="flex flex-col divide-y sm:hidden">
          {categorizedFaqsWithIcons.map(({ category, icon: Icon, faqs }) => (
            <div className="pt-8 pb-10" key={category}>
              <div className="mb-2 flex items-center gap-3 pb-3 pl-2">
                <Icon className="size-6" />
                <span className="font-medium text-lg">{category}</span>
              </div>
              <FAQList faqs={faqs} />
            </div>
          ))}
        </div>

        {/* Desktop FAQs */}
        <div className="hidden gap-8 sm:flex">
          <div className="flex flex-col gap-4">
            {categorizedFaqsWithIcons.map(({ category, icon: Icon }) => (
              <Button
                className={cn("h-11 justify-start gap-1 font-semibold", {
                  "text-foreground/70 hover:text-foreground":
                    activeCategory !== category,
                })}
                key={category}
                onClick={() => setActiveCategory(category)}
                variant={activeCategory === category ? "default" : "ghost"}
              >
                <Icon className="mr-2.5 size-5" />
                {category}
              </Button>
            ))}
          </div>

          <div className="flex grow flex-col gap-4">
            <FAQList faqs={activeFaqs ?? []} />
          </div>
        </div>
      </div>
    </div>
  );
};

function FAQList({ faqs }: { faqs: Faq[] }) {
  return (
    <Accordion className="space-y-4" collapsible type="single">
      {faqs?.map((faq, index) => (
        <AccordionItem
          className="rounded-xl bg-muted px-5"
          key={index}
          value={faq.question}
        >
          <AccordionTrigger className="font-medium text-lg">
            <div className="flex items-center gap-2">{faq.question}</div>
          </AccordionTrigger>
          <AccordionContent className="text-base">
            {faq.answer}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}

export default FAQ;