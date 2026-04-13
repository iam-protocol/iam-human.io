"use client";

// FAQ

import { useState } from "react";
import { TextShimmer } from "@/components/ui/text-shimmer";

type FaqItem = {
  question: string;
  answer: string;
};

const FAQS: FaqItem[] = [
  {
    question: "What data leaves my device?",
    answer:
      "A 134-dimensional statistical feature summary (means, variances, spectral coefficients) and a ZK proof. Raw sensor recordings — audio, motion, touch — are destroyed on-device after feature extraction. The statistical summary cannot reconstruct the original signals.",
  },
  {
    question: "How accurate is the verification?",
    answer:
      "The system uses SimHash fingerprinting with Hamming distance comparison to measure behavioral consistency across sessions. Accuracy improves with each re-verification as the protocol builds a temporal profile. Server-side validation models add a second layer of detection.",
  },
  {
    question: "Which browsers and devices work?",
    answer:
      "Any modern browser with microphone and motion sensor access. Chrome, Firefox, and Safari on both desktop and mobile. iOS Safari requires user permission for motion sensors. No app download required.",
  },
  {
    question: "How long does verification take?",
    answer:
      "The active capture is 12 seconds. Proof generation and on-chain submission add a few seconds. Total time is under 30 seconds.",
  },
  {
    question: "What is Trust Score?",
    answer:
      "A number that grows with consistent re-verification over time. It rewards regular verification across different days, not repeated verifications in a single session. Higher Trust Scores signal stronger identity confidence to integrators.",
  },
  {
    question: "How much does verification cost?",
    answer:
      "~0.005 SOL per verification, paid by the user. Integrators read on-chain verification status for free.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <TextShimmer
        as="span"
        className="font-mono text-base tracking-widest uppercase"
        duration={3}
      >
        {"// FAQ"}
      </TextShimmer>

      <h2 className="mt-4 font-mono text-2xl font-bold text-foreground md:text-3xl">
        Common questions.
      </h2>
      <p className="mt-3 max-w-2xl text-foreground/70">
        Answers to the questions we hear most from developers and users
        integrating with the IAM protocol.
      </p>

      <dl className="mt-10 divide-y divide-foreground/[0.06]">
        {FAQS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div key={faq.question}>
              <dt>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={`faq-answer-${index}`}
                  id={`faq-question-${index}`}
                  onClick={() => toggle(index)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                >
                  <span
                    className={`font-mono text-sm font-medium transition-colors duration-200 ${
                      isOpen ? "text-cyan" : "text-foreground/80"
                    }`}
                  >
                    {faq.question}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`shrink-0 font-mono text-foreground/40 transition-transform duration-200 ${
                      isOpen ? "rotate-45" : "rotate-0"
                    }`}
                  >
                    +
                  </span>
                </button>
              </dt>
              <dd
                id={`faq-answer-${index}`}
                role="region"
                aria-labelledby={`faq-question-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <p className="pb-5 text-sm leading-relaxed text-foreground/60">
                  {faq.answer}
                </p>
              </dd>
            </div>
          );
        })}
      </dl>
    </section>
  );
}
