const skills = [
  { name: "C", level: 80 },
  { name: "C++", level: 82 },
  { name: "Python", level: 88 },
  { name: "SQL", level: 78 },
  { name: "HTML", level: 92 },
  { name: "CSS", level: 88 },
  { name: "JavaScript", level: 85 },
  { name: "Node.js", level: 75 },
];

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Skills</p>
        <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
          Tools I <span className="text-gradient">build with</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {skills.map((s, i) => (
          <div
            key={s.name}
            className="glass group relative overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:glow-ring animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center justify-between">
              <span className="font-display text-lg font-semibold text-foreground">{s.name}</span>
              <span className="text-xs text-primary">{s.level}%</span>
            </div>
            <div className="mt-4 h-1.5 w-full overflow-hidden rounded-full bg-white/5">
              <div
                className="h-full rounded-full bg-gradient-to-r from-secondary to-primary transition-all duration-700 group-hover:brightness-125"
                style={{ width: `${s.level}%` }}
              />
            </div>
            <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/20 blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
