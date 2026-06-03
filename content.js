// ════════════════════════════════════════════════════════════════════════
//  👋 THIS IS THE ONLY FILE YOU NEED TO EDIT.
//
//  Everything on your website — your name, your story, your projects, your
//  skills — lives right here. Change the text between the "quotes" and your
//  website updates automatically.
//
//  ✅ Safe to change: anything inside "quotes"
//  ⚠️  Keep the punctuation: the commas, quotes, [ ] and { } need to stay.
//  💡 Not sure? Ask your AI helper: "Help me edit content.js, I'm not technical."
// ════════════════════════════════════════════════════════════════════════

export const content = {
  // ── YOU ──────────────────────────────────────────────────────────────
  profile: {
    name: "Deepak", // shown in the top-left logo and around the site
    // The big hero headline. Each item is one word/line. The LAST one gets
    // the colorful gradient. Keep it short and punchy (4–7 words total).
    headline: ["Building", "Digital", "Experiences", "That", "People", "Remember."],
    // One or two sentences under the headline — who you are, what you do.
    intro:
      "I'm Deepak — a creative developer crafting AI products, web apps, and interactive experiences at the edge of design and engineering.",
    // The little status pill at the top of the page.
    availabilityBadge: "Available for select collaborations",
  },

  // ── ABOUT: your numbers + your story ─────────────────────────────────
  about: {
    heading: "A story told in milestones, not bullet points.",
    // Four quick stats. "value" can be a number (it counts up) or text.
    // "suffix" is added after it (like + or % or AM).
    stats: [
      { value: 5, suffix: "+", label: "Products Shipped" },
      { value: 12, suffix: "+", label: "Technologies Mastered" },
      { value: 4, suffix: "+", label: "Years Building" },
      { value: 100, suffix: "%", label: "End-to-End Ownership" },
    ],
    // Your journey, as a timeline. Add or remove blocks as you like.
    milestones: [
      {
        year: "01",
        phase: "Foundations",
        title: "Where curiosity met the keyboard",
        body: "I never wanted to just use software — I wanted to know why it worked. That itch turned into a craft, and the browser became the place I could build anything I imagined.",
      },
      {
        year: "02",
        phase: "Craft",
        title: "Designing for people, not screens",
        body: "Shipping for real users taught me the part no tutorial does: empathy. Every pixel, delay, and word is a decision someone will feel.",
      },
      {
        year: "03",
        phase: "Growth",
        title: "Learning to own the whole thing",
        body: "I moved from building pieces to owning outcomes — scoping problems, making the calls, and shipping work I'm proud to put my name on.",
      },
      {
        year: "04",
        phase: "Today",
        title: "Engineering experiences people remember",
        body: "Now I live at the intersection of design, motion, and engineering — crafting products that don't just function, but leave an impression.",
      },
    ],
  },

  // ── WHAT I BRING: your value / services ──────────────────────────────
  value: {
    heading: "I help teams turn ideas into products people remember.",
    subheading:
      "Whether you're a founder with a rough sketch or a team that needs an extra pair of hands that thinks like an owner — here's where I add the most value.",
    availabilityLine: "Currently available for", // followed by the bold part below
    availabilityBold: "freelance & full-time",
    // Drop your résumé PDF into the "public" folder and put its name here.
    resumeFile: "/Deepak-Resume.pdf",
    // Your services / strengths. Each card has a short metric (a proof point).
    services: [
      {
        icon: "✦",
        title: "AI Engineering & Automation",
        body: "I turn AI from a buzzword into shipped product — agents, assistants, and automations that remove busywork and let teams focus on what matters.",
        metric: "Cut multi-hour manual workflows down to minutes",
        points: ["LLM & agent integration", "Workflow automation", "Practical, measurable wins"],
      },
      {
        icon: "◈",
        title: "Full-Stack Web Engineering",
        body: "I design and ship complete products — a thoughtful interface down to the data layer. Built to feel fast, reliable, and effortless.",
        metric: "Idea to live product in weeks, not quarters",
        points: ["Responsive, accessible UI", "Robust front & back end", "Production-ready from day one"],
      },
      {
        icon: "❖",
        title: "Interaction & Motion Design",
        body: "I make products feel alive. Considered animation and micro-interactions that guide attention, build trust, and make an experience memorable.",
        metric: "Interfaces people screenshot and share",
        points: ["Motion & micro-interactions", "3D & immersive interfaces", "Brand-grade polish"],
      },
      {
        icon: "◆",
        title: "Product Ownership, End to End",
        body: "I take full ownership — scoping the problem, shaping the solution, building it, and shipping it. A partner who thinks about outcomes, not just tickets.",
        metric: "One person, zero hand-off gaps",
        points: ["End-to-end ownership", "Fast, focused iteration", "Clear communication"],
      },
    ],
    closingLine:
      "The common thread? I sweat the details others skip — and I build things I'd be proud to put my name on.",
  },

  // ── PROJECTS: your real work ─────────────────────────────────────────
  // Click a card on the site → a detail popup opens with everything below.
  // "accent" is the card's color gradient — leave as-is or ask your AI to change it.
  projects: [
    {
      title: "Project Aurora",
      tag: "Full-Stack Web Platform",
      role: "Solo Full-Stack Developer",
      year: "Available on Request",
      accent: "linear-gradient(135deg,#8b5cf6,#ff8a5c)",
      emoji: "✦",
      blurb: "A full-stack web platform pairing thoughtful UX with AI-powered matching.",
      challenge:
        "A people-first marketplace where the right connections were buried under noise and slow, manual searching.",
      process:
        "I designed the information architecture and data model, then layered AI-powered ranking so users reach the right result with far less friction.",
      solution:
        "A responsive, real-time web app with a clean dashboard, rich profiles, and smart, context-aware results.",
      did: [
        "Built the full app end-to-end in React — UI, state, and data flow",
        "Designed the database schema and auth on a Postgres backend",
        "Integrated an AI model to power natural-language matching & ranking",
        "Implemented responsive, accessible layouts and a real-time dashboard",
      ],
      results: ["Faster discovery", "Structured data layer", "AI-driven matching"],
      stack: ["React", "Vite", "Postgres", "AI / LLM", "Tailwind"],
    },
    {
      title: "Project Atlas",
      tag: "Desktop Automation",
      role: "Solo Developer — Desktop & Automation",
      year: "Available on Request",
      accent: "linear-gradient(135deg,#46e7ff,#8b5cf6)",
      emoji: "◆",
      blurb: "A cross-platform desktop tool that automates repetitive, high-volume workflows.",
      challenge:
        "A daily workflow drowning in repetitive manual steps — slow, tedious, and error-prone.",
      process:
        "I built an automation engine that handles the busywork while keeping a human in the loop for the decisions that actually matter.",
      solution:
        "A cross-platform desktop app orchestrating a reliable pipeline behind a calm monitoring interface.",
      did: [
        "Architected and built a cross-platform desktop app",
        "Engineered an automation pipeline that processes tasks at scale",
        "Designed a monitoring UI with live status, logs, and an audit trail",
        "Handled packaging, error recovery, and human-in-the-loop checkpoints",
      ],
      results: ["Hours saved daily", "Higher throughput", "Full audit trail"],
      stack: ["Electron", "Node.js", "JavaScript", "Automation"],
    },
    {
      title: "Project Echo",
      tag: "Conversational Voice AI",
      role: "AI / Front-End Developer",
      year: "Available on Request",
      accent: "linear-gradient(135deg,#ff8a5c,#ff5cad)",
      emoji: "❖",
      blurb: "A natural, voice-first assistant designed to feel human, not robotic.",
      challenge:
        "Voice interfaces that felt stiff and impersonal — and underserved certain users entirely.",
      process:
        "I engineered a conversation flow around real intent, balancing AI reasoning with expressive, natural-sounding speech.",
      solution:
        "A real-time voice interface with fluid turn-taking, intent handling, and confident task completion.",
      did: [
        "Built the real-time voice UI with live speech in/out",
        "Integrated an LLM for reasoning and intent recognition",
        "Wired up speech-to-text and natural text-to-speech responses",
        "Designed the dialogue flow, fallbacks, and task-completion logic",
      ],
      results: ["Natural conversation", "Inclusive by design", "Reliable task flow"],
      stack: ["React", "AI / LLM", "Voice AI", "Speech / TTS"],
    },
    {
      title: "Project Vesper",
      tag: "Monitoring & Optimization Engine",
      role: "Backend / Automation Developer",
      year: "Available on Request",
      accent: "linear-gradient(135deg,#c6ff3f,#46e7ff)",
      emoji: "✺",
      blurb: "A monitoring and optimization engine that surfaces the best option, automatically.",
      challenge:
        "A scarce resource that required constant manual watching to ever catch a good opening.",
      process:
        "I built a monitoring layer that continuously evaluates availability and ranks options against user preferences.",
      solution:
        "A lightweight engine that does the watching and the deciding, so people don't have to.",
      did: [
        "Built a resilient data-collection & monitoring engine in Node.js",
        "Wrote a scoring algorithm to rank options by user preferences",
        "Added scheduling, retries, and notifications for hands-off running",
        "Optimized for reliability and low resource usage over long sessions",
      ],
      results: ["Zero manual watching", "Optimal selection", "Time reclaimed"],
      stack: ["Node.js", "Web Scraping", "Algorithms", "Automation"],
    },
  ],

  // ── SKILLS: your toolkit ─────────────────────────────────────────────
  // "level" shows on hover. x/y is where the bubble sits (0–100 = left→right,
  // top→bottom). "r" is its size (0.6 small … 1.0 big). Don't overthink x/y —
  // just spread them out, or ask your AI to "arrange my skill bubbles nicely".
  skills: [
    { name: "React", level: "Expert", x: 50, y: 46, r: 1.0 },
    { name: "Next.js", level: "Advanced", x: 72, y: 30, r: 0.85 },
    { name: "Three.js", level: "Intermediate", x: 28, y: 28, r: 0.7 },
    { name: "AI / LLMs", level: "Advanced", x: 80, y: 60, r: 0.85 },
    { name: "Electron", level: "Advanced", x: 22, y: 64, r: 0.78 },
    { name: "Databases", level: "Advanced", x: 60, y: 72, r: 0.78 },
    { name: "Framer Motion", level: "Advanced", x: 40, y: 18, r: 0.72 },
    { name: "Voice AI", level: "Intermediate", x: 86, y: 44, r: 0.68 },
    { name: "Node.js", level: "Advanced", x: 14, y: 44, r: 0.75 },
    { name: "Tailwind", level: "Expert", x: 64, y: 50, r: 0.7 },
  ],

  // ── EXPERIMENTS: side projects / fun stuff ───────────────────────────
  experiments: [
    { title: "Generative Avatars", tag: "AI · Design", emoji: "🎨", desc: "Procedural characters that react to cursor, motion, and sound." },
    { title: "Browser Sound Engine", tag: "Web Audio", emoji: "🎧", desc: "Music synthesized entirely in the browser — zero audio files." },
    { title: "Voice Interface Lab", tag: "Voice", emoji: "🗣️", desc: "Explorations in natural, expressive speech and conversation flow." },
    { title: "Motion Playground", tag: "Framer · GSAP", emoji: "✨", desc: "A sandbox of spring physics, magnetic UI, and liquid transitions." },
    { title: "Prompt Tooling", tag: "LLM Ops", emoji: "🧪", desc: "Small utilities for chaining and testing AI prompts at speed." },
    { title: "3D Doodles", tag: "Three.js", emoji: "🪐", desc: "Distortion shaders and floating geometry, just for the joy of it." },
  ],

  // ── CONTACT: how people reach you ────────────────────────────────────
  contact: {
    heading: "Let's Build Something Unforgettable.",
    subtext: "Have an idea, a role, or a wild experiment in mind? I'd love to hear it.",
    email: "deepakvutla9@gmail.com",
    // Put your real links here. Use "#" if you don't have one yet.
    socials: [
      { label: "Email", href: "mailto:deepakvutla9@gmail.com" },
      { label: "GitHub", href: "#" },
      { label: "Twitter / X", href: "#" },
      { label: "LinkedIn", href: "#" },
    ],
  },

  // ── MUSIC: the little lo-fi player in the nav ────────────────────────
  music: {
    enabled: true, // set to false to remove the music button entirely
  },
};

export default content;
