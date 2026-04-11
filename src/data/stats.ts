import type { Stat } from "./types";

export const solanaStats: Stat[] = [
  {
    label: "Per verification",
    value: "~0.005 SOL",
  },
  {
    label: "Finality",
    value: "<1s",
  },
  {
    label: "Monthly active users",
    value: "30M+",
    numericValue: 30,
    suffix: "M+",
  },
  {
    label: "ZK stack",
    value: "Rust",
  },
];
