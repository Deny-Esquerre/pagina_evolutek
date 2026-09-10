import Link from "next/link";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

const categories = [
  {
    title: "Soluciones",
    questions: [
      {
        question: "¿Qué tipo de soluciones ofrece EVOLUTEK?",
        answer:
          "Automatización industrial, IIoT, Industria 4.0, integración IT/OT, datos industriales y fiscalización de hidrocarburos.",
      },
      {
        question: "¿En qué industrias trabaja EVOLUTEK?",
        answer:
          "Oil & Gas, Energía, Minería, Manufactura, Agroindustria e Industria pesquera.",
      },
      {
        question: "¿Qué es la integración IT/OT?",
        answer:
          "Es conectar el mundo de la operación industrial (PLC, SCADA, instrumentación) con los sistemas de información (ERP, BI, cloud) para que los datos fluyan donde generan valor.",
      },
    ],
  },
  {
    title: "Tecnología y experiencia",
    questions: [
      {
        question: "¿Con qué plataformas y tecnologías trabaja EVOLUTEK?",
        answer:
          "Trabajamos con plataformas especializadas en IIoT, historización, DataOps y SCADA como N3uron, Canary, Kepware, HighByte, Flow Software, Tatsoft FrameWorX, Ignition y CygNet, según las necesidades de cada proyecto.",
      },
      {
        question: "¿Dónde tiene presencia EVOLUTEK?",
        answer:
          "Operamos desde Talara, Piura, Perú, con experiencia profesional en proyectos en Perú, Bolivia y Brasil.",
      },
    ],
  },
  {
    title: "Contacto y proyectos",
    questions: [
      {
        question: "¿Cómo empiezo un proyecto con EVOLUTEK?",
        answer:
          "Escríbenos contándonos el desafío de tu operación y un especialista se pondrá en contacto contigo.",
      },
      {
        question: "¿Trabajan con empresas fuera de Perú?",
        answer:
          "Sí, contamos con experiencia profesional en proyectos en Perú, Bolivia y Brasil.",
      },
    ],
  },
];

export const FAQ = ({
  headerTag = "h2",
  className,
  className2,
}: {
  headerTag?: "h1" | "h2";
  className?: string;
  className2?: string;
}) => {
  return (
    <section className={cn("py-28 lg:py-32", className)}>
      <div className="container max-w-5xl">
        <div className={cn("mx-auto grid gap-16 lg:grid-cols-2", className2)}>
          <div className="space-y-4">
            {headerTag === "h1" ? (
              <h1 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                ¿Tienes preguntas?
              </h1>
            ) : (
              <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
                ¿Tienes preguntas?
              </h2>
            )}
            <p className="text-muted-foreground max-w-md leading-snug lg:mx-auto">
              Si no encuentras lo que buscas,{" "}
              <Link href="/contact" className="underline underline-offset-4">
                escríbenos
              </Link>
              .
            </p>
          </div>

          <div className="grid gap-6 text-start">
            {categories.map((category, categoryIndex) => (
              <div key={category.title} className="">
                <h3 className="text-muted-foreground border-b py-4">
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="w-full">
                  {category.questions.map((item, i) => (
                    <AccordionItem key={i} value={`${categoryIndex}-${i}`}>
                      <AccordionTrigger>{item.question}</AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
