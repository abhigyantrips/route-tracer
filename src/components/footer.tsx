export function Footer() {
  return (
    <footer className="flex h-12 w-full border-t px-6 py-0">
      <div className="container flex w-full flex-1 items-center justify-between">
        <div className="py-3 text-center text-sm text-muted-foreground">
          <span>A mini project. </span>
          <span>
            Source code on{" "}
            <a
              rel="noopener noreferrer"
              target="_blank"
              className="underline transition-colors duration-150 hover:text-foreground"
              href="https://github.com/abhigyantrips/route-tracer">
              GitHub
            </a>
            .
          </span>
        </div>
      </div>
    </footer>
  );
}
