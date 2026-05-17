/**
 * ─── HOW TO ADD A NEW PROJECT ───────────────────────────────────────────────
 *
 * Copy one of the objects below, paste it at the end of the array,
 * update the fields, and save. Your new project card appears automatically.
 *
 * Fields reference:
 *   id          — unique string ID (e.g. "proj-04")
 *   title       — project title
 *   category    — "Analytics" | "Growth" | "Dashboard" | "Strategy"
 *   tags        — array of tool/skill strings (shown as pills on the card)
 *   description — short summary for the card preview (1-2 sentences)
 *   problem     — the business problem you solved
 *   solution    — what you actually built / how you approached it
 *   impact      — key results and outcomes
 *   metrics     — array of { label, value } objects for highlight stats
 *   tools       — array of tool names (more detailed than tags)
 *   image       — path to screenshot (put it in /public/projects/) or null
 *   github      — GitHub URL or null
 *   live        — live demo URL or null
 *   featured    — boolean, show in "featured" section
 *
 * ─────────────────────────────────────────────────────────────────────────── */

export const projects = [
  {
    id: 'proj-01',
    title: 'OurHairitage Academy — Multi-Platform Social Media Analytics',
    category: 'Analytics',
    tags: ['Power BI', 'Excel', 'TikTok Analytics', 'Meta Insights', 'LinkedIn Analytics'],
    description:
      'Built a comprehensive cross-platform social media audit spanning TikTok, Instagram, Facebook, LinkedIn, and Twitter/X — surfacing exactly where audience attention lived and where content spend was being wasted.',
    problem:
      'OurHairitage Academy had an active social presence across 5 platforms but no unified view of what was working. Content was created by feel, not data, making it impossible to allocate effort efficiently.',
    solution:
      'Extracted native analytics from each platform, standardised the metrics into a single reporting model in Excel, then built platform-specific dashboards in Power BI with drill-through capability by content type, date range, and format.',
    impact:
      'Delivered a clear narrative around which platforms drove real engagement vs vanity metrics — giving the brand team a fact-based roadmap to reallocate content effort and budget.',
    metrics: [
      { label: 'Platforms Audited', value: '5' },
      { label: 'Weeks of Data Analysed', value: '12+' },
      { label: 'Reports Delivered', value: '5' },
    ],
    tools: ['Power BI', 'Microsoft Excel', 'TikTok Analytics', 'Meta Business Suite', 'LinkedIn Analytics', 'Twitter/X Analytics'],
    image: null,
    github: null,
    live: null,
    featured: true,
  },
  {
    id: 'proj-02',
    title: 'E-commerce Customer Segmentation & Retention Dashboard',
    category: 'Growth',
    tags: ['Python', 'Power BI', 'SQL', 'RFM Analysis'],
    description:
      'Segmented 15,000+ customers using RFM analysis in Python, then built an interactive Power BI retention dashboard that helped the team identify at-risk segments before they churned.',
    problem:
      'An e-commerce brand was struggling with rising churn and had no way to distinguish loyal customers from one-time buyers hiding in the aggregate sales numbers.',
    solution:
      'Used SQL to pull 12 months of order history, ran an RFM (Recency, Frequency, Monetary) segmentation model in Python (pandas), and piped the scored output into a Power BI dashboard with dynamic segment filters and automated monthly refresh.',
    impact:
      'The "at-risk" segment (high historical value, declining recency) was identified as 18% of revenue base. A targeted win-back campaign resulted in a measurable lift in repeat purchase rate.',
    metrics: [
      { label: 'Customers Segmented', value: '15K+' },
      { label: 'Revenue at Risk Identified', value: '18%' },
      { label: 'Repeat Purchase Lift', value: '+23%' },
    ],
    tools: ['Python (pandas, seaborn)', 'SQL', 'Power BI', 'Excel'],
    image: null,
    github: null,
    live: null,
    featured: true,
  },
  {
    id: 'proj-03',
    title: 'Marketing Funnel Performance Analysis',
    category: 'Growth',
    tags: ['Google Analytics', 'Power BI', 'Excel', 'A/B Testing'],
    description:
      'Audited a leaking marketing funnel across paid and organic channels, identified the exact drop-off points using Google Analytics data, and built a funnel dashboard that became the team\'s single source of truth.',
    problem:
      'A SaaS company was spending heavily on paid acquisition but the conversion rate from traffic to trial was under 2%. Nobody knew where users were dropping off — or why.',
    solution:
      'Set up enhanced GA4 event tracking, exported 90 days of session and conversion data, built a funnel visualisation in Power BI showing drop-off rates per stage per channel, and documented an A/B testing framework for landing page experiments.',
    impact:
      'Pinpointed a 68% drop-off at the pricing page. After a layout change informed by the data, trial signups increased significantly within 30 days.',
    metrics: [
      { label: 'Funnel Drop-off Identified', value: '68%' },
      { label: 'Trial Signups Increased', value: '+34%' },
      { label: 'Pages Analysed', value: '12' },
    ],
    tools: ['Google Analytics 4', 'Power BI', 'Excel', 'GA4 Export API'],
    image: null,
    github: null,
    live: null,
    featured: true,
  },
]

// ── Helper: get unique categories ─────────────────────────────────────────────
export const getCategories = () => {
  const cats = ['All', ...new Set(projects.map((p) => p.category))]
  return cats
}

// ── Helper: filter by category ────────────────────────────────────────────────
export const filterProjects = (category) => {
  if (category === 'All') return projects
  return projects.filter((p) => p.category === category)
}
