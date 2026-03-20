import { ShimmerButton } from "@/components/ui/shimmer-button";

export function FooterCTASection() {
  return (
    <section className="mx-auto max-w-3xl px-6 py-24 text-center">
      <hr className="mx-auto mb-16 w-24 border-t border-cyan/[0.06]" />
      <p className="font-mono text-xl tracking-[0.02em] text-foreground md:text-2xl">
        The future of identity is temporal, not static.
      </p>
      <div className="mt-10">
        <a href="https://discord.gg/iam-protocol" target="_blank" rel="noopener noreferrer">
          <ShimmerButton
            shimmerColor="#00F0FF"
            background="rgba(0, 240, 255, 0.05)"
            className="text-sm font-medium"
          >
            Join Discord
          </ShimmerButton>
        </a>
      </div>
    </section>
  );
}
