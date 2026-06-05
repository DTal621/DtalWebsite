// ─── Primitive interfaces ────────────────────────────────────────────────────

export interface Link {
  label: string;
  url: string;
}

// ─── Stat ────────────────────────────────────────────────────────────────────

export interface Stat {
  value: string;
  label: string;
  context: string; // source / attribution subtext
}

// ─── Role ────────────────────────────────────────────────────────────────────

export interface RoleAchievement {
  text: string;
}

export interface Role {
  title: string;
  org: string;
  location: string;
  period: string;
  achievements: RoleAchievement[];
  links?: Link[]; // e.g. { label: "Launch post", url: "https://..." }
}

// ─── Community ───────────────────────────────────────────────────────────────

export interface Community {
  role: string;
  org: string;
  period: string;
  achievements: RoleAchievement[];
}

// ─── Education ───────────────────────────────────────────────────────────────

export interface Education {
  institution: string;
  degree: string;
  honors: string;
  year: number;
  notes: string[]; // clubs, labs, fellowships
}

// ─── Military ────────────────────────────────────────────────────────────────

export interface Military {
  unit: string;
  rank: string;
  period: string;
  notes: string[];
}

// ─── Capabilities ────────────────────────────────────────────────────────────

export interface Capability {
  area: string; // e.g. "Product strategy"
}

// ─── Articles & Projects (typed but empty — fill later) ──────────────────────

export interface Article {
  title: string;
  platform: string;    // e.g. "Medium", "Mirror", "Substack"
  url: string;
  publishedAt: string; // ISO date string, e.g. "2024-03-15"
  summary: string;
}

export interface Project {
  name: string;
  url: string;
  description: string;
  tags: string[]; // e.g. ["DeFi", "Solidity", "Uniswap v3"]
}

// ─── Hobby / Language ────────────────────────────────────────────────────────

export interface Hobby {
  name: string;
}

export interface Language {
  name: string;
  proficiency: "fluent" | "intermediate" | "beginner";
}

// ─── Top-level Profile ───────────────────────────────────────────────────────

export interface Profile {
  name: string;
  tagline: string;
  location: string;
  links: Link[];
  stats: Stat[];
  roles: Role[];
  community: Community[];
  education: Education[];
  military: Military[];
  capabilities: Capability[];
  articles: Article[];
  projects: Project[];
  hobbies: Hobby[];
  languages: Language[];
}

// ─── Data ────────────────────────────────────────────────────────────────────

export const profile: Profile = {
  name: "Daniel Tal",
  tagline:
    "Product leader scaling Blockchain and DeFi protocols · exploring crypto × AI",
  location: "Tel Aviv, IL",

  links: [
    { label: "Email", url: "mailto:danieltal13@gmail.com" },
    { label: "LinkedIn", url: "https://linkedin.com/in/dtal621" },
    { label: "X", url: "https://x.com/danielHtal" },
    { label: "GitHub", url: "https://github.com/dtal621" },
  ],

  stats: [
    {
      value: "$1B+",
      label: "Assets bridged",
      context: "Wormhole relayer",
    },
    {
      value: "$600M+",
      label: "Peak AuM",
      context: "Rari lending market via ICHI",
    },
    {
      value: "60K+",
      label: "Developers reached",
      context: "IBM blockchain tooling",
    },
    {
      value: "7+",
      label: "Years building in crypto",
      context: "",
    },
  ],

  roles: [
    {
      title: "Product Lead",
      org: "xLabs (Wormhole core-contributor)",
      location: "Remote",
      period: "Jul 2024 – Present",
      achievements: [
        { text: "Validator business on 6 chains — $40M+ AuM in 120 days" },
        {
          text: "Authored the Wormhole NTT playbook, cutting partner onboarding by 73%",
        },
        { text: "Integrated Threshold Signature Scheme — 95% gas reduction" },
        {
          text: "Built relayer concept-to-launch: −50% wallets maintained, −80% at-risk funds",
        },
        { text: "Portal bridge asset onboarding — 70+ listings" },
      ],
      links: [
        // { label: "Launch post", url: "https://..." },
      ],
    },
    {
      title: "Head of Product & BD",
      org: "DMA Labs / ICHI",
      location: "Remote",
      period: "Mar 2021 – Aug 2023",
      achievements: [
        {
          text: "Built Uniswap v3 vault product idea-to-launch — 40+ vaults, $100M+ locked",
        },
        { text: "Rari lending market — $600M+ AuM" },
        {
          text: "10+ community stablecoins with Chainlink / Uniswap / ShapeShift — $80M+ market cap",
        },
        {
          text: "Raised $2M+ in grants across Solana, Moonbeam, Polygon, and Flow",
        },
        { text: "+32% MoM deposits via UX redesign" },
        { text: "Led 4 BD hires" },
      ],
      links: [],
    },
    {
      title: "Product Manager",
      org: "IBM Enterprise Blockchain",
      location: "New York",
      period: "Oct 2018 – Feb 2021",
      achievements: [
        { text: "Blockchain VS Code extension — 60K+ installs" },
        { text: "CodeReady Workspaces live in 3 months" },
        { text: "Competitive analysis used in 80% of winning deals" },
        { text: "+31% adoption via GTM and pricing improvements" },
        { text: "Top NPS across IBM Hybrid Cloud (Jul 2020)" },
        { text: "Accelerator mentor" },
      ],
      links: [],
    },
    {
      title: "Quantitative Analyst",
      org: "I Know First",
      location: "Tel Aviv",
      period: "Jun 2016 – Aug 2016",
      achievements: [
        {
          text: "Day-trading strategy improved returns from 30.5% to 45.2% over 8 months",
        },
        { text: "+10% on proprietary forecasting algorithm" },
      ],
      links: [],
    },
    {
      title: "Investment Intern",
      org: "OurCrowd (VC)",
      location: "New York",
      period: "Nov 2014 – Apr 2015",
      achievements: [
        { text: "Due diligence on early-stage fintech teams" },
        { text: "Investor ranking reports for US expansion" },
        { text: "Quarterly portfolio reporting" },
      ],
      links: [],
    },
  ],

  community: [
    {
      role: "Tel Aviv Team Lead",
      org: "Crypto Mondays",
      period: "Aug 2021 – Oct 2023",
      achievements: [
        { text: "Raised $10K+" },
        { text: "Ran 15+ events" },
        { text: "Built a 1,000+ member community" },
      ],
    },
  ],

  education: [
    {
      institution: "Columbia University (School of General Studies)",
      degree: "BA Computer Science",
      honors: "Cum Laude",
      year: 2018,
      notes: ["Blockchain Research Lab", "CORE", "TAMID Fellowship"],
    },
  ],

  military: [
    {
      unit: 'IDF Special Forces "Egoz" Unit',
      rank: "Combat Soldier / Staff Sergeant",
      period: "2010 – 2013",
      notes: [
        "Squad leader",
        "Planned and led joint training with US Army Rangers",
        'Awarded "Soldier of Honor" by unit commander',
      ],
    },
  ],

  capabilities: [
    { area: "Product strategy" },
    { area: "Ecosystem BD & partnerships" },
    { area: "On-chain infrastructure" },
    { area: "Team leadership" },
  ],

  // ── Fill these arrays later ──────────────────────────────────────────────

  articles: [
    // {
    //   title: "How Wormhole NTT cuts partner onboarding by 73%",
    //   platform: "Mirror",
    //   url: "https://example.com/article-slug",
    //   publishedAt: "2024-09-01",
    //   summary: "A walkthrough of the NTT playbook and the integrations it standardised.",
    // },
  ],

  projects: [
    // {
    //   name: "Wormhole Relayer",
    //   url: "https://github.com/wormhole-foundation/relayer",
    //   description: "Concept-to-launch cross-chain relayer reducing at-risk funds by 80%.",
    //   tags: ["Wormhole", "Cross-chain", "TypeScript"],
    // },
  ],

  hobbies: [
    { name: "Surfing" },
    { name: "Running" },
    { name: "Basketball" },
    { name: "Weightlifting" },
    { name: "Philosophy of mind" },
    { name: "Piano" },
  ],

  languages: [
    { name: "English", proficiency: "fluent" },
    { name: "Hebrew", proficiency: "fluent" },
    { name: "Spanish", proficiency: "intermediate" },
  ],
};
