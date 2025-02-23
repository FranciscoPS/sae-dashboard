import { Navigation } from "@/components/ui/Navigation";

// filepath: /c:/Users/PC/Source/Repos/sae-dashboard/src/app/dashboard/layout.tsx
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navigation />
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6">{children}</div>
    </div>
  );
}
