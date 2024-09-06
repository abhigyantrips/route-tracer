import { useEffect, useState } from "react";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ThemeProvider } from "@/components/theme-provider";

import "@/styles/globals.css";

import { Button } from "@/components/ui/button";

export default function SidePanel() {
  const [host, setHost] = useState<string>("");
  const [result, setResult] = useState<string[]>([]);
  const [error, setError] = useState<string>("");

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0]) {
        const url = new URL(tabs[0].url);
        setHost(url.host);
      }
    });
  });

  const handleTraceroute = () => {
    chrome.runtime.sendMessage(
      { action: "performTraceroute", host },
      (response) => {
        if (response.error) {
          setError(response.error);
          setResult([]);
        } else {
          setResult(response.result);
          setError("");
        }
      }
    );
  };

  return (
    <div className="relative flex flex-col bg-background font-sans antialiased">
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        <Header />
        <div className="container flex flex-1">
          <div className="mx-auto flex min-h-[calc(100vh_-_theme(spacing.28))] w-full max-w-screen-md flex-col gap-2 p-6">
            <Button onClick={handleTraceroute}>Start Traceroute</Button>
            {error && <div>Error: {error}</div>}
            <ul>
              {result.map((hop, index) => (
                <li key={index}>{hop}</li>
              ))}
            </ul>
          </div>
        </div>
        <Footer />
      </ThemeProvider>
    </div>
  );
}
