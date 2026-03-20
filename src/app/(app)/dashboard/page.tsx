import { PageWrapper } from "@/components/layout/page-wrapper";

export default function Dashboard() {
  return (
    <PageWrapper>
      <h1 className="font-mono text-4xl font-bold">Dashboard</h1>
      <p className="mt-4 text-muted">Your IAM Anchor — Trust Score, verification history, protocol stats.</p>
    </PageWrapper>
  );
}
