import type { Metadata } from "next";
import React from "react";

import { Background } from "@/components/background";
import Contact from "@/components/blocks/contact";
import { JsonLd } from "@/components/json-ld";
import { breadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Contacto",
  description:
    "Cuéntanos el desafío de tu operación industrial. EVOLUTEK te asesora en automatización, IoT, integración IT/OT, historización de datos y transformación digital. Talara, Piura, Perú.",
  alternates: {
    canonical: "/contacto",
  },
};

const Page = () => {
  return (
    <Background>
      <JsonLd
        data={breadcrumbJsonLd([
          { name: "Inicio", path: "/" },
          { name: "Contacto", path: "/contacto" },
        ])}
      />
      <Contact />
    </Background>
  );
};

export default Page;
