import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AsciiTorus } from "@/components/ui/ascii-torus";
import { VerificationTimelineSection } from "@/components/sections/verification-timeline-section";
import { ProtocolComponentsSection } from "@/components/sections/protocol-components-section";
import { PrivacySection } from "@/components/sections/privacy-section";
import { SecurityModelSection } from "@/components/sections/security-model-section";
import { VerificationModesSection } from "@/components/sections/verification-modes-section";
import { ResearchValidationSection } from "@/components/sections/research-validation-section";
import { pageMetadata } from "@/lib/page-metadata";

export const metadata = pageMetadata({
  title: "Technology",
  description:
    "How Entros verification works. Twelve seconds of speaking and tracing—feature extraction, ZK proof generation, and on-chain verification run automatically. Raw recordings never leave your device.",
  path: "/technology",
});

export default function Technology() {
  return (
    <>
      {/* Hero—centered title block (distinct from home's split layout)
          with the ASCII icosahedron rendered full-width below the copy. */}
      <section>
        <div className="mx-auto max-w-5xl px-6 pt-32 pb-0 text-center md:pt-40">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-foreground/40">
            // HOW IT WORKS
          </span>

          <h1 className="mt-6 font-display text-5xl font-medium leading-[1.02] tracking-[-0.02em] text-foreground md:text-6xl lg:text-7xl">
            From challenge
            <br />
            to on-chain proof<span className="text-cyan">.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-foreground/70 md:mt-8 md:text-lg">
            Twelve seconds of speaking and tracing. Feature extraction,
            zero-knowledge proof generation, and on-chain verification
            run automatically.
          </p>

          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/verify"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-full bg-foreground px-6 py-3
                text-sm font-medium text-background
                transition-colors hover:bg-foreground/90
              "
            >
              Try the Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/paper"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-full border border-foreground/20 px-6 py-3
                text-sm font-medium text-foreground
                transition-colors hover:border-foreground/40 hover:bg-foreground/5
              "
            >
              Read the paper
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>

        <div className="flex h-[225px] items-start justify-center pb-8 sm:h-[270px] md:h-[300px] md:pb-10 lg:h-[330px] xl:h-[360px]">
          <AsciiTorus className="text-[5px] sm:text-[6px] md:text-[7px] lg:text-[8px] xl:text-[9px]" />
        </div>
      </section>

      <VerificationTimelineSection />
      <ProtocolComponentsSection />
      <PrivacySection />
      <SecurityModelSection />
      <VerificationModesSection />
      <ResearchValidationSection />

      {/* Footer CTA */}
      <section className="border-t border-border">
        <div className="mx-auto max-w-5xl px-6 py-32 text-center md:py-40">
          <h2 className="font-display text-4xl font-medium tracking-tight text-foreground md:text-6xl md:leading-[1.05]">
            Raw data on your device.
            <br />
            Proof on the chain<span className="text-cyan">.</span>
          </h2>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/verify"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-full bg-foreground px-6 py-3
                text-sm font-medium text-background
                transition-colors hover:bg-foreground/90
              "
            >
              Try the Demo
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/solutions"
              className="
                group inline-flex items-center justify-center gap-2
                rounded-full border border-foreground/20 px-6 py-3
                text-sm font-medium text-foreground
                transition-colors hover:border-foreground/40 hover:bg-foreground/5
              "
            >
              See use cases
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
