// Skills data — update proficiency (0–100) and category as needed

export const skillCategories = [
  {
    id: 'core',
    label: 'Core Analytics',
    skills: [
      { name: 'Power BI', level: 90, icon: 'SiPowerbi', color: '#F2C811' },
      { name: 'Microsoft Excel', level: 95, icon: 'SiMicrosoftexcel', color: '#217346' },
      { name: 'SQL', level: 85, icon: 'TbSql', color: '#336791' },
      { name: 'Python', level: 75, icon: 'SiPython', color: '#3776AB' },
      { name: 'Data Visualization', level: 92, icon: 'MdBarChart', color: '#00E5CC' },
      { name: 'Dashboarding', level: 90, icon: 'MdDashboard', color: '#7C3AED' },
    ],
  },
  {
    id: 'growth',
    label: 'Growth & Marketing',
    skills: [
      { name: 'Google Analytics', level: 85, icon: 'SiGoogleanalytics', color: '#E37400' },
      { name: 'Growth Analytics', level: 88, icon: 'MdTrendingUp', color: '#00E5CC' },
      { name: 'Marketing Analytics', level: 82, icon: 'MdCampaign', color: '#F59E0B' },
      { name: 'A/B Testing', level: 78, icon: 'MdScience', color: '#EC4899' },
      { name: 'Funnel Analysis', level: 85, icon: 'TbChartArrowsVertical', color: '#6EE7B7' },
      { name: 'Cohort Analysis', level: 76, icon: 'MdGroup', color: '#93C5FD' },
    ],
  },
  {
    id: 'strategy',
    label: 'Strategy & Reporting',
    skills: [
      { name: 'Storytelling with Data', level: 90, icon: 'MdAutoStories', color: '#00E5CC' },
      { name: 'KPI Framework Design', level: 85, icon: 'MdFlag', color: '#F59E0B' },
      { name: 'Stakeholder Reporting', level: 92, icon: 'MdPresentToAll', color: '#A78BFA' },
      { name: 'ETL & Data Cleaning', level: 80, icon: 'MdCleaningServices', color: '#34D399' },
    ],
  },
]

// Flat list for simple displays
export const allSkills = skillCategories.flatMap((cat) => cat.skills)
