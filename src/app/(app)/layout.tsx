export default function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // WalletProvider will wrap children here in a future branch.
  return <>{children}</>;
}
