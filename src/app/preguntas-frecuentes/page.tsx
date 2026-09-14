import type { Metadata } from "next";
import React from "react";

import { Background } from "@/components/background";
import { Testimonials } from "@/components/blocks/testimonials";
import { DashedLine } from "@/components/dashed-line";
import FAQ from "@/components/faq";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd, faqPageJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Preguntas frecuentes",
  description:
    "Resolvemos las dudas más comunes sobre automatización industrial, IoT, integración IT/OT, fiscalización de hidrocarburos y proyectos de Industria 4.0 con EVOLUTEK.",
  alternates: {
    canonical: "/preguntas-frecuentes",
  },
};

const Page = () => {
  return (
    <Background>
      <JsonLd data={faqPageJsonLd()} />
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Preguntas frecuentes", path: "/preguntas-frecuentes" },
        ])}
      />
      <div className="py-28 lg:py-32 lg:pt-44">
        <FAQ />
        <DashedLine className="mx-auto max-w-xl" />
      </div>
      <Testimonials dashedLineClassName="hidden" />
    </Background>
  );
};

export default Page;
