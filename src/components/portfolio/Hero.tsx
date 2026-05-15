import heroBg from "@/assets/hero-bg.jpg";
import { Github, Linkedin, Download, ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-32 pb-24">
      <img
        src={heroBg}
        alt=""
        aria-hidden
        width={1920}
        height={1280}
        className="absolute inset-0 -z-10 h-full w-full object-cover opacity-50"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background/40 via-background/60 to-background" />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-medium text-primary animate-fade-in">
          <span className="size-1.5 rounded-full bg-primary animate-glow" />
          Available for internships & collaborations
        </span>

        <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl animate-fade-up">
          <span className="block text-foreground">Sri Rajitha</span>
          <span className="block text-gradient">Gummaluri</span>
        </h1>

        <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground animate-fade-up [animation-delay:120ms]">
          Full Stack Developer <span className="text-primary">·</span> AI/ML Enthusiast
        </p>
        <p className="mx-auto mt-3 max-w-2xl text-base text-muted-foreground/80 animate-fade-up [animation-delay:200ms]">
          Computer Science student passionate about Full Stack Development and AI/ML.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-3 animate-fade-up [animation-delay:300ms]">
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[0_0_24px_oklch(0.78_0.16_220_/_0.45)] transition-all hover:scale-[1.03]"
          >
            View Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/resume.pdf"
            download
            className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-foreground transition-all hover:glow-ring"
          >
            <Download className="size-4" />
            Download Resume
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="glass inline-flex items-center justify-center rounded-full p-3 text-foreground transition-all hover:text-primary hover:glow-ring"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="glass inline-flex items-center justify-center rounded-full p-3 text-foreground transition-all hover:text-primary hover:glow-ring"
          >
            <Linkedin className="size-5" />
          </a>
        </div>
      </div>
    </section>
  );
}
