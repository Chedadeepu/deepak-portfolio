"use client";
import { motion } from "framer-motion";
import Reveal, { SectionLabel } from "./Reveal";

const experiments = [
  { title: "Generative Avatars", tag: "AI · Design", emoji: "🎨", desc: "Procedural characters that react to cursor, motion, and sound." },
  { title: "Browser Sound Engine", tag: "Web Audio", emoji: "🎧", desc: "Music synthesized entirely in the browser — zero audio files." },
  { title: "Voice Interface Lab", tag: "Voice", emoji: "🗣️", desc: "Explorations in natural, expressive speech and conversation flow." },
  { title: "Motion Playground", tag: "Framer · GSAP", emoji: "✨", desc: "A sandbox of spring physics, magnetic UI, and liquid transitions." },
  { title: "Prompt Tooling", tag: "LLM Ops", emoji: "🧪", desc: "Small utilities for chaining and testing AI prompts at speed." },
  { title: "3D Doodles", tag: "Three.js", emoji: "🪐", desc: "Distortion shaders and floating geometry, just for the joy of it." },
];

export default function Experiments() {
  return (
    <section id="experiments" className="relative mx-auto max-w-6xl px-6 py-32 md:px-12">
      <SectionLabel>The Playground</SectionLabel>
      <h2 className="font-display text-4xl font-bold leading-tight md:text-6xl">
        Experiments &amp; <span className="text-gradient">curiosities.</span>
      </h2>
      <p className="mt-4 max-w-md text-white/50">
        Side quests, half-ideas, and things built purely because they were fun.
        This is where the personality lives.
      </p>

      <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {experiments.map((e, i) => (
          <Reveal key={e.title} delay={(i % 3) * 0.08}>
            <motion.div
              whileHover={{ y: -6 }}
              className="interactive group relative h-full overflow-hidden rounded-2xl border border-white/8 bg-white/[0.025] p-6"
            >
              <div className="absolute -right-6 -top-6 text-7xl opacity-10 transition-all duration-500 group-hover:scale-125 group-hover:opacity-20">
                {e.emoji}
              </div>
              <div className="relative">
                <span className="text-3xl">{e.emoji}</span>
                <div className="mt-4 text-[11px] uppercase tracking-wider text-warm">
                  {e.tag}
                </div>
                <h3 className="mt-1 font-display text-xl font-semibold">
                  {e.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {e.desc}
                </p>
              </div>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
