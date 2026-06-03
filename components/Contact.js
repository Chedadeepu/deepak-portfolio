"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

function Magnetic({ children, className = "", ...rest }) {
  const ref = useRef(null);
  const [p, setP] = useState({ x: 0, y: 0 });
  const move = (e) => {
    const r = ref.current.getBoundingClientRect();
    setP({
      x: (e.clientX - (r.left + r.width / 2)) * 0.3,
      y: (e.clientY - (r.top + r.height / 2)) * 0.3,
    });
  };
  return (
    <motion.a
      ref={ref}
      onMouseMove={move}
      onMouseLeave={() => setP({ x: 0, y: 0 })}
      animate={{ x: p.x, y: p.y }}
      transition={{ type: "spring", stiffness: 250, damping: 18 }}
      className={className}
      data-magnetic
      {...rest}
    >
      {children}
    </motion.a>
  );
}

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section
      id="contact"
      className="relative mx-auto max-w-5xl px-6 py-32 text-center md:px-12"
    >
      {/* little returning avatar */}
      <motion.div
        initial={{ scale: 0, rotate: -30 }}
        whileInView={{ scale: 1, rotate: 0 }}
        viewport={{ once: true }}
        transition={{ type: "spring", stiffness: 200, damping: 12 }}
        className="mx-auto mb-8 w-fit"
      >
        <svg viewBox="0 0 80 80" className="h-20 w-20">
          <circle cx="40" cy="40" r="30" fill="#5b3aa6" />
          <ellipse cx="31" cy="38" rx="4" ry="5" fill="#0b0b10" />
          <ellipse cx="49" cy="38" rx="4" ry="5" fill="#0b0b10" />
          <circle cx="31" cy="37" r="2" fill="#c084fc" />
          <circle cx="49" cy="37" r="2" fill="#c084fc" />
          <path
            d="M30 50 Q40 60 50 50 Q40 56 30 50"
            fill="#c084fc"
          />
        </svg>
      </motion.div>

      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-display text-5xl font-extrabold leading-[0.95] tracking-tight md:text-8xl"
      >
        Let's Build Something
        <br />
        <span className="text-gradient">Unforgettable.</span>
      </motion.h2>

      <p className="mx-auto mt-6 max-w-md text-white/55">
        Have an idea, a role, or a wild experiment in mind? I'd love to hear it.
      </p>

      {/* form */}
      <form
        onSubmit={(e) => {
          e.preventDefault();
          const data = new FormData(e.target);
          const subject = encodeURIComponent(`Hello from ${data.get("name")}`);
          const body = encodeURIComponent(data.get("message"));
          window.location.href = `mailto:deepakvutla9@gmail.com?subject=${subject}&body=${body}`;
          setSent(true);
        }}
        className="glass mx-auto mt-12 max-w-xl rounded-3xl p-6 text-left md:p-8"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <input
            name="name"
            required
            placeholder="Your name"
            className="interactive rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-purple-glow/60"
          />
          <input
            name="email"
            type="email"
            required
            placeholder="Email"
            className="interactive rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-purple-glow/60"
          />
        </div>
        <textarea
          name="message"
          required
          rows={4}
          placeholder="Tell me about it…"
          className="interactive mt-4 w-full resize-none rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm outline-none focus:border-purple-glow/60"
        />
        <button
          type="submit"
          data-magnetic
          className="interactive mt-5 w-full rounded-xl bg-white py-3.5 text-sm font-semibold text-ink transition-transform hover:scale-[1.01]"
        >
          {sent ? "Opening your mail app… ✦" : "Send Message →"}
        </button>
      </form>

      {/* floating socials */}
      <div className="mt-14 flex flex-wrap items-center justify-center gap-4">
        {[
          ["Email", "mailto:deepakvutla9@gmail.com"],
          ["GitHub", "#"],
          ["Twitter / X", "#"],
          ["LinkedIn", "#"],
        ].map(([label, href]) => (
          <Magnetic
            key={label}
            href={href}
            className="glass rounded-full px-6 py-3 text-sm transition-colors hover:text-purple-glow"
          >
            {label}
          </Magnetic>
        ))}
      </div>

      <footer className="mt-24 text-sm text-white/35">
        Designed &amp; built by Deepak · Made with caffeine and curiosity ✦
      </footer>
    </section>
  );
}
