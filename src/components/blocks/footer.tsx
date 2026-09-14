import Image from "next/image";
import Link from "next/link";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";

import { ContactMap } from "@/components/blocks/contact-map";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export function Footer() {
  const footerLinks = [
    { name: "Nosotros", href: "/nosotros" },
    { name: "Preguntas frecuentes", href: "/preguntas-frecuentes" },
    { name: "Contacto", href: "/contacto" },
    { name: "Política de privacidad", href: "/privacidad" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://pe.linkedin.com/company/evolutek-srl",
      icon: Linkedin,
    },
    { name: "Facebook", href: "#", icon: Facebook },
    { name: "YouTube", href: "#", icon: Youtube },
    { name: "TikTok", href: "#", icon: FaTiktok },
    { name: "Instagram", href: "#", icon: Instagram },
  ];

  return (
    <footer className="flex flex-col items-center gap-14 pt-28 lg:pt-32">
      <div className="container grid items-center gap-10 text-center lg:grid-cols-2">
        <div className="space-y-3">
          <h2 className="text-2xl tracking-tight md:text-4xl lg:text-5xl">
            Hablemos de tu proyecto
          </h2>
          <p className="text-muted-foreground mx-auto max-w-xl leading-snug text-balance">
            Integramos automatización industrial, IoT, datos e Industria 4.0
            para conectar tus operaciones con el mundo digital y facilitar
            decisiones basadas en información confiable.
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="mt-4" asChild>
              <Link href="/contacto">Cuéntanos el desafío de tu operación</Link>
            </Button>
          </div>
          <div className="flex items-center justify-center gap-4 pt-2">
            {socialLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                aria-label={item.name}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <item.icon className="size-5" />
              </Link>
            ))}
          </div>
        </div>
        <div className="h-72 w-full overflow-hidden rounded-2xl border shadow-sm sm:h-80 lg:h-96">
          <ContactMap />
        </div>
      </div>

      <div className="bg-primary text-primary-foreground w-full">
        <div className="mx-auto max-w-(--breakpoint-xl)">
          <div className="flex flex-col items-center justify-start py-12">
            <Image
              src="/footer.svg"
              alt="Evolutek"
              width={1570}
              height={293}
              className="h-8 w-auto"
            />

            <ul className="mt-6 flex flex-wrap items-center justify-center gap-4">
              {footerLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <Separator className="bg-primary-foreground/15" />

          <div className="flex flex-col-reverse items-center justify-between gap-x-2 gap-y-5 px-6 py-8 sm:flex-row xl:px-0">
            <span className="text-primary-foreground/70 text-sm">
              &copy; {new Date().getFullYear()} EVOLUTEK S.R.L. Todos los
              derechos reservados.
            </span>

            <div className="text-primary-foreground/70 flex items-center gap-5">
              {socialLinks.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  aria-label={item.name}
                  className="hover:text-primary-foreground transition-colors"
                >
                  <item.icon className="size-5" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
