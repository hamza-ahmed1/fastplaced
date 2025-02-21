// src/app/signup/layout.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up Page | Free Next.js Template for Startup and SaaS",
  description: "This is Sign Up Page for Startup Nextjs Template",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}