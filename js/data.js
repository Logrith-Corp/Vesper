/* ==========================================================================
   VESPER — Product Data
   Edit this file to add, remove, or update products.
   checkoutLink = the external URL (Gumroad / Payhip / other) the Buy button
   redirects to. Replace the placeholder links with your real product URLs.
   ========================================================================== */

const CATEGORIES = [
  { slug: "ai", name: "AI", description: "Prompt systems, AI workflows, and playbooks for builders." },
  { slug: "business", name: "Business", description: "Frameworks and operating systems for running a business." },
  { slug: "startups", name: "Startups", description: "Kits and playbooks for founders shipping fast." },
  { slug: "productivity", name: "Productivity", description: "Systems to organize your time, work, and focus." },
  { slug: "templates", name: "Templates", description: "Ready-to-use templates for documents and workflows." },
  { slug: "prompts", name: "Prompts", description: "Curated prompt packs for daily AI use." },
  { slug: "guides", name: "Guides", description: "In-depth written guides on high-leverage topics." },
  { slug: "bundles", name: "Bundles", description: "Multiple products packaged together at a lower price." },
];

const PRODUCTS = [
  {
    slug: "ai-growth-playbook",
    title: "AI Growth Playbook",
    shortDescription: "A step-by-step system to grow a product using AI-driven distribution.",
    longDescription: "The AI Growth Playbook breaks down exactly how modern AI-first products acquire their first ten thousand users without a marketing budget. It covers positioning, distribution channels that actually work in 2026, and how to build growth loops that compound instead of resetting to zero every month. Built for solo founders and small teams who need leverage, not headcount.",
    price: 29,
    category: "ai",
    featured: true,
    bestseller: true,
    included: [
      "62-page PDF playbook",
      "Growth loop templates (Notion + Sheets)",
      "20 real case study breakdowns",
      "Channel-selection worksheet",
      "Free lifetime updates",
    ],
    problemSolves: [
      "Cuts through generic marketing advice that doesn't apply to AI products",
      "Gives a repeatable framework instead of one-off tactics",
      "Saves weeks of trial and error on channel selection",
    ],
    faq: [
      { q: "How do I access the file?", a: "After checkout you'll get an instant download link by email from the seller platform." },
      { q: "Is this a digital product?", a: "Yes — everything is delivered digitally, nothing is shipped." },
      { q: "What format is included?", a: "PDF playbook plus linked Notion and Sheets templates." },
      { q: "Does this include updates?", a: "Yes, all future updates to this playbook are free for existing buyers." },
    ],
    checkoutLink: "https://gumroad.com/l/your-product-link",
  },
  {
    slug: "startup-notion-kit",
    title: "Startup Notion Kit",
    shortDescription: "The exact Notion workspace to run a lean startup from idea to launch.",
    longDescription: "A complete Notion operating system for early-stage founders — idea tracker, sprint board, finance tracker, content calendar, and feature tracker in one connected workspace. Built from running a real early-stage startup, not templated from a generic formula, and refined down to the pieces that actually get used every week.",
    price: 19,
    category: "startups",
    featured: true,
    bestseller: false,
    included: [
      "Full Notion workspace (duplicate link)",
      "PDF quick-start guide (setup + how to use each database)",
      "Idea Tracker database",
      "Roadmap with Sprint Board (kanban view)",
      "Finance Tracker (income/expense log)",
      "Content Calendar database",
      "Feature Tracker database",
      "Pre-filled example entries in every database",
    ],
    problemSolves: [
      "Replaces five scattered tools (Trello, Excel, Google Calendar, notes app, spreadsheet) with one connected workspace",
      "Gives just enough structure without over-engineering process for a one-person team",
      "Ready to use in under ten minutes — duplicate and start filling it in",
    ],
    faq: [
      { q: "How do I access the file?", a: "After checkout you'll receive both the Notion duplicate link and the PDF quick-start guide instantly." },
      { q: "Can I download it instantly?", a: "Yes, access is immediate — no waiting period." },
      { q: "Do I need a paid Notion account?", a: "No, the free tier of Notion works fine for this workspace." },
      { q: "Is there any refund policy?", a: "Refer to the seller platform's standard digital goods policy at checkout." },
    ],
    checkoutLink: "https://gumroad.com/l/your-product-link",
    notionLink: "https://app.notion.com/p/391107f38eeb81c7a89dc085f8b198d4",
  },
  {
    slug: "freelancer-toolkit",
    title: "Freelancer Toolkit",
    shortDescription: "Contracts, proposals, and invoice templates to run freelance work professionally.",
    longDescription: "Everything a freelancer needs to look and operate like an agency — contract templates reviewed for common markets, proposal decks that win higher-ticket clients, and an invoicing system that keeps cash flow predictable. Skip the legal research and the design work.",
    price: 24,
    category: "templates",
    featured: false,
    bestseller: true,
    included: [
      "5 contract templates (editable)",
      "Proposal deck template (Figma + PDF)",
      "Invoice + payment tracker",
      "Client onboarding checklist",
    ],
    problemSolves: [
      "Removes the guesswork from client-facing paperwork",
      "Improves how clients perceive your professionalism",
      "Speeds up the time from pitch to signed contract",
    ],
    faq: [
      { q: "What format is included?", a: "Editable PDF, Word, and Figma files depending on the asset." },
      { q: "Is support available?", a: "Basic email support is available through the seller platform." },
    ],
    checkoutLink: "https://gumroad.com/l/your-product-link",
  },
  {
    slug: "prompt-vault-pro",
    title: "Prompt Vault Pro",
    shortDescription: "300+ tested prompts across writing, coding, research, and business tasks.",
    longDescription: "A living library of prompts organized by job-to-be-done rather than by AI model. Each prompt has been tested for reliability and comes with notes on how to adapt it. Updated monthly as new patterns emerge.",
    price: 15,
    category: "prompts",
    featured: true,
    bestseller: true,
    included: [
      "300+ categorized prompts",
      "Searchable Notion database",
      "Monthly prompt additions",
      "Usage notes for each prompt",
    ],
    problemSolves: [
      "Saves time spent writing prompts from scratch",
      "Improves output quality with pre-tested structures",
      "Keeps your prompt library current as models evolve",
    ],
    faq: [
      { q: "Is access instant?", a: "Yes, you get the Notion database link right after checkout." },
      { q: "Does this include updates?", a: "Yes — new prompts are added monthly at no extra cost." },
    ],
    checkoutLink: "https://gumroad.com/l/your-product-link",
  },
  {
    slug: "founder-os-bundle",
    title: "Founder OS Bundle",
    shortDescription: "The complete bundle — Growth Playbook, Notion Kit, and Prompt Vault together.",
    longDescription: "All three of our most-used founder resources bundled at a lower combined price: the AI Growth Playbook, the Startup Notion Kit, and Prompt Vault Pro. Built for founders who want the full operating system instead of assembling it piece by piece.",
    price: 49,
    category: "bundles",
    featured: true,
    bestseller: true,
    included: [
      "AI Growth Playbook (full)",
      "Startup Notion Kit (full)",
      "Prompt Vault Pro (full)",
      "Priority email support",
    ],
    problemSolves: [
      "Cheaper than buying each product individually",
      "One checkout instead of three",
      "Covers growth, operations, and AI workflows together",
    ],
    faq: [
      { q: "Is this cheaper than buying separately?", a: "Yes, the bundle is discounted compared to the combined individual prices." },
      { q: "How do I access the files?", a: "All three products are delivered via instant download links after checkout." },
    ],
    checkoutLink: "https://gumroad.com/l/your-product-link",
  },
  {
    slug: "deep-work-system",
    title: "Deep Work System",
    shortDescription: "A minimal system for planning your week around focused, high-output blocks.",
    longDescription: "Not another productivity app — a simple paper-and-digital hybrid system for planning deep work blocks, protecting them from interruption, and reviewing output weekly. Designed for people who feel busy but not productive.",
    price: 12,
    category: "productivity",
    featured: false,
    bestseller: false,
    included: [
      "Weekly planning PDF template",
      "Daily deep work log",
      "Printable + digital (GoodNotes) versions",
      "Short guide on protecting focus time",
    ],
    problemSolves: [
      "Reduces context-switching across the day",
      "Gives a lightweight structure without rigid time-blocking apps",
      "Improves clarity on what actually got done each week",
    ],
    faq: [
      { q: "What format is included?", a: "PDF for print, plus a GoodNotes-compatible digital version." },
    ],
    checkoutLink: "https://gumroad.com/l/your-product-link",
  },
  {
    slug: "pitch-deck-template",
    title: "Investor Pitch Deck Template",
    shortDescription: "A clean, investor-tested slide template for pre-seed and seed raises.",
    longDescription: "A pitch deck structure modeled on decks that successfully closed pre-seed and seed rounds, stripped of unnecessary slides and heavy design. Built in Figma and Keynote so you can move fast and keep it on-brand.",
    price: 22,
    category: "startups",
    featured: false,
    bestseller: false,
    included: [
      "Figma source file",
      "Keynote + PowerPoint versions",
      "Slide-by-slide narration guide",
      "Example filled-in deck",
    ],
    problemSolves: [
      "Removes design work from deck creation",
      "Follows a structure investors already expect",
      "Speeds up fundraising prep significantly",
    ],
    faq: [
      { q: "Can I download it instantly?", a: "Yes, files are available immediately after checkout." },
    ],
    checkoutLink: "https://gumroad.com/l/your-product-link",
  },
  {
    slug: "ai-ops-guide",
    title: "AI Ops Guide",
    shortDescription: "How to run internal operations using AI agents instead of manual busywork.",
    longDescription: "A practical guide to automating internal operations — reporting, scheduling, data cleanup, and repetitive coordination — using AI agents and simple tooling. Written for small teams without a dedicated ops or engineering hire.",
    price: 18,
    category: "guides",
    featured: false,
    bestseller: false,
    included: [
      "48-page guide (PDF)",
      "5 ready-to-adapt automation workflows",
      "Tool recommendation list",
    ],
    problemSolves: [
      "Reduces time spent on repetitive internal tasks",
      "Gives non-technical teams a path into automation",
      "Avoids over-investing in ops headcount too early",
    ],
    faq: [
      { q: "Is this a digital product?", a: "Yes, delivered as a downloadable PDF guide." },
    ],
    checkoutLink: "https://gumroad.com/l/your-product-link",
  },
];

/* Helper accessors */
function getProductBySlug(slug) {
  return PRODUCTS.find((p) => p.slug === slug);
}
function getProductsByCategory(slug) {
  return PRODUCTS.filter((p) => p.category === slug);
}
function getCategoryBySlug(slug) {
  return CATEGORIES.find((c) => c.slug === slug);
}
function getRelatedProducts(product, count = 4) {
  const sameCategory = PRODUCTS.filter((p) => p.category === product.category && p.slug !== product.slug);
  const rest = PRODUCTS.filter((p) => p.category !== product.category && p.slug !== product.slug);
  return [...sameCategory, ...rest].slice(0, count);
}
