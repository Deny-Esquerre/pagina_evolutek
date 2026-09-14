"use client";

import { motion } from "motion/react";

import { DashedLine } from "@/components/dashed-line";

const stats = [
  {
    value: "+25",
    label: "Años de experiencia profesional acumulada",
  },
  {
    value: "3",
    label: "Países: Perú, Bolivia y Brasil",
  },
  {
    value: "8",
    label: "Tecnologías industriales integradas",
  },
  {
    value: "3.er",
    label: "Puesto — DEMO Contest LATAM 2026",
  },
];

export function AboutHero() {
  return (
    <section className="">
      <div className="container flex max-w-5xl flex-col justify-between gap-8 md:gap-20 lg:flex-row lg:items-center lg:gap-24 xl:gap-24">
        <div className="flex-[1.5]">
          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-3xl tracking-tight sm:text-4xl md:text-5xl lg:text-6xl"
          >
            Tecnología industrial para operaciones más conectadas e inteligentes
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            className="text-muted-foreground mt-5 text-2xl md:text-3xl lg:text-4xl"
          >
            Conectamos la operación industrial con la inteligencia digital.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.4 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            className="text-muted-foreground mt-8 hidden max-w-lg space-y-6 text-lg text-balance md:block lg:mt-12"
          >
            EVOLUTEK SRL integra automatización industrial, IoT, datos e
            Industria 4.0 para conectar las operaciones industriales con el
            mundo digital, mejorar la visibilidad de los procesos y facilitar
            decisiones basadas en información confiable.
            <br />
            <br />
            Nuestra especialización une el mundo de la operación (OT) con las
            tecnologías de información (IT): capturamos, integramos,
            contextualizamos, historizamos, visualizamos y analizamos los datos
            que generan los procesos industriales.
            <br />
            <br />
            Somos un equipo con más de 25 años de experiencia profesional
            acumulada en automatización, industria y transformación digital,
            con presencia en Perú, Bolivia y Brasil.
          </motion.p>
        </div>

        <div
          className={`relative flex flex-1 flex-col justify-center gap-3 pt-10 lg:pt-0 lg:pl-10`}
        >
          <DashedLine
            orientation="vertical"
            className="absolute top-0 left-0 max-lg:hidden"
          />
          <DashedLine
            orientation="horizontal"
            className="absolute top-0 lg:hidden"
          />
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false, amount: 0.4 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="flex flex-col gap-1"
            >
              <div className="font-display text-4xl tracking-wide md:text-5xl">
                {stat.value}
              </div>
              <div className="text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}