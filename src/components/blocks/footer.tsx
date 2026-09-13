import Image from "next/image";
import Link from "next/link";

import { ArrowUpRight } from "lucide-react";

import { Button } from "@/components/ui/button";

export function Footer() {
  const navigation = [
    { name: "Características", href: "/#features" },
    { name: "Nosotros", href: "/nosotros" },
    { name: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { name: "Contacto", href: "/contacto" },
  ];

  const social = [
    { name: "LinkedIn", href: "https://pe.linkedin.com/company/evolutek-srl" },
  ];

  const legal = [{ name: "Política de privacidad", href: "/privacidad" }];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container space-y-3 text-center">
        <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
          Hablemos de tu proyecto
        </h2>
        <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
          Integramos automatización industrial, IoT, datos e Industria 4.0
          para conectar tus operaciones con el mundo digital y facilitar
          decisiones basadas en información confiable.
        </p>
        <div>
          <Button size="lg" className="mt-4" asChild>
            <Link href="/contacto">Cuéntanos el desafío de tu operación</Link>
          </Button>
        </div>
      </div>

      <nav className="container flex flex-col items-center gap-4">
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {navigation.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="font-medium transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
          {social.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="flex items-center gap-0.5 font-medium transition-opacity hover:opacity-75"
              >
                {item.name} <ArrowUpRight className="size-4" />
              </Link>
            </li>
          ))}
        </ul>
        <ul className="flex flex-wrap items-center justify-center gap-6">
          {legal.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="text-muted-foreground text-sm transition-opacity hover:opacity-75"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <div className="mt-10 w-full md:mt-14 lg:mt-20">
        <Image
          src="/evolutek-wordmark.svg"
          alt="Evolutek"
          width={1570}
          height={230}
          className="h-auto w-full"
        />
      </div>
    </footer>
  );
}
