"use client";

import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";

export default function SidePanel() {
  return (
    <div className="bg-background relative flex flex-col font-sans antialiased">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <div className="container flex flex-1">This is a test.</div>
      </ThemeProvider>
    </div>
  );
}
