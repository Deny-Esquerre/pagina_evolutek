"use client";

import Image from "next/image";
import Link from "next/link";

import { ChevronRight } from "lucide-react";
import { motion } from "motion/react";

import { DashedLine } from "../dashed-line";

import { Card, CardContent } from "@/components/ui/card";

const items = [
  {
    title: "Automatización industrial",
    image: "/features/01-automatizacion-industrial.svg",
  },
  {
    title: "IoT y datos industriales",
    image: "/features/02-iot-datos-industriales.svg",
  },
  {
    title: "Integración IT/OT",
    image: "/features/03-integracion-it-ot.svg",
  },
];

export const Features = () => {
  return (
    <section id="feature-modern-teams" className="pb-28 lg:pb-32">
      <div className="container">
        {/* Top dashed line */}
        <DashedLine className="text-muted-foreground" />

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto mt-10 grid max-w-4xl items-center gap-3 md:gap-0 lg:mt-24 lg:grid-cols-2"
        >
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Especialistas en industria, automatización y datos
          </h2>
          <p className="text-muted-foreground leading-snug">
            Integramos automatización industrial, IoT, datos e Industria 4.0
            para conectar las operaciones industriales con el mundo digital y
            facilitar decisiones basadas en información confiable.
          </p>
        </motion.div>

        {/* Features Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
        >
          <Card className="mt-8 rounded-3xl md:mt-12 lg:mt-20">
            <CardContent className="flex p-0 max-md:flex-col">
              {items.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, amount: 0.3 }}
                  transition={{
                    duration: 0.5,
                    delay: 0.15 + i * 0.12,
                    ease: "easeOut",
                  }}
                  className="flex flex-1 max-md:flex-col"
                >
                  <div className="flex-1 p-4 pe-0! md:p-6">
                    <div className="relative aspect-[358/330] w-full overflow-hidden rounded-2xl">
                      <Image
                        src={item.image}
                        alt={`${item.title} interface`}
                        fill
                        className="object-cover"
                      />
                      <div className="from-background absolute inset-0 z-10 bg-linear-to-t via-transparent to-transparent" />
                    </div>

                    <Link
                      href="#"
                      className={
                        "group flex items-center justify-between gap-4 pe-4 pt-4 md:pe-6 md:pt-6"
                      }
                    >
                      <h3 className="font-display max-w-60 text-2xl leading-tight font-bold tracking-tight">
                        {item.title}
                      </h3>
                      <div className="rounded-full border p-2">
                        <ChevronRight className="size-6 transition-transform group-hover:translate-x-1 lg:size-9" />
                      </div>
                    </Link>
                  </div>
                  {i < items.length - 1 && (
                    <div className="relative hidden md:block">
                      <DashedLine orientation="vertical" />
                    </div>
                  )}
                  {i < items.length - 1 && (
                    <div className="relative block md:hidden">
                      <DashedLine orientation="horizontal" />
                    </div>
                  )}
                </motion.div>
              ))}
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};
