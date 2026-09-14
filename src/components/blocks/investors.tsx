"use client";

import { motion } from "motion/react";

const countries = [
  { code: "pe", name: "Perú" },
  { code: "bo", name: "Bolivia" },
  { code: "br", name: "Brasil" },
];

const highlights = [
  {
    value: "🥉 3.er puesto",
    label: "DEMO Contest LATAM 2026",
    detail:
      "Reconocimiento obtenido en el concurso relacionado con Canary, comunicado por Vertix Technologies.",
    highlight: true,
  },
  {
    value: "⏳ Más de 25 años",
    label: "Experiencia profesional acumulada",
    detail:
      "Experiencia acumulada de nuestros profesionales en automatización, industria y transformación digital.",
  },
  {
    value: (
      <span className="inline-flex flex-wrap items-center gap-x-2 gap-y-1">
        {countries.map((country, i) => (
          <span key={country.code} className="inline-flex items-center gap-2">
            {i > 0 && <span className="text-muted-foreground">·</span>}
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={`/flags/${country.code}.svg`}
              alt=""
              className="h-4 w-auto rounded-[2px] shadow-sm"
            />
            {country.name}
          </span>
        ))}
      </span>
    ),
    label: "Presencia internacional",
    detail:
      "Experiencia y proyectos desarrollados en la región andina y latinoamericana.",
  },
];

export function Investors() {
  return (
    <section className="container max-w-5xl py-12">
      <motion.h2
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="text-foreground text-4xl font-medium tracking-wide"
      >
        Experiencia y reconocimiento
      </motion.h2>
      <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
        {highlights.map((highlight, index) => (
          <motion.div
            key={highlight.label}
            initial={{ opacity: 0, y: 28, scale: 0.92 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{
              type: "spring",
              stiffness: 140,
              damping: 15,
              delay: index * 0.12,
            }}
            className="rounded-2xl border bg-background p-6"
          >
            <h3
              className={
                highlight.highlight
                  ? "shine-highlight font-display text-2xl font-semibold"
                  : "font-display text-2xl font-semibold"
              }
            >
              {highlight.value}
            </h3>
            <p className="mt-2 font-semibold">{highlight.label}</p>
            <p className="mt-1 text-sm leading-snug text-muted-foreground">
              {highlight.detail}
            </p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .shine-highlight {
          position: relative;
          display: inline-block;
          width: fit-content;
          background: linear-gradient(
            100deg,
            #b8860b 20%,
            #ffe9a8 40%,
            #fff6da 50%,
            #ffe9a8 60%,
            #b8860b 80%
          );
          background-size: 250% 100%;
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          animation: shine-highlight-sweep 3s linear infinite;
        }
        @keyframes shine-highlight-sweep {
          0% {
            background-position: 200% 0;
          }
          100% {
            background-position: -200% 0;
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .shine-highlight {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}