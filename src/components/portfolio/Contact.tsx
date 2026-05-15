import { useState } from "react";
import { useServerFn } from "@tanstack/react-start";
import { Mail, Github, Linkedin, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { submitContact } from "@/lib/projects.functions";

export function Contact() {
  const send = useServerFn(submitContact);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      await send({ data: form });
      toast.success("Message sent! I'll get back to you soon.");
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : "Failed to send message");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-6 py-24">
      <div className="mb-12 text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Contact</p>
        <h2 className="mt-2 font-display text-4xl font-bold md:text-5xl">
          Let's build <span className="text-gradient">something together</span>
        </h2>
      </div>

      <div className="grid gap-8 md:grid-cols-5">
        <div className="md:col-span-2 space-y-3">
          <a
            href="mailto:srirajitha@example.com"
            className="glass flex items-center gap-3 rounded-2xl p-4 transition-all hover:glow-ring"
          >
            <Mail className="size-5 text-primary" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
              <div className="text-sm text-foreground">srirajitha@example.com</div>
            </div>
          </a>
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="glass flex items-center gap-3 rounded-2xl p-4 transition-all hover:glow-ring"
          >
            <Linkedin className="size-5 text-primary" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">LinkedIn</div>
              <div className="text-sm text-foreground">/in/sri-rajitha</div>
            </div>
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="glass flex items-center gap-3 rounded-2xl p-4 transition-all hover:glow-ring"
          >
            <Github className="size-5 text-primary" />
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">GitHub</div>
              <div className="text-sm text-foreground">@srirajitha</div>
            </div>
          </a>
        </div>

        <form onSubmit={onSubmit} className="glass md:col-span-3 space-y-4 rounded-2xl p-6">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Name</span>
              <input
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-1 w-full rounded-xl border border-border bg-input/40 px-4 py-2.5 text-sm text-foreground outline-none ring-primary/40 transition focus:ring-2"
              />
            </label>
            <label className="block">
              <span className="text-xs uppercase tracking-wider text-muted-foreground">Email</span>
              <input
                required
                type="email"
                maxLength={255}
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="mt-1 w-full rounded-xl border border-border bg-input/40 px-4 py-2.5 text-sm text-foreground outline-none ring-primary/40 transition focus:ring-2"
              />
            </label>
          </div>
          <label className="block">
            <span className="text-xs uppercase tracking-wider text-muted-foreground">Message</span>
            <textarea
              required
              rows={5}
              maxLength={2000}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="mt-1 w-full resize-none rounded-xl border border-border bg-input/40 px-4 py-2.5 text-sm text-foreground outline-none ring-primary/40 transition focus:ring-2"
            />
          </label>
          <button
            type="submit"
            disabled={loading}
            className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.03] disabled:opacity-60"
          >
            {loading ? <Loader2 className="size-4 animate-spin" /> : <Send className="size-4" />}
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>
      </div>
    </section>
  );
}
