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
    name: "Chedadeepu Saiteja",
    headline: ["Data Analyst", "Analytics Engineer", "Data Engineer"],
    intro:
      "I build end-to-end data pipelines, BI dashboards, and AI-powered analytics systems that turn raw data into decisions. MS Computer Science · FAU · Microsoft PL-300 Certified · Open to Work.",
    availabilityBadge: "Open to full-time & internship roles",
  },

  // ── ABOUT ─────────────────────────────────────────────────────────────
  about: {
    heading: "A story told in data, pipelines, and real results.",
    stats: [
      { value: 7,    suffix: "+", label: "Portfolio Projects" },
      { value: 12,   suffix: "+", label: "Technologies Mastered" },
      { value: 3.88, suffix: "",  label: "GPA — MS Computer Science" },
      { value: 3,    suffix: "yr", label: "US Work Authorization (OPT)" },
    ],
    milestones: [
      {
        year: "01",
        phase: "Foundations",
        title: "Where curiosity met data",
        body: "I started with spreadsheets and SQL, fascinated by how raw numbers could tell a story nobody else had noticed. That curiosity became an obsession with building systems that surface insight automatically.",
      },
      {
        year: "02",
        phase: "Engineering",
        title: "Building pipelines that actually work",
        body: "At Florida Atlantic University I went deep on data engineering — designing ETL pipelines with Apache Airflow, modeling data in dbt, and querying at scale in BigQuery. I stopped thinking about data as static and started seeing it as a flow to be engineered.",
      },
      {
        year: "03",
        phase: "Intelligence",
        title: "Bringing AI into the analytics stack",
        body: "I built an end-to-end LLM pipeline — pulling live news via NewsAPI, enriching it with GPT-4o-mini, storing structured output in PostgreSQL, transforming with dbt, and surfacing a real-time Plotly sentiment dashboard. Under $0.10 per run.",
      },
      {
        year: "04",
        phase: "Today",
        title: "Ready to ship real impact",
        body: "I'm seeking data analyst, analytics engineer, or data engineer roles where I can own the full stack — ingest to insight. I bring Python, SQL, dbt, Power BI, BigQuery, and Airflow — and the work ethic to back it up.",
      },
    ],
  },

  // ── WHAT I BRING ──────────────────────────────────────────────────────
  value: {
    heading: "I help teams go from raw data to reliable decisions — fast.",
    subheading:
      "Whether you need a Power BI dashboard that actually gets used, a dbt pipeline that won't break, or an AI layer on top of your data — here's where I add the most value.",
    availabilityLine: "Currently available for",
    availabilityBold: "full-time & internship roles",
    resumeFile: "/resume.pdf",
    services: [
      {
        icon: "◈",
        title: "Data Engineering & ETL Pipelines",
        body: "I design and build production-grade ETL/ELT pipelines — from raw ingestion to clean, modeled tables ready for analysis. Airflow for orchestration, dbt for transformation, BigQuery/Snowflake for scale.",
        metric: "Pipelines that run overnight without babysitting",
        points: ["Apache Airflow orchestration", "dbt Core transformations", "Cloud-native on AWS & Azure"],
      },
      {
        icon: "✦",
        title: "BI Dashboards & Analytics",
        body: "I turn messy data into Power BI and Plotly dashboards that stakeholders actually open. Microsoft PL-300 certified. I write the DAX, build the data model, and make it look good.",
        metric: "Dashboards people reference in every meeting",
        points: ["Microsoft PL-300 Certified", "Advanced DAX & data modeling", "Plotly & interactive reporting"],
      },
      {
        icon: "❖",
        title: "AI-Powered Analytics",
        body: "I integrate LLMs into data pipelines — structured extraction, sentiment analysis, and intelligent enrichment at scale. Not just prompts; production systems with PostgreSQL backends and dbt models on top.",
        metric: "LLM pipeline for under $0.10 per full run",
        points: ["GPT-4o-mini integration", "Structured JSON extraction", "End-to-end pipeline ownership"],
      },
      {
        icon: "◆",
        title: "Statistical Analysis & ML",
        body: "A/B testing, churn prediction, RFM segmentation, regression — I build statistical models that answer real business questions, not just homework assignments. Python, scikit-learn, and SciPy.",
        metric: "81% accuracy churn model in production-ready code",
        points: ["A/B testing & hypothesis testing", "Supervised ML (Logistic, RF)", "RFM & cohort analysis"],
      },
    ],
    closingLine:
      "The common thread? I own the whole pipeline — ingest, transform, model, visualize — and I ship work I'm proud to put my name on.",
  },

  // ── PROJECTS ──────────────────────────────────────────────────────────
  projects: [
    {
      title: "AI News Intelligence Pipeline",
      tag: "LLM · ETL · Python",
      role: "Solo Data Engineer & AI Developer",
      year: "2025",
      accent: "linear-gradient(135deg,#8b5cf6,#ff8a5c)",
      emoji: "🤖",
      blurb: "End-to-end LLM pipeline: live news → GPT-4o-mini enrichment → PostgreSQL → dbt → real-time sentiment dashboard.",
      challenge:
        "News data arrives unstructured and fast — extracting structured insight (entities, sentiment, topics) manually doesn't scale.",
      process:
        "I built a fully automated pipeline: NewsAPI pulls live articles, GPT-4o-mini extracts structured JSON (sentiment, entities, category), data lands in PostgreSQL, dbt transforms it into mart tables, and Plotly renders a live dashboard.",
      solution:
        "A production-ready AI analytics pipeline that runs end-to-end for under $0.10, with a live Plotly dashboard showing real-time sentiment trends.",
      did: [
        "Designed end-to-end pipeline: API ingest → LLM enrichment → database → BI layer",
        "Integrated GPT-4o-mini for structured JSON extraction from unstructured news text",
        "Built PostgreSQL schema and dbt transformation models on top",
        "Created interactive Plotly sentiment dashboard with time-series and topic breakdowns",
        "Optimized cost to under $0.10 per full pipeline run",
      ],
      results: ["<$0.10 per full run", "Real-time sentiment dashboard", "Fully automated — zero manual steps"],
      stack: ["Python", "GPT-4o-mini", "NewsAPI", "PostgreSQL", "dbt", "Plotly", "Apache Airflow"],
    },
    {
      title: "E-Commerce SQL Analytics",
      tag: "SQL · PostgreSQL · dbt",
      role: "Solo Data Engineer",
      year: "2025",
      accent: "linear-gradient(135deg,#46e7ff,#8b5cf6)",
      emoji: "🛒",
      blurb: "PostgreSQL star schema with SCD Type 2, 20+ advanced SQL queries, cohort retention, and RFM segmentation on the Olist dataset.",
      challenge:
        "E-commerce data lives in 9 raw tables with no modeling — no way to answer questions about retention, customer value, or revenue trends reliably.",
      process:
        "I designed a dimensional star schema, implemented SCD Type 2 for slowly changing dimensions, wrote 20+ production-grade SQL queries, and built a full dbt pipeline with incremental models and DAG documentation.",
      solution:
        "A fully modeled data warehouse with cohort retention analysis, RFM customer segmentation, and revenue trend queries — all version-controlled in dbt.",
      did: [
        "Designed star schema with fact and dimension tables on PostgreSQL",
        "Implemented SCD Type 2 for customer and product dimension history",
        "Wrote 20+ advanced SQL queries: window functions, CTEs, recursive queries",
        "Built full dbt Core pipeline with staging, intermediate, and mart layers",
        "Produced cohort retention matrix and RFM segmentation for 96K+ customers",
      ],
      results: ["96K+ customers modeled", "SCD Type 2 history preserved", "Full dbt DAG documented"],
      stack: ["PostgreSQL", "dbt Core", "SQL", "Python", "BigQuery"],
    },
    {
      title: "Cybersecurity Power BI Dashboard",
      tag: "Power BI · DAX · Analytics",
      role: "Solo BI Developer",
      year: "2024",
      accent: "linear-gradient(135deg,#ff5cad,#ff8a5c)",
      emoji: "🔐",
      blurb: "850-incident cybersecurity dashboard with financial impact analysis, stock market correlation, and advanced DAX measures. Microsoft PL-300 applied.",
      challenge:
        "Security incident data was scattered across CSVs with no unified view of financial exposure, incident patterns, or industry-level trends.",
      process:
        "I built a full Power BI data model with relationships across 850 incidents, wrote advanced DAX for rolling totals, YoY comparisons, and financial impact calculations, then layered stock market data for correlation analysis.",
      solution:
        "An executive Power BI dashboard showing incident trends, financial exposure by industry, attack type breakdown, and stock price impact — all drillable and interactive.",
      did: [
        "Built Power BI data model across multiple related tables",
        "Wrote advanced DAX: time intelligence, rolling averages, YoY variance",
        "Integrated stock market data to correlate breach events with price impact",
        "Designed executive-level report with drill-through and cross-filtering",
        "Applied Microsoft PL-300 data modeling best practices throughout",
      ],
      results: ["850 incidents analyzed", "Financial impact quantified", "Stock correlation surfaced"],
      stack: ["Power BI", "DAX", "Power Query", "Excel", "Python"],
    },
    {
      title: "Customer Churn Prediction",
      tag: "ML · Python · scikit-learn",
      role: "Solo Data Scientist",
      year: "2025",
      accent: "linear-gradient(135deg,#c6ff3f,#46e7ff)",
      emoji: "📉",
      blurb: "Logistic Regression + Random Forest churn model with 81% accuracy and 0.79 AUC — feature engineered, tuned, and production-packaged.",
      challenge:
        "Subscription businesses lose revenue to churn they never see coming — reactive rather than predictive.",
      process:
        "I engineered features from raw customer behavior data, trained and compared Logistic Regression and Random Forest models, tuned hyperparameters with cross-validation, and packaged the final model with SHAP explainability.",
      solution:
        "A production-ready churn prediction model with 81% accuracy, 0.79 AUC, SHAP feature importance, and a clean inference pipeline.",
      did: [
        "Feature engineering from raw customer event and subscription data",
        "Trained Logistic Regression and Random Forest with cross-validation",
        "Hyperparameter tuning with GridSearchCV — optimized for recall on churn class",
        "SHAP values for model explainability — top drivers identified",
        "Packaged as reusable inference pipeline with requirements.txt and README",
      ],
      results: ["81% accuracy", "0.79 AUC-ROC", "SHAP explainability included"],
      stack: ["Python", "scikit-learn", "Pandas", "NumPy", "SHAP", "Matplotlib"],
    },
    {
      title: "A/B Testing Framework",
      tag: "Statistics · Python · Experimentation",
      role: "Solo Analytics Engineer",
      year: "2025",
      accent: "linear-gradient(135deg,#8b5cf6,#c6ff3f)",
      emoji: "🧪",
      blurb: "Production-grade A/B testing framework with z-test, t-test, confidence intervals, Bonferroni correction, and peeking bias detection.",
      challenge:
        "Most A/B testing implementations ignore multiple comparison problems and peeking bias — leading to false positives that cost businesses real money.",
      process:
        "I built a reusable statistical testing framework that implements two-proportion z-test, Welch's t-test, confidence intervals, Bonferroni correction for multiple variants, and sequential testing guardrails.",
      solution:
        "A clean Python package for rigorous experimentation — handles sample size calculation, significance testing, effect size, and generates readable HTML reports.",
      did: [
        "Implemented two-proportion z-test and Welch's t-test from scratch in Python",
        "Built Bonferroni correction for multi-variant experiments",
        "Added sequential testing logic to prevent peeking bias",
        "Sample size calculator with power analysis (α=0.05, β=0.20)",
        "Auto-generates readable experiment report with confidence intervals",
      ],
      results: ["Peeking bias eliminated", "Multi-variant safe", "Reusable across experiments"],
      stack: ["Python", "SciPy", "Pandas", "NumPy", "Matplotlib", "Statistics"],
    },
    {
      title: "Olist E-Commerce Analytics",
      tag: "Python · Plotly · Analytics",
      role: "Solo Data Analyst",
      year: "2025",
      accent: "linear-gradient(135deg,#ff8a5c,#ff5cad)",
      emoji: "📊",
      blurb: "9-table merge on 96K+ orders — delivery performance, seller analysis, ANOVA, t-test, RFM segmentation, and Plotly interactive dashboard.",
      challenge:
        "The Olist dataset spans 9 tables and 96K+ orders — meaningful insight requires merging, cleaning, and applying the right statistical tests, not just pivot tables.",
      process:
        "I merged all 9 tables, performed exploratory analysis, applied ANOVA for delivery time variance across states, t-tests for category comparisons, built RFM segmentation, and surfaced everything in an interactive Plotly dashboard.",
      solution:
        "A comprehensive analytics report with statistical validation — delivery SLAs, top seller performance, customer RFM tiers, and regional revenue breakdown — all interactive.",
      did: [
        "Merged 9 raw CSV tables into a single analytics-ready DataFrame",
        "Cleaned and validated 96K+ orders with missing value and outlier treatment",
        "Applied one-way ANOVA for delivery time variance across Brazilian states",
        "Welch t-test for category-level performance comparison",
        "Built RFM segmentation (Recency, Frequency, Monetary) with tier labels",
        "Created multi-chart Plotly dashboard with dropdowns and cross-filtering",
      ],
      results: ["96K+ orders analyzed", "ANOVA & t-test validated", "Interactive Plotly dashboard"],
      stack: ["Python", "Pandas", "Plotly", "SciPy", "NumPy", "Matplotlib"],
    },
    {
      title: "dbt Data Pipeline",
      tag: "dbt · BigQuery · Data Modeling",
      role: "Solo Analytics Engineer",
      year: "2025",
      accent: "linear-gradient(135deg,#46e7ff,#c6ff3f)",
      emoji: "🔧",
      blurb: "Full dbt Core pipeline on BigQuery — staging, intermediate, and mart layers with incremental models, tests, and auto-generated DAG docs.",
      challenge:
        "Raw e-commerce data in BigQuery had no transformation layer — analysts queried raw tables directly, leading to inconsistent metrics and no data contracts.",
      process:
        "I built a full dbt project with modular SQL models across staging (source alignment), intermediate (business logic), and mart (aggregated, ready-to-query) layers, plus generic and singular tests on every model.",
      solution:
        "A production-structured dbt project with 15+ models, incremental loading for large tables, column-level tests, and auto-generated lineage documentation.",
      did: [
        "Designed 3-layer dbt architecture: staging → intermediate → mart",
        "Built 15+ dbt models with incremental materialization on large fact tables",
        "Wrote generic tests (not_null, unique, accepted_values) on all key columns",
        "Configured sources.yml with freshness checks and documentation",
        "Generated full DAG lineage documentation via dbt docs generate",
        "Connected to BigQuery with service account authentication",
      ],
      results: ["15+ models structured", "Incremental loads on fact tables", "Full lineage docs generated"],
      stack: ["dbt Core", "BigQuery", "SQL", "YAML", "Python", "Git"],
    },
  ],

  // ── SKILLS ────────────────────────────────────────────────────────────
  skills: [
    { name: "Python",        level: "Advanced",      x: 50, y: 46, r: 1.0  },
    { name: "SQL",           level: "Advanced",      x: 28, y: 30, r: 0.95 },
    { name: "dbt Core",      level: "Advanced",      x: 72, y: 30, r: 0.88 },
    { name: "Power BI",      level: "Certified PL-300", x: 80, y: 58, r: 0.88 },
    { name: "BigQuery",      level: "Advanced",      x: 22, y: 62, r: 0.82 },
    { name: "Apache Airflow",level: "Intermediate",  x: 60, y: 72, r: 0.78 },
    { name: "AWS",           level: "Intermediate",  x: 38, y: 18, r: 0.72 },
    { name: "Azure",         level: "Intermediate",  x: 86, y: 42, r: 0.70 },
    { name: "Git & GitHub",  level: "Advanced",      x: 14, y: 44, r: 0.72 },
    { name: "Pandas",        level: "Advanced",      x: 64, y: 50, r: 0.78 },
    { name: "scikit-learn",  level: "Intermediate",  x: 42, y: 68, r: 0.70 },
    { name: "Plotly",        level: "Advanced",      x: 76, y: 72, r: 0.68 },
  ],

  // ── EXPERIMENTS ───────────────────────────────────────────────────────
  experiments: [
    { title: "LLM Cost Optimizer",    tag: "AI · Python",          emoji: "💡", desc: "Benchmarked GPT-4o-mini vs GPT-4o for structured JSON extraction — 95% cost reduction with <2% accuracy drop." },
    { title: "SQL Query Profiler",    tag: "PostgreSQL · Tools",   emoji: "⚡", desc: "A small CLI that explains and rewrites slow queries using EXPLAIN ANALYZE output and GPT suggestions." },
    { title: "dbt Model Generator",   tag: "dbt · Automation",     emoji: "🔧", desc: "Python script that reads a raw schema and auto-generates dbt staging models, sources.yml, and basic tests." },
    { title: "Power BI Theme Builder",tag: "Power BI · Design",    emoji: "🎨", desc: "JSON theme generator for Power BI — input brand colors, output a complete theme file ready to import." },
    { title: "Airflow DAG Visualizer",tag: "Airflow · Python",     emoji: "🪄", desc: "Lightweight tool that parses a DAG file and renders its dependency graph as an interactive HTML diagram." },
    { title: "Churn Alert Bot",       tag: "ML · Automation",      emoji: "🤖", desc: "Runs the churn model nightly and posts Slack alerts for customers who crossed the high-risk threshold." },
  ],

  // ── CONTACT ───────────────────────────────────────────────────────────
  contact: {
    heading: "Let's Turn Your Data Into Decisions.",
    subtext:
      "Open to data analyst, analytics engineer, and data engineer roles. OPT authorized — 3 years, no sponsorship needed now. Hollywood, FL · open to remote & relocation.",
    email: "chedadeepusaitejajobs@gmail.com",
    socials: [
      { label: "Email",    href: "mailto:chedadeepusaitejajobs@gmail.com" },
      { label: "GitHub",   href: "https://github.com/Chedadeepu" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/chedadeepu-saiteja" },
    ],
  },

  // ── MUSIC ─────────────────────────────────────────────────────────────
  music: {
    enabled: true,
  },
};

export default content;
