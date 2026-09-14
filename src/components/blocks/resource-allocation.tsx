"use client";

import type { ReactNode } from "react";

import { useEffect, useRef, useState } from "react";

import Image from "next/image";

import { motion } from "motion/react";

import { DashedLine } from "../dashed-line";
import { ScaledAlarmsMockup } from "./alarms-mockup";
import { ScaledChatMockup } from "./chat-mockup";
import { ScaledModalActivo } from "./modal-activo-mockup";
import { ScaledTicketsMockup } from "./tickets-mockup";

import { cn } from "@/lib/utils";

interface AllocationImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
  fullSrc?: string;
  fullWidth?: number;
  fullHeight?: number;
  fullDark?: boolean;
}

interface AllocationItem {
  title: string;
  description: string;
  images: AllocationImage[];
  content?: ReactNode;
  className: string;
  fade: string[];
}

const topItems: AllocationItem[] = [
  {
    title: "Capturamos y conectamos tus datos.",
    description:
      "Sensores, PLC, RTU e instrumentación conectados a tus sistemas de supervisión y control.",
    images: [],
    content: <ScaledModalActivo />,
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 [&>.image-container]:translate-x-3 xl:[&>.image-container]:translate-x-6",
    fade: [""],
  },
  {
    title: "Un ecosistema tecnológico conectado.",
    description:
      "Automatización, IoT y plataformas de datos trabajando en conjunto.",
    images: [
      {
        src: "/logos/flowsoftware.png",
        alt: "Flow Software logo",
        width: 48,
        height: 48,
        fullSrc: "/logos/flowsoftware_Logo.png",
        fullWidth: 400,
        fullHeight: 145,
        fullDark: true,
        description:
          "Integración de datos y centralización de información para KPIs y toma de decisiones.",
      },
      {
        src: "/logos/kepware.png",
        alt: "Kepware logo",
        width: 48,
        height: 48,
        fullSrc: "/logos/Wepware_Logo.png",
        fullWidth: 1011,
        fullHeight: 247,
        description:
          "Conectividad industrial: integración de protocolos y acceso a datos de planta.",
      },
      {
        src: "/logos/highbyte.png",
        alt: "HighByte logo",
        width: 48,
        height: 48,
        fullSrc: "/logos/Highbite_Logo.webp",
        fullWidth: 185,
        fullHeight: 48,
        description:
          "Industrial DataOps para contextualización e integración de datos industriales.",
      },
      {
        src: "/logos/n3uron.png",
        alt: "N3uron logo",
        width: 48,
        height: 48,
        fullSrc: "/logos/Logotype-orange-n3uron.svg",
        fullWidth: 283.5,
        fullHeight: 85,
        description:
          "Plataforma IoT y DataOps para integración, conectividad y datos industriales.",
      },
      {
        src: "/logos/tatsoft.png",
        alt: "Tatsoft FrameWorX logo",
        width: 48,
        height: 48,
        fullSrc: "/logos/Tatsoft Logo.png",
        fullWidth: 1119,
        fullHeight: 223,
        description:
          "Plataforma IoT con Unified Namespace para arquitecturas industriales modernas.",
      },
      {
        src: "/logos/ignition.png",
        alt: "Ignition logo",
        width: 48,
        height: 48,
        fullSrc: "/logos/IgnitionLogo.png",
        fullWidth: 5833,
        fullHeight: 2500,
        description:
          "SCADA e IoT para visualización e integración de sistemas industriales.",
      },
      {
        src: "/logos/canary.png",
        alt: "Canary Labs logo",
        width: 48,
        height: 48,
        fullSrc: "/logos/CanaryLabs_Logo.svg",
        fullWidth: 212,
        fullHeight: 68,
        description:
          "Historización de datos industriales, analítica, eventos y KPIs.",
      },
      {
        src: "/logos/cygnet.png",
        alt: "CygNet SCADA logo",
        width: 48,
        height: 48,
        description:
          "SCADA para el sector Oil & Gas, vinculado a fiscalización de hidrocarburos.",
      },
    ],
    className:
      "flex-1 [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 md:[&>.title-container]:translate-x-2 xl:[&>.title-container]:translate-x-4 [&>.title-container]:translate-x-0",
    fade: [] as string[],
  },
];

const bottomItems: AllocationItem[] = [
  {
    title: "Contextualizamos la información.",
    description:
      "Los datos de planta se organizan y enriquecen con contexto operativo.",
    images: [],
    content: <ScaledAlarmsMockup />,
className:
      "!justify-start [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: ["bottom"],
  },
  {
    title: "Historizamos cada variable.",
    description:
      "Registro histórico de variables, eventos y KPIs de tus procesos.",
    images: [],
    content: <ScaledTicketsMockup />,
    className:
      "!justify-start [&>.title-container]:mb-5 md:[&>.title-container]:mb-0 [&>.image-container]:flex-1 md:[&>.image-container]:place-items-center md:[&>.image-container]:-translate-y-3",
    fade: [""],
  },
  {
    title: "Analizamos y decidimos.",
    description:
      "Analítica y visualización para convertir datos en decisiones.",
    images: [],
    content: <ScaledChatMockup />,
    className:
      "!justify-start [&>.title-container]:mb-5 md:[&>.title-container]:mb-8 xl:[&>.image-container]:translate-x-6 [&>.image-container]:translate-x-2",
    fade: [],
  },
];

export const ResourceAllocation = () => {
  return (
    <section
      id="resource-allocation"
      className="overflow-hidden pb-28 lg:pb-32"
    >
      <div className="">
        <motion.h2
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="container text-center text-3xl tracking-tight text-balance sm:text-4xl md:text-5xl lg:text-6xl"
        >
          Del dato a la inteligencia industrial
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          className="text-muted-foreground container mt-3 text-center leading-snug text-balance md:mt-4"
        >
          Un ciclo continuo que conecta sensores, sistemas y personas para
          convertir los datos de planta en decisiones industriales.
        </motion.p>

        <div className="mt-8 md:mt-12 lg:mt-20">
          <DashedLine
            orientation="horizontal"
            className="container scale-x-105"
          />

          {/* Top Features Grid - 2 items */}
          <div className="relative container flex max-md:flex-col">
            {topItems.map((item, i) => (
              <Item
                key={i}
                item={item}
                index={i}
                variant="slide"
                isLast={i === topItems.length - 1}
              />
            ))}
          </div>
          <DashedLine
            orientation="horizontal"
            className="container max-w-7xl scale-x-110"
          />

          {/* Bottom Features Grid - 3 items */}
          <div className="relative container grid max-w-7xl md:grid-cols-3">
            {bottomItems.map((item, i) => (
              <Item
                key={i}
                item={item}
                index={i}
                variant="pop"
                isLast={i === bottomItems.length - 1}
                className="pb-6 md:pb-10"
              />
            ))}
          </div>
        </div>
        <DashedLine
          orientation="horizontal"
          className="container max-w-7xl scale-x-110"
        />
      </div>
    </section>
  );
};

interface LogoTileImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  description?: string;
  fullSrc?: string;
  fullWidth?: number;
  fullHeight?: number;
  fullDark?: boolean;
}

const LogoTile = ({
  image,
  index = 0,
  fadeSide,
  align = "center",
}: {
  image: LogoTileImage;
  index?: number;
  fadeSide: "left" | "right";
  align?: "left" | "center" | "right";
}) => {
  const name = image.alt.replace(/\s+logo$/i, "");
  const [open, setOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const handlePointerDown = (event: PointerEvent) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    };
    document.addEventListener("pointerdown", handlePointerDown);
    return () =>
      document.removeEventListener("pointerdown", handlePointerDown);
  }, [open]);

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, scale: 0.7, rotate: -8 }}
      whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
      viewport={{ once: false, amount: 0.4 }}
      transition={{
        type: "spring",
        stiffness: 220,
        damping: 16,
        delay: index * 0.05,
      }}
      className="group relative"
    >
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={name}
        className="bg-background relative z-0 grid aspect-square size-16 place-items-center overflow-hidden rounded-2xl p-2 lg:size-20"
      >
        <Image
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          className="object-contain"
        />
        <div
          className={cn(
            "absolute inset-y-0 z-10 to-transparent",
            fadeSide === "right"
              ? "from-muted/80 right-0 w-16 bg-linear-to-l"
              : "from-muted left-0 w-14 bg-linear-to-r",
          )}
        />
      </button>

      {/* Popover: full-size logo + short description. Shown on hover (desktop) or tap (mobile). */}
      <div
        className={cn(
          "pointer-events-none absolute bottom-[calc(100%+0.75rem)] z-30 w-56 scale-95 opacity-0 transition-all duration-200 group-hover:scale-100 group-hover:opacity-100",
          open && "pointer-events-auto scale-100 opacity-100",
          align === "left" && "left-0",
          align === "right" && "right-0",
          align === "center" && "left-1/2 -translate-x-1/2",
        )}
      >
        <div
          className={cn(
            "rounded-xl border p-4 shadow-lg",
            image.fullDark
              ? "border-transparent bg-[#191A55]"
              : "bg-background",
          )}
        >
          <div className="mb-3 grid min-h-12 place-items-center">
            {image.fullSrc ? (
              <Image
                src={image.fullSrc}
                alt={image.alt}
                width={image.fullWidth ?? image.width}
                height={image.fullHeight ?? image.height}
                className="h-10 w-auto object-contain"
              />
            ) : (
              <Image
                src={image.src}
                alt={image.alt}
                width={image.width}
                height={image.height}
                className="size-12 object-contain"
              />
            )}
          </div>
          <p
            className={cn(
              "text-center text-sm font-semibold",
              image.fullDark && "text-white",
            )}
          >
            {name}
          </p>
          {image.description && (
            <p
              className={cn(
                "mt-1 text-center text-xs leading-snug",
                image.fullDark ? "text-white/70" : "text-muted-foreground",
              )}
            >
              {image.description}
            </p>
          )}
        </div>
        <div
          className={cn(
            "absolute top-full size-3 -translate-y-1.5 rotate-45 border-r border-b",
            align === "left" && "left-6",
            align === "right" && "right-6",
            align === "center" && "left-1/2 -translate-x-1/2",
            image.fullDark
              ? "border-transparent bg-[#191A55]"
              : "border-background bg-background",
          )}
        />
      </div>
    </motion.div>
  );
};

interface ItemProps {
  item: (typeof topItems)[number] | (typeof bottomItems)[number];
  index?: number;
  variant?: "slide" | "pop";
  isLast?: boolean;
  className?: string;
}

const Item = ({
  item,
  index = 0,
  variant = "pop",
  isLast,
  className,
}: ItemProps) => {
  const motionProps =
    variant === "slide"
      ? {
          initial: { opacity: 0, x: index % 2 === 0 ? -56 : 56 },
          whileInView: { opacity: 1, x: 0 },
          transition: {
            duration: 0.7,
            delay: index * 0.15,
            ease: [0.22, 1, 0.36, 1] as const,
          },
        }
      : {
          initial: { opacity: 0, y: 28, scale: 0.88 },
          whileInView: { opacity: 1, y: 0, scale: 1 },
          transition: {
            type: "spring" as const,
            stiffness: 140,
            damping: 15,
            delay: index * 0.12,
          },
        };

  return (
    <motion.div
      {...motionProps}
      viewport={{ once: false, amount: 0.25 }}
      className={cn(
        "relative flex flex-col justify-between px-0 py-6 md:px-6 md:py-8",
        className,
        item.className,
      )}
    >
      <div className="title-container text-balance">
        <h3 className="inline font-semibold">{item.title} </h3>
        <span className="text-muted-foreground"> {item.description}</span>
      </div>

      {item.fade.includes("bottom") && (
        <div className="from-muted/80 absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent md:hidden" />
      )}
      {item.content ? (
        <div className="image-container grid grid-cols-1 gap-4">
          {item.content}
        </div>
      ) : item.images.length > 4 ? (
        <div className="relative">
          <div className="flex flex-col gap-5">
            {/* First row - right aligned */}
            <div className="flex translate-x-4 justify-end gap-5">
              {item.images.slice(0, 4).map((image, j) => (
                <LogoTile
                  key={j}
                  image={image}
                  index={j}
                  fadeSide="right"
                  align={j === 0 ? "left" : j === 3 ? "right" : "center"}
                />
              ))}
            </div>
            {/* Second row - left aligned */}
            <div className="flex -translate-x-4 gap-5">
              {item.images.slice(4).map((image, j) => (
                <LogoTile
                  key={j}
                  image={image}
                  index={j + 4}
                  fadeSide="left"
                  align={j === 0 ? "left" : j === 3 ? "right" : "center"}
                />
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="image-container grid grid-cols-1 gap-4">
          {item.images.map((image, j) => (
            <Image
              key={j}
              src={image.src}
              alt={image.alt}
              width={image.width}
              height={image.height}
              className="h-auto w-full max-w-none object-contain object-left-top md:w-[115%]"
            />
          ))}
        </div>
      )}

      {!isLast && (
        <>
          <DashedLine
            orientation="vertical"
            className="absolute top-0 right-0 max-md:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute inset-x-0 bottom-0 md:hidden"
          />
        </>
      )}
    </motion.div>
  );
};
