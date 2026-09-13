import Image from "next/image";
import Link from "next/link";

import Marquee from "react-fast-marquee";

import { cn } from "@/lib/utils";

type Company = {
  name: string;
  logo: string;
  width: number;
  height: number;
  href?: string;
  surface?: "dark";
};

export const Logos = () => {
  const topRowCompanies: Company[] = [
    {
      name: "N3uron",
      logo: "/logos/Logotype-orange-n3uron.svg",
      width: 120,
      height: 36,
      href: "https://n3uron.com",
    },
    {
      name: "Canary",
      logo: "/logos/CanaryLabs_Logo.svg",
      width: 132,
      height: 42,
      href: "https://canarylabs.com",
    },
    {
      name: "Kepware",
      logo: "/logos/Wepware_Logo.png",
      width: 150,
      height: 37,
      href: "https://www.kepware.com",
    },
    {
      name: "Tatsoft",
      logo: "/logos/Tatsoft Logo.png",
      width: 150,
      height: 30,
    },
  ];

  const bottomRowCompanies: Company[] = [
    {
      name: "HighByte",
      logo: "/logos/Highbite_Logo.webp",
      width: 100,
      height: 26,
      href: "https://highbyte.com",
    },
    {
      name: "Flow Software",
      logo: "/logos/flowsoftware_Logo.png",
      width: 120,
      height: 44,
      surface: "dark",
    },
    {
      name: "Ignition",
      logo: "/logos/IgnitionLogo.png",
      width: 140,
      height: 60,
      href: "https://inductiveautomation.com",
    },
  ];

  return (
    <section className="pb-28 lg:pb-32 overflow-hidden">
      <div className="container space-y-10 lg:space-y-16">
        <div className="text-center">
          <h2 className="mb-4 text-xl text-balance md:text-2xl lg:text-3xl">
            Automatización, IoT y datos industriales en un mismo ecosistema.
            <br className="max-md:hidden" />
            <span className="text-muted-foreground">
              Tecnología especializada para conectar la operación industrial
              con la inteligencia digital.
            </span>
          </h2>
        </div>

        <div className="flex w-full flex-col items-center gap-8">
          {/* Top row - 4 logos */}
          <LogoRow companies={topRowCompanies} gridClassName="grid-cols-4" />

          {/* Bottom row - 3 logos */}
          <LogoRow
            companies={bottomRowCompanies}
            gridClassName="grid-cols-3"
            direction="right"
          />
        </div>
      </div>
    </section>
  );
};

type LogoRowProps = {
  companies: Company[];
  gridClassName: string;
  direction?: "left" | "right";
};

const LogoRow = ({ companies, gridClassName, direction }: LogoRowProps) => {
  return (
    <>
      {/* Desktop static version */}
      <div className="hidden md:block">
        <div
          className={cn(
            "grid items-center justify-items-center gap-x-20 lg:gap-x-28",
            gridClassName,
          )}
        >
          {companies.map((company, index) => {
            const img = (
              <Image
                src={company.logo}
                alt={`${company.name} logo`}
                width={company.width}
                height={company.height}
                className={cn(
                  "object-contain opacity-70 grayscale transition-[filter,opacity] duration-300 hover:opacity-100 hover:grayscale-0",
                  company.surface === "dark" &&
                    "rounded-md bg-neutral-800 p-3 opacity-80 grayscale",
                )}
              />
            );
            return company.href ? (
              <Link href={company.href} target="_blank" key={index}>
                {img}
              </Link>
            ) : (
              <span key={index}>{img}</span>
            );
          })}
        </div>
      </div>

      {/* Mobile marquee version */}
      <div className="md:hidden">
        <Marquee direction={direction} pauseOnHover>
          {companies.map((company, index) => (
            <span key={index} className="mx-8 inline-block">
              {company.href ? (
                <Link
                  href={company.href}
                  target="_blank"
                  className="transition-opacity hover:opacity-100"
                >
                  <Image
                    src={company.logo}
                    alt={`${company.name} logo`}
                    width={company.width}
                    height={company.height}
                    className={cn(
                      "object-contain opacity-70 grayscale transition-[filter,opacity] duration-300 hover:grayscale-0",
                      company.surface === "dark" &&
                        "rounded-md bg-neutral-800 p-3 opacity-80 grayscale",
                    )}
                  />
                </Link>
              ) : (
                <Image
                  src={company.logo}
                  alt={`${company.name} logo`}
                  width={company.width}
                  height={company.height}
                  className={cn(
                    "object-contain opacity-70 grayscale transition-[filter,opacity] duration-300 hover:grayscale-0",
                    company.surface === "dark" &&
                      "rounded-md bg-neutral-800 p-3 opacity-80 grayscale",
                  )}
                />
              )}
            </span>
          ))}
        </Marquee>
      </div>
    </>
  );
};
