import { ArrowRight, Cpu, Database, Network, Wifi } from "lucide-react";

import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { ScaledUnsDiagram } from "@/components/blocks/uns-architecture-diagram";

const features = [
  {
    title: "Automatización industrial",
    description: "PLC, SCADA, HMI e instrumentación integrados.",
    icon: Cpu,
  },
  {
    title: "IoT e Industria 4.0",
    description: "Conectividad y datos en tiempo real para tu operación.",
    icon: Wifi,
  },
  {
    title: "Integración IT/OT",
    description: "Conectamos la operación con los sistemas de información.",
    icon: Network,
  },
  {
    title: "Datos industriales",
    description: "Historización y analítica para decisiones confiables.",
    icon: Database,
  },
];

export const Hero = () => {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container flex flex-col justify-between gap-8 md:gap-14 lg:flex-row lg:gap-20">
        {/* Left side - Main content */}
        <div className="flex-1">
          <h1 className="text-foreground max-w-160 text-3xl tracking-tight md:text-4xl lg:text-5xl">
            Transformamos datos industriales en decisiones inteligentes
          </h1>

          <p className="text-muted-foreground mt-5 text-base md:text-lg">
            Integramos automatización, IoT e Industria 4.0 para conectar
            operaciones, optimizar procesos y acelerar la transformación
            digital.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 lg:flex-nowrap">
            <Button asChild>
              <a href="/brochure-evolutek.pdf" download>
                Ver brochure
              </a>
            </Button>
            <Button
              variant="outline"
              className="from-background h-auto gap-2 bg-linear-to-r to-transparent shadow-md"
              asChild
            >
              <a
                href="/contacto"
                className="max-w-56 truncate text-start md:max-w-none"
              >
                Contáctanos
                <ArrowRight className="stroke-3" />
              </a>
            </Button>
          </div>
        </div>

        {/* Right side - Features */}
        <div className="relative flex flex-1 flex-col justify-center space-y-5 max-lg:pt-10 lg:pl-10">
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title} className="flex gap-2.5 lg:gap-5">
                <Icon className="text-foreground mt-1 size-4 shrink-0 lg:size-5" />
                <div>
                  <h2 className="font-text text-foreground font-semibold">
                    {feature.title}
                  </h2>
                  <p className="text-muted-foreground max-w-76 text-sm">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="mt-12 md:mt-20 lg:container lg:mt-24">
        <ScaledUnsDiagram />
      </div>
    </section>
  );
};
