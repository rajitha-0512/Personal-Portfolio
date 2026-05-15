import { GraduationCap, Cpu, Sparkles, Code2 } from "lucide-react";

const facts = [
  { icon: GraduationCap, title: "MVGR College of Engineering", body: "CSIT Department · 2nd Year" },
  { icon: Code2, title: "Full Stack Development", body: "Builds responsive, real-world web apps end-to-end." },
  { icon: Cpu, title: "AI / ML Enthusiast", body: "Exploring intelligent systems and applied ML." },
  { icon: Sparkles, title: "Always learning", body: "Curious, consistent, and shipping side projects." },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About</p>
        <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
          A student-builder, <span className="text-gradient">obsessed with the craft</span>
        </h2>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {facts.map((f, i) => (
          <div
            key={f.title}
            className="glass group rounded-2xl p-6 transition-all duration-300 hover:-translate-y-1 hover:glow-ring animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="flex items-start gap-4">
              <div className="rounded-xl bg-primary/15 p-3 text-primary ring-1 ring-primary/30">
                <f.icon className="size-5" />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-foreground">{f.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{f.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
