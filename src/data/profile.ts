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

export interface RoleArticle {
  title: string;
  source: string;
  url: string;
  date: string;
  readingTime: string;
  summary: string;
  highlight: string;  // small accent stat chip, e.g. "45.2% return · 5.07 Sharpe"
  image?: string;     // local path, e.g. "/articles/iknow-day-trading.png"; omit for designed fallback
  tags: string[];
}

export interface Role {
  title: string;
  org: string;
  location: string;
  period: string;
  achievements: RoleAchievement[];
  links?: Link[];          // e.g. { label: "Launch post", url: "https://..." }
  articles?: RoleArticle[]; // featured writing / coverage cards
  articlesLabel?: string;   // subsection heading; defaults to "writing & coverage"
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
  area: string;           // e.g. "Product strategy"
  decorativeWidth: number; // 0–100, used as bar fill % (no score implied)
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

// ─── About ───────────────────────────────────────────────────────────────────

export interface AboutContent {
  /** 2–4 narrative paragraphs introducing who Daniel is */
  intro: string[];
  /** 1–2 sentences on current focus / exploration */
  currentlyExploring: string;
  /** 1 sentence on off-the-clock life */
  offTheClock: string;
  /** Short CTA heading + body line */
  cta: {
    heading: string;
    body: string;
  };
  /** Labels from profile.links to surface in the CTA (e.g. ["Email", "LinkedIn", "X"]) */
  ctaLinkLabels: string[];
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
  about: AboutContent;
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
      articles: [
        {
          title: "Everest Group enterprise managed blockchain analysis places IBM and Microsoft at the summit",
          source: "Blockchain Tech News",
          url: "https://blockchaintechnology-news.com/news/everest-group-enterprise-managed-blockchain-analysis-places-ibm-and-microsoft-at-the-summit/",
          date: "Jan 2020",
          readingTime: "4 min read",
          summary:
            "An Everest Group report on managed blockchain services positions IBM at the summit of enterprise blockchain-as-a-service providers, alongside Microsoft and ahead of AWS, Oracle, and Alibaba Cloud.",
          highlight: "Leader — Everest Group",
          tags: ["enterprise blockchain", "baas", "analyst report"],
        },
        {
          title: "IBM Cloud wins a 2019 Red Dot Design Award for the IBM Blockchain Platform",
          source: "IBM Design",
          url: "https://medium.com/design-ibm/ibm-cloud-wins-a-2019-red-dot-design-award-for-the-ibm-blockchain-platform-62ac3fd3db3e",
          date: "Aug 2019",
          readingTime: "5 min read",
          summary:
            "The IBM Blockchain Platform won a 2019 Red Dot Award in the interface design category for an experience that demystifies blockchain for enterprise developers and network operators new to the technology.",
          highlight: "2019 Red Dot Award",
          tags: ["product design", "ux", "blockchain platform"],
        },
      ],
      articlesLabel: "coverage",
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
        {
          text: "Simulated market forecast models that statistically evaluate daily investment scenarios using Quantopian",
        },
      ],
      links: [],
      articles: [
        {
          title: "Day Trading Strategy: An In-Depth Analysis of Realistic Back-Tests",
          source: "I Know First",
          url: "https://iknowfirst.com/day-trading-strategy",
          date: "Feb 2019",
          readingTime: "6 min read",
          summary:
            "Backtesting an I Know First trading strategy in Quantopian with realistic slippage and commissions, then layering an intraday mean-reversion rule to push returns from 30.5% to 45.2%.",
          highlight: "45.2% return · 5.07 Sharpe",
          image: "/articles/iknow-day-trading.png",
          tags: ["algorithmic trading", "backtesting", "quantopian"],
        },
      ],
      articlesLabel: "writing",
    },
    {
      title: "Investment Intern",
      org: "OurCrowd (VC)",
      location: "New York",
      period: "Nov 2014 – Apr 2015",
      achievements: [
        {
          text: "Conducted due diligence on promising fintech-focused, early-stage teams based in Israel and NYC",
        },
        {
          text: "Developed investor ranking reports and new rolodex for US investor expansion as first intern in the NYC office",
        },
        {
          text: "Prepared quarterly reports for portfolio companies providing analytics and suggested market opportunities",
        },
      ],
      links: [],
      articles: [
        {
          title: "Equity-crowdfunding platform OurCrowd raises $25M",
          source: "VatorNews",
          url: "https://vator.tv/2014-04-28-equity-crowdfunding-platform-ourcrowd-raises-25m/",
          date: "Apr 2014",
          readingTime: "3 min read",
          summary:
            "Coverage of OurCrowd's $25M Series B round to expand its equity-crowdfunding platform globally, having already facilitated $43M across 36 portfolio companies in 26 countries.",
          highlight: "$25M Series B",
          image: "/articles/ourcrowd-raise.jpg",
          tags: ["venture capital", "equity crowdfunding", "fintech"],
        },
      ],
      articlesLabel: "coverage",
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
    { area: "Product strategy",           decorativeWidth: 95 },
    { area: "Ecosystem BD & partnerships", decorativeWidth: 90 },
    { area: "On-chain infrastructure",    decorativeWidth: 88 },
    { area: "Team leadership",            decorativeWidth: 85 },
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

  about: {
    intro: [
      "I'm a product leader who has spent the last seven years building at the intersection of crypto infrastructure and DeFi. I've shipped relayers, vault protocols, lending markets, and developer tooling — usually as the first PM or head of product, working from zero to launched.",
      "Before crypto, I was a quantitative analyst and an investment analyst in VC. Before that, I served as a Staff Sergeant in the IDF Special Forces. I studied Computer Science at Columbia, graduating Cum Laude in 2018.",
      "I care about building things that actually get used — products that reduce friction for developers and unlock real economic activity on-chain.",
    ],
    currentlyExploring:
      "Right now I'm thinking a lot about how AI changes the surface area of what one person can build, and where that intersects with crypto rails.",
    offTheClock:
      "When I'm not at a screen I'm usually in the water surfing, on a run, or at the piano.",
    cta: {
      heading: "Let's talk",
      body:    "I'm always happy to connect about product, DeFi infrastructure, or anything at the crypto × AI edge.",
    },
    ctaLinkLabels: ["Email", "LinkedIn", "X"],
  },
};
