import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const values = [
  "Innovación",
  "Confiabilidad",
  "Excelencia técnica",
  "Compromiso",
  "Eficiencia",
  "Seguridad",
  "Integridad",
  "Orientación al cliente",
  "Aprendizaje continuo",
  "Sostenibilidad",
];

const About = () => {
  return (
    <section className="container mt-10 flex max-w-5xl flex-col-reverse gap-8 md:mt-14 md:gap-14 lg:mt-20 lg:flex-row lg:items-end">
      {/* Images Left - Text Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <ImageSection
          images={[
            { src: "/about/1.webp", alt: "Operación industrial conectada" },
            { src: "/about/2.webp", alt: "Centro de control y supervisión" },
          ]}
          className="xl:-translate-x-10"
        />

        <TextSection
          title="Misión"
          paragraphs={[
            "Impulsar la transformación digital industrial mediante soluciones de automatización, IoT, datos e Industria 4.0 que mejoren la eficiencia, confiabilidad y capacidad de decisión de nuestros clientes.",
          ]}
        />

        <TextSection
          title="Valores"
          paragraphs={[
            values.join(" · "),
            "Estos valores guían nuestro trabajo técnico y la relación con cada cliente. Deben validarse oficialmente con EVOLUTEK antes de su publicación definitiva.",
          ]}
        />
      </div>

      {/* Text Left - Images Right */}
      <div className="flex flex-col gap-8 lg:gap-16 xl:gap-20">
        <TextSection
          title="Quiénes somos"
          paragraphs={[
            "EVOLUTEK SRL es una empresa peruana orientada a la tecnología industrial: automatización, IoT, Industria 4.0 y fiscalización de hidrocarburos.",
            "Conectamos el mundo de la operación industrial (OT) con las tecnologías de información (IT) para capturar, integrar, contextualizar, historizar, visualizar y analizar datos provenientes de procesos industriales.",
            "Proponemos una combinación de automatización industrial, IoT, SCADA, historización, analítica, mantenimiento y transformación digital industrial, con soluciones adaptadas a las necesidades de cada cliente.",
          ]}
          ctaButton={{
            href: "/contacto",
            text: "Habla con un especialista",
          }}
        />
        <TextSection
          title="Visión"
          paragraphs={[
            "Ser un referente regional en automatización industrial y transformación digital, conectando tecnología, datos y conocimiento para construir operaciones más inteligentes, eficientes y sostenibles.",
          ]}
        />
        <ImageSection
          images={[
            { src: "/about/3.webp", alt: "Integración IT/OT y datos" },
            { src: "/about/4.webp", alt: "Equipo de ingeniería industrial" },
          ]}
          className="hidden lg:flex xl:translate-x-10"
        />
      </div>
    </section>
  );
};

export default About;

interface ImageSectionProps {
  images: { src: string; alt: string }[];
  className?: string;
}

export function ImageSection({ images, className }: ImageSectionProps) {
  return (
    <div className={cn("flex flex-col gap-6", className)}>
      {images.map((image, index) => (
        <div
          key={index}
          className="relative aspect-[2/1.5] overflow-hidden rounded-2xl"
        >
          <Image
            src={image.src}
            alt={image.alt}
            fill
            className="object-cover"
          />
        </div>
      ))}
    </div>
  );
}

interface TextSectionProps {
  title?: string;
  paragraphs: string[];
  ctaButton?: {
    href: string;
    text: string;
  };
}

export function TextSection({
  title,
  paragraphs,
  ctaButton,
}: TextSectionProps) {
  return (
    <section className="flex-1 space-y-4 text-lg md:space-y-6">
      {title && <h2 className="text-foreground text-4xl">{title}</h2>}
      <div className="text-muted-foreground max-w-xl space-y-6">
        {paragraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
      {ctaButton && (
        <div className="mt-8">
          <Link href={ctaButton.href}>
            <Button size="lg">{ctaButton.text}</Button>
          </Link>
        </div>
      )}
    </section>
  );
}