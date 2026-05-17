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
    title: 'Cohort Retention Analysis',
    category: 'Analytics',
    tags: ['Power BI', 'SQL Server', 'Excel', 'GitHub'],
    description:
      'Most businesses focus on getting new customers. The real question is how many come back. This project digs into 541,000+ transactions to find exactly where customers are dropping off, which cohorts retain the longest, and what that means for revenue.',
    problem:
      'An e-commerce business had years of transaction data but no visibility into how well it was retaining customers over time. Revenue decisions were being made without understanding whether customers were coming back — or quietly disappearing after their first purchase.',
    solution:
      'Cleaned and transformed 12 months of raw transactional data in SQL Server, assigning customers to cohorts based on their first purchase month. Built a retention matrix tracking customer behaviour across 37 cohorts, then visualised the findings in a three-page Power BI report featuring a retention heatmap, a Month 0→1 drop-off trend line, and a cohort comparison bar chart. Analysis revealed a steep early drop-off pattern, a loyalty threshold among retained customers, and stronger retention in earlier cohorts — reframing the business problem from acquisition to retention.',
    impact:
      'Identified that 80%+ of customers never return after their first purchase, reframing the business problem from acquisition to retention and revealing exactly where revenue was being lost.',
    metrics: [
      { label: 'Transaction Analyzed', value: '541k' },
      { label: 'Month 1 Drop Off Rate', value: '80%' },
      { label: 'Retention Rate', value: '65.23%' },
    ],
    tools: ['Power BI', 'Microsoft Excel', 'SQL Server'],
    image: './cohortanalysis.png',
    github: 'https://github.com/Akorede-Q/Cohort-Retention-Analysis',
    live: null,
    featured: true,
  },
  {
  id: 'proj-02',
  title: 'Customer Lifetime Value (CLV) Analysis',
  category: 'Analytics',
  tags: ['SQL', 'Excel', 'CLV Analysis', 'Retention'],
  description:
    'Analysed 99,441 delivered orders from a Brazilian e-commerce dataset to understand customer purchase behaviour and identify opportunities to improve retention and long-term revenue.',
  problem:
    'The marketing team needed to understand how to increase customer lifetime value — but had no visibility into whether the revenue problem was driven by low retention, low order value, or insufficient traffic.',
  solution:
    'Used SQL Server to analyse 93,358 unique customers across 12 months of delivered orders. Built a full retention and CLV model covering repeat rate, time to second purchase, revenue contribution by segment, and AOV — then segmented customers into high, medium, and low value tiers.',
  impact:
    'Discovered that 97% of customers purchased only once, and repeat customers contributed just 5.51% of revenue — proving the problem was retention, not traffic or order value. Modelled that converting just 5% of one-time buyers to repeat purchasers would generate R$620,000+ in additional revenue with zero acquisition spend.',
  metrics: [
    { label: 'Orders Analysed', value: '99K+' },
    { label: 'Additional Revenue Potential', value: 'R$620K+' },
    { label: 'One-Time Customer Rate', value: '97%' },
  ],
  tools: ['SQL Server', 'Excel', 'GitHub'],
  image: './customer-lifetime-value-analysis.jpg',
  github: 'https://github.com/Akorede-Q/CLV-Analysis',
  live: null,
  featured: true,
},,
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
