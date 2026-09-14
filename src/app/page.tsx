import type { Metadata } from "next";

import { Background } from "@/components/background";
import { Features } from "@/components/blocks/features";
import { Hero } from "@/components/blocks/hero";
import { Logos } from "@/components/blocks/logos";
import { ResourceAllocation } from "@/components/blocks/resource-allocation";
import { Testimonials } from "@/components/blocks/testimonials";
import FAQ from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { faqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Automatización industrial, IoT e Industria 4.0 en Perú",
  description:
    "EVOLUTEK integra automatización industrial, IoT, SCADA, datos e Industria 4.0 para transformar tus operaciones. Peritos en integración IT/OT, historización y fiscalización de hidrocarburos en Perú, Bolivia y Brasil.",
};

export default function Home() {
  return (
    <>
      <JsonLd data={faqPageJsonLd()} />
      <Background className="from-muted via-muted to-muted">
        <Hero />
        <Logos />
        <Features />
        <ResourceAllocation />
      </Background>
      <Testimonials />
      <Background variant="bottom" className="from-background to-background">
        <FAQ />
      </Background>
    </>
  );
}