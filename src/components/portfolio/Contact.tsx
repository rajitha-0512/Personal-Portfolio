import { Mail, Github, Linkedin } from "lucide-react";

const links = [
  {
    icon: Mail,
    label: "Email",
    value: "rajithagummaluri@gmail.com",
    href: "mailto:rajithagummaluri@gmail.com",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Gummaluri Sri Rajitha",
    href: "https://www.linkedin.com/in/rajithagummaluri051207/",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "rajitha-0512",
    href: "https://github.com/rajitha-0512",
  },
];

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
        <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
          Let's <span className="text-gradient">connect</span>
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-sm text-muted-foreground">
          Reach out via email or find me on LinkedIn and GitHub.
        </p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        {links.map(({ icon: Icon, label, value, href }) => (
          <a
            key={label}
            href={href}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="glass group flex flex-col items-center gap-3 rounded-2xl p-6 text-center transition-all hover:glow-ring hover:-translate-y-1"
          >
            <span className="flex size-12 items-center justify-center rounded-full bg-primary/10 text-primary transition group-hover:bg-primary/20">
              <Icon className="size-5" />
            </span>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
              <div className="mt-1 break-all text-sm font-medium text-foreground">{value}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
