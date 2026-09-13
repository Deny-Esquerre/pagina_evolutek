import React from "react";

import { Background } from "@/components/background";
import { Testimonials } from "@/components/blocks/testimonials";
import { DashedLine } from "@/components/dashed-line";
import FAQ from "@/components/faq";

const Page = () => {
  return (
    <Background>
      <div className="py-28 lg:py-32 lg:pt-44">
        <FAQ />
        <DashedLine className="mx-auto max-w-xl" />
      </div>
      <Testimonials dashedLineClassName="hidden" />
    </Background>
  );
};

export default Page;
