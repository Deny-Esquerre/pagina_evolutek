import React from "react";

import Link from "next/link";

import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import { FaTiktok } from "react-icons/fa6";

import { ContactForm } from "@/components/blocks/contact-form";
import { DashedLine } from "@/components/dashed-line";

const CONTACT_EMAIL = "Administracion@evolutek.pe";

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

const contactInfo = [
  {
    title: "Oficina principal",
    content: (
      <p className="text-muted-foreground mt-3">
        Urbanización Enapu A-14
        <br />
        Talara, Piura, Perú
      </p>
    ),
  },
  {
    title: "Escríbenos",
    content: (
      <div className="mt-3">
        <Link
          href={`mailto:${CONTACT_EMAIL}`}
          className="text-muted-foreground hover:text-foreground"
        >
          {CONTACT_EMAIL}
        </Link>
      </div>
    ),
  },
  {
    title: "Síguenos",
    content: (
      <div className="mt-3 flex gap-5 lg:gap-6">
        {socialLinks.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            aria-label={item.name}
            className="text-muted-foreground hover:text-foreground"
          >
            <item.icon className="size-5" />
          </Link>
        ))}
      </div>
    ),
  },
];

export default function Contact() {
  return (
    <section className="py-28 lg:py-32 lg:pt-44">
      <div className="container max-w-2xl">
        <h1 className="text-center text-2xl font-semibold tracking-tight md:text-4xl lg:text-5xl">
          Contáctanos
        </h1>
        <p className="text-muted-foreground mt-4 text-center leading-snug font-medium lg:mx-auto">
          Cuéntanos sobre tu proyecto y te responderemos a la brevedad.
        </p>

        <div className="mt-10 flex justify-between gap-8 max-sm:flex-col md:mt-14 lg:mt-20 lg:gap-12">
          {contactInfo.map((info, index) => (
            <div key={index}>
              <h2 className="font-medium">{info.title}</h2>
              {info.content}
            </div>
          ))}
        </div>

        <DashedLine className="my-12" />

        {/* Inquiry Form */}
        <div className="mx-auto">
          <h2 className="mb-4 text-lg font-semibold">Escríbenos</h2>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
