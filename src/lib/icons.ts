import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Clock,
  Code,
  Cpu,
  Fingerprint,
  Gift,
  GitBranch,
  Network,
  Radio,
  ScanFace,
  Shield,
  Users,
  Vote,
  Waves,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  pulse: Waves,
  proof: Fingerprint,
  anchor: BadgeCheck,
  airdrop: Gift,
  vote: Vote,
  bot: Bot,
  code: Code,
  github: GitBranch,
  shield: ScanFace,
  chart: BarChart3,
  globe: Network,
  zap: Radio,
  clock: Clock,
  users: Users,
  cpu: Cpu,
  "arrow-right": ArrowRight,
};

export function getIcon(key: string): LucideIcon {
  return iconMap[key] ?? Shield;
}
