"use client";

import { ShimmerButton } from "@/components/ui/shimmer-button";

interface CaptureInstructionsProps {
  onBegin: () => void;
}

export function CaptureInstructions({ onBegin }: CaptureInstructionsProps) {
  return (
    <section aria-labelledby="capture-instructions-heading" className="py-16 px-4">
      <div className="max-w-xl mx-auto text-center space-y-6">
        {/* Heading */}
        <div className="space-y-2">
          <h2
            id="capture-instructions-heading"
            className="font-mono text-lg font-medium text-foreground"
          >
            Before we begin
          </h2>
          <p className="text-sm text-foreground/70">
            The next step captures behavioral signals for 12 seconds. Your
            data stays on-device — only a ZK proof is submitted.
          </p>
        </div>

        {/* Step list */}
        <ol className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <li className="flex flex-col items-center gap-2 text-center">
            <span className="font-mono text-xl font-bold text-cyan">1</span>
            <span className="text-sm text-foreground/70">
              Speak the displayed phrase aloud
            </span>
          </li>
          <li className="flex flex-col items-center gap-2 text-center">
            <span className="font-mono text-xl font-bold text-cyan">2</span>
            <span className="text-sm text-foreground/70">
              Trace the curve shown on screen
            </span>
          </li>
          <li className="flex flex-col items-center gap-2 text-center">
            <span className="font-mono text-xl font-bold text-cyan">3</span>
            <span className="text-sm text-foreground/70">
              Hold your device and move naturally
            </span>
          </li>
        </ol>

        {/* Privacy note */}
        <p className="text-xs text-foreground/70">
          Allow microphone and motion access when prompted. Raw sensor data
          stays on your device — only the proof is sent.
        </p>

        {/* CTA */}
        <div className="flex justify-center">
          <ShimmerButton onClick={onBegin} className="text-sm font-medium">
            Begin capture
          </ShimmerButton>
        </div>
      </div>
    </section>
  );
}
