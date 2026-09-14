"use client";

import { useEffect, useState } from "react";

import {
  ArrowRight,
  Cpu,
  Database,
  Download,
  Maximize2,
  Minimize2,
  Network,
  Wifi,
  X,
} from "lucide-react";

import {
  MobileUnsDiagram,
  ScaledUnsDiagram,
} from "@/components/blocks/uns-architecture-diagram";
import { DashedLine } from "@/components/dashed-line";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const BROCHURE_URL = "/brochures/EVOLUTEK BROCHURE_2026.pdf";

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
  const [showBrochure, setShowBrochure] = useState(false);
  const [diagramExpanded, setDiagramExpanded] = useState(false);

  useEffect(() => {
    if (!showBrochure) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setShowBrochure(false);
    };
    document.addEventListener("keydown", onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [showBrochure]);

  return (
    <>
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
              <a
                href={BROCHURE_URL}
                onClick={(event) => {
                  event.preventDefault();
                  setShowBrochure(true);
                }}
              >
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

      <div className="mt-12 md:mt-20 lg:mt-24">
        <div
          className={cn(
            "relative hidden lg:block",
            diagramExpanded ? "px-6" : "container",
          )}
        >
          <Button
            type="button"
            size="icon-sm"
            variant="outline"
            className="bg-background absolute top-4 right-4 z-40 shadow-md"
            aria-label={
              diagramExpanded ? "Contraer diagrama" : "Expandir diagrama"
            }
            onClick={() => setDiagramExpanded((expanded) => !expanded)}
          >
            {diagramExpanded ? <Minimize2 /> : <Maximize2 />}
          </Button>
          <ScaledUnsDiagram />
        </div>
        <div className="container lg:hidden">
          <MobileUnsDiagram />
        </div>
      </div>
      </section>

      {showBrochure && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4 backdrop-blur-sm"
          onClick={() => setShowBrochure(false)}
        >
          <div
            className="flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border bg-background shadow-2xl"
            onClick={(event) => event.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-label="Brochure EVOLUTEK 2026"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 border-b px-4 py-3">
              <p className="font-semibold">Brochure EVOLUTEK — 2026</p>
              <div className="flex items-center gap-2">
                <Button asChild size="sm" variant="outline">
                  <a href={BROCHURE_URL} download>
                    <Download />
                    Descargar PDF
                  </a>
                </Button>
                <Button
                  size="icon-sm"
                  variant="ghost"
                  aria-label="Cerrar"
                  onClick={() => setShowBrochure(false)}
                >
                  <X />
                </Button>
              </div>
            </div>
            <iframe
              src={BROCHURE_URL}
              title="Brochure EVOLUTEK 2026"
              className="flex-1 bg-white"
            />
          </div>
        </div>
      )}
    </>
  );
};
