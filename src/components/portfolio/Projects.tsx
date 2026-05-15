import { useQuery } from "@tanstack/react-query";
import { useServerFn } from "@tanstack/react-start";
import { Github, ExternalLink } from "lucide-react";
import medibookImg from "@/assets/medibook.jpg";
import { getProjects } from "@/lib/projects.functions";

export function Projects() {
  const fetchProjects = useServerFn(getProjects);
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: () => fetchProjects(),
  });

  const projects = data ?? [];

  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Projects</p>
        <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
          Things I've <span className="text-gradient">shipped</span>
        </h2>
      </div>

      {isLoading && (
        <div className="grid gap-6 md:grid-cols-2">
          {[0, 1].map((i) => (
            <div key={i} className="glass h-96 animate-pulse rounded-2xl" />
          ))}
        </div>
      )}

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className="glass group flex flex-col overflow-hidden rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:glow-ring animate-fade-up"
            style={{ animationDelay: `${i * 100}ms` }}
          >
            <div className="relative aspect-[16/10] overflow-hidden">
              <img
                src={p.image_url ?? medibookImg}
                alt={p.title}
                loading="lazy"
                width={1280}
                height={800}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
            </div>
            <div className="flex flex-1 flex-col gap-4 p-6">
              <h3 className="font-display text-2xl font-semibold text-foreground">{p.title}</h3>
              <p className="text-sm text-muted-foreground">{p.description}</p>
              <div className="flex flex-wrap gap-2">
                {p.tech_stack.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-auto flex gap-2 pt-2">
                {p.github_url && (
                  <a
                    href={p.github_url}
                    target="_blank"
                    rel="noreferrer"
                    className="glass inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-medium text-foreground transition-all hover:text-primary"
                  >
                    <Github className="size-4" /> GitHub
                  </a>
                )}
                {p.live_url && (
                  <a
                    href={p.live_url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-xs font-semibold text-primary-foreground transition-all hover:scale-[1.03]"
                  >
                    <ExternalLink className="size-4" /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
