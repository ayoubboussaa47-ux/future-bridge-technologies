export interface Service {
  id: string;
  num: string;
  name: string;
  short: string;
  what: string;
  message?: string;
  build: string[];
  problems: string[];
  connects: string;
  get: string;
}

export const SERVICES: Service[] = [
  {
    id: "ai-systems",
    num: "01",
    name: "AI Systems",
    short: "Intelligent systems and AI agents built around real business operations.",
    what: "Future Bridge designs and builds intelligent systems that use artificial intelligence to support real business operations. AI is integrated where it is genuinely useful, operational, and connected to the way the business actually works — never as a gimmick.",
    message: "We build AI systems around the way your business actually works.",
    build: [
      "Custom AI systems and AI-powered business tools",
      "AI agents and intelligent assistants",
      "AI workflows and AI-driven decision support",
      "Knowledge-based AI systems connected to business data",
      "Natural-language interfaces and internal AI tools",
    ],
    problems: [
      "Repetitive information processing",
      "Internal knowledge access",
      "Document and information workflows",
      "Business analysis and decision support",
      "Customer-facing intelligent experiences",
    ],
    connects:
      "AI Systems often pair with Websites & Platforms, Automation, and Business Intelligence inside one connected digital system.",
    get:
      "A working AI capability built around your actual data and workflows — architecture depends on requirements, never a generic bolt-on.",
  },
  {
    id: "ai-websites-platforms",
    num: "02",
    name: "AI-Powered Websites & Digital Platforms",
    short: "Modern websites, web applications and intelligent digital products — built as platforms, not templates.",
    what: "Future Bridge designs and builds modern websites, web applications, digital platforms, customer and internal portals, and intelligent dashboards. These are built as digital products, not off-the-shelf templates. AI is integrated when it provides meaningful value to the product or the business.",
    build: [
      "Business websites and web applications",
      "Customer portals and internal platforms",
      "Intelligent dashboards and administration interfaces",
      "AI-powered digital products and services",
      "Personalized experiences and intelligent search",
    ],
    problems: [
      "Establishing or upgrading a digital presence",
      "Building customer-facing digital experiences",
      "Providing internal operational platforms",
      "Building products that collect, process, and present business data",
      "Adding intelligent capabilities where they add real value",
    ],
    connects:
      "A website or platform often includes automation, business intelligence, AI, and integrations with external systems.",
    get:
      "A digital product built around your business, not a template — AI included only where it provides meaningful value.",
  },
  {
    id: "ai-automation",
    num: "03",
    name: "AI Automation",
    short: "Automating repetitive and intelligent workflows with software, integrations and AI.",
    what: "Future Bridge automates repetitive and intelligent workflows using software, integrations, and AI. The objective is less repetitive work, more operational consistency, faster information flow, and more connected systems — with realistic expectations around what automation should do.",
    build: [
      "Workflow and process automation",
      "Document and data processing workflows",
      "Lead, customer, and internal operations workflows",
      "Automated reporting, notifications, and information routing",
      "System-to-system and AI-assisted decision workflows",
    ],
    problems: [
      "Repetitive manual work inside operations",
      "Inconsistent processes across teams",
      "Slow information flow between systems",
      "Disconnected tools that require manual coordination",
    ],
    connects:
      "Automation runs on top of System Integration and often feeds data into Business Intelligence and AI Systems.",
    get:
      "Less repetitive work, more consistent operations, and faster information flow — not a promise of full automation.",
  },
  {
    id: "business-intelligence",
    num: "04",
    name: "Business Intelligence",
    short: "Organizing, connecting, analyzing and presenting business data as usable intelligence.",
    what: "Modern businesses generate large amounts of information. Future Bridge organizes, connects, analyzes, and presents that information in useful ways — turning operational data into visibility, reporting, and decision support.",
    build: [
      "Business and operational dashboards",
      "Reporting systems and KPI monitoring",
      "Data visualization and business analytics",
      "Data aggregation and intelligent data views",
      "Decision-support interfaces",
    ],
    problems: [
      "Data scattered across disconnected systems",
      "Unclear operational performance",
      "Slow or manual reporting",
      "Decisions made without proper visibility",
    ],
    connects:
      "Business Intelligence depends on System Integration and Automation to bring data together before it is analyzed.",
    get:
      "A clearer view of how the business is actually performing, built from the data you already have.",
  },
  {
    id: "system-integration",
    num: "05",
    name: "System Integration",
    short: "Connecting existing tools, systems, databases and services so they work as one.",
    what: "Modern businesses often run many separate systems. Future Bridge connects them through APIs and integration architecture — creating connected technology instead of isolated tools.",
    message: "Your systems should work together.",
    build: [
      "API development and integration",
      "Connecting business software, databases, and internal systems",
      "Integrating web platforms and external services",
      "Integrating AI systems and automation workflows",
      "Payment, communication, and service integrations",
    ],
    problems: [
      "Systems that do not share information",
      "Duplicated manual data entry",
      "Information trapped inside a single tool",
      "No unified view of operations",
    ],
    connects:
      "Integration is the backbone that lets AI, Automation, and Business Intelligence operate across the full system.",
    get:
      "Systems that work together instead of operating as isolated tools.",
  },
  {
    id: "custom-technology",
    num: "06",
    name: "Custom Technology",
    short: "Purpose-built digital systems designed around specific business requirements.",
    what: "Not every business problem can be solved with an existing software product. When nothing off-the-shelf fits, Future Bridge designs and builds custom technology around the specific requirement.",
    message: "Technology should adapt to the business — not the other way around.",
    build: [
      "Custom web platforms and business systems",
      "Internal operational tools and portals",
      "Custom software and digital products",
      "Intelligent dashboards and AI-powered systems",
      "Specialized technology infrastructure",
    ],
    problems: [
      "Existing products don't fit the process",
      "Unique or specialized operational requirements",
      "Legacy systems that limit the business",
      "A need for technology that scales with the company",
    ],
    connects:
      "Custom Technology follows a process of understand, architect, build, integrate, and evolve — combining any of the other capabilities.",
    get:
      "Technology designed around the business — not the business adapting to a predefined template.",
  },
];