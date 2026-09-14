import type { Metadata } from "next";

import { Background } from "@/components/background";
import About from "@/components/blocks/about";
import { AboutHero } from "@/components/blocks/about-hero";
import { Investors } from "@/components/blocks/investors";
import { DashedLine } from "@/components/dashed-line";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Nosotros",
  description:
    "EVOLUTEK SRL es una empresa peruana de automatización industrial, IoT e Industria 4.0. Conoce nuestra misión, visión, valores y más de 25 años de experiencia en Perú, Bolivia y Brasil.",
  alternates: {
    canonical: "/nosotros",
  },
};

export default function NosotrosPage() {
  return (
    <Background>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Nosotros", path: "/nosotros" },
        ])}
      />
      <div className="py-28 lg:py-32 lg:pt-44">
        <AboutHero />

        <About />
        <div className="pt-28 lg:pt-32">
          <DashedLine className="container max-w-5xl scale-x-115" />
          <Investors />
        </div>
      </div>
    </Background>
  );
}
