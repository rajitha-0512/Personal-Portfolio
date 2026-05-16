import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <p>
          © {new Date().getFullYear()} <span className="text-foreground">Sri Rajitha Gummaluri</span>. Built with care.
        </p>
        <div className="flex items-center gap-3">
          <a href="mailto:rajithagummaluri@gmail.com" aria-label="Email" className="hover:text-primary"><Mail className="size-4" /></a>
          <a href="https://github.com/rajitha-0512" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-primary"><Github className="size-4" /></a>
          <a href="https://www.linkedin.com/in/gummaluri-sri-rajitha" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="size-4" /></a>
        </div>
      </div>
    </footer>
  );
}
