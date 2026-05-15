const skills = ["C", "C++", "Python", "SQL", "HTML", "CSS", "JavaScript", "Node.js"];

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
        {skills.map((name, i) => (
          <div
            key={name}
            className="glass group relative overflow-hidden rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:glow-ring animate-fade-up"
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="font-display text-lg font-semibold text-foreground">{name}</span>
            <div className="pointer-events-none absolute -right-8 -top-8 size-24 rounded-full bg-primary/20 blur-2xl transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </section>
  );
}
