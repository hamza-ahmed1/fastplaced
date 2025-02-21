// src/app/complete-registration/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Complete Registration | Your Platform",
  description: "Finish setting up your profile",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}