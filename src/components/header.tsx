import { ThemeSwitcher } from "@/components/theme-switcher";

export function Header() {
  return (
    <header className="sticky inset-0 top-0 z-50 flex h-16 w-full flex-col items-center justify-around border-b bg-background/60 backdrop-blur-[5px] backdrop-saturate-[180%]">
      <nav className="container relative flex w-full flex-1 items-center">
        <div className="flex w-full items-center">
          <h1 className="text-xl font-bold">Route Tracer</h1>
        </div>
        <ThemeSwitcher />
      </nav>
    </header>
  );
}
