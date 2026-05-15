import { Trophy, Award, Atom, Briefcase } from "lucide-react";

const items = [
  { icon: Trophy, title: "3× Hackathon Participant", body: "Built and pitched solutions under pressure." },
  { icon: Award, title: "Cisco Certifications", body: "Python and C — fundamentals and applied programming." },
  { icon: Atom, title: "Quantum Fundamentals", body: "Certified by Wiser — quantum computing basics." },
  { icon: Briefcase, title: "AICTE-affiliated AI Internship", body: "Hands-on AI project experience." },
];

export function Achievements() {
  return (
    <section id="achievements" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Achievements</p>
        <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
          Milestones along <span className="text-gradient">the way</span>
        </h2>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        {items.map((it, i) => (
          <div
            key={it.title}
            className="glass group flex items-start gap-4 rounded-2xl p-6 transition-all hover:-translate-y-1 hover:glow-ring animate-fade-up"
            style={{ animationDelay: `${i * 80}ms` }}
          >
            <div className="rounded-xl bg-secondary/15 p-3 text-primary ring-1 ring-primary/30 transition-transform group-hover:scale-110">
              <it.icon className="size-5" />
            </div>
            <div>
              <h3 className="font-display text-lg font-semibold text-foreground">{it.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{it.body}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
