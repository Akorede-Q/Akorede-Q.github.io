import { useState } from 'react'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { SiPython, SiGoogleanalytics } from 'react-icons/si'
import {
  MdBarChart, MdDashboard, MdTrendingUp, MdCampaign,
  MdScience, MdGroup, MdAutoStories, MdFlag,
  MdPresentToAll, MdCleaningServices, MdTableChart, MdCode,
} from 'react-icons/md'
import { TbSql, TbChartArrowsVertical } from 'react-icons/tb'
import SectionHeader from '../ui/SectionHeader'
import { fadeUp, staggerContainer, viewportConfig } from '../../utils/animations'

const iconMap = {
  SiPython, SiGoogleanalytics, MdBarChart, MdDashboard,
  MdTrendingUp, MdCampaign, MdScience, MdGroup, MdAutoStories,
  MdFlag, MdPresentToAll, MdCleaningServices, MdTableChart,
  MdCode, TbSql, TbChartArrowsVertical,
}

const skillCategories = [
  {
    id: 'core',
    label: 'Core Analytics',
    skills: [
      { name: 'Power BI',           level: 90, icon: 'MdDashboard',  color: '#F2C811' },
      { name: 'Microsoft Excel',    level: 95, icon: 'MdTableChart', color: '#21A366' },
      { name: 'SQL',                level: 85, icon: 'TbSql',        color: '#336791' },
      { name: 'Python',             level: 75, icon: 'SiPython',     color: '#3776AB' },
      { name: 'Data Visualization', level: 92, icon: 'MdBarChart',   color: '#00E5CC' },
      { name: 'Dashboarding',       level: 90, icon: 'MdCode',       color: '#7C3AED' },
    ],
  },
  {
    id: 'growth',
    label: 'Growth & Marketing',
    skills: [
      { name: 'Google Analytics',    level: 85, icon: 'SiGoogleanalytics',    color: '#E37400' },
      { name: 'Growth Analytics',    level: 88, icon: 'MdTrendingUp',          color: '#00E5CC' },
      { name: 'Marketing Analytics', level: 82, icon: 'MdCampaign',            color: '#F59E0B' },
      { name: 'A/B Testing',         level: 78, icon: 'MdScience',             color: '#EC4899' },
      { name: 'Funnel Analysis',     level: 85, icon: 'TbChartArrowsVertical', color: '#6EE7B7' },
      { name: 'Cohort Analysis',     level: 76, icon: 'MdGroup',               color: '#93C5FD' },
    ],
  },
  {
    id: 'strategy',
    label: 'Strategy & Reporting',
    skills: [
      { name: 'Data Storytelling',     level: 90, icon: 'MdAutoStories',     color: '#00E5CC' },
      { name: 'KPI Framework',         level: 85, icon: 'MdFlag',            color: '#F59E0B' },
      { name: 'Stakeholder Reporting', level: 92, icon: 'MdPresentToAll',    color: '#A78BFA' },
      { name: 'ETL & Data Cleaning',   level: 80, icon: 'MdCleaningServices',color: '#34D399' },
    ],
  },
]

function SkillBar({ skill }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.5 })
  const Icon = iconMap[skill.icon] || MdBarChart

  return (
    <motion.div ref={ref} className="flex items-center gap-3 group" variants={fadeUp}>
      <div
        className="flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center"
        style={{ background: `${skill.color}15`, border: `1px solid ${skill.color}25` }}
      >
        <Icon size={15} style={{ color: skill.color }} />
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-1.5">
          <span className="font-body text-sm text-text-primary font-medium">{skill.name}</span>
          <span className="font-body text-xs text-text-muted">{skill.level}%</span>
        </div>
        <div className="w-full h-1.5 rounded-full overflow-hidden" style={{ background: 'rgba(255,255,255,0.06)' }}>
          <motion.div
            className="h-full rounded-full relative"
            style={{ background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)` }}
            initial={{ width: 0 }}
            animate={{ width: inView ? `${skill.level}%` : 0 }}
            transition={{ duration: 1.1, ease: [0.25, 0.46, 0.45, 0.94], delay: 0.1 }}
          >
            <span
              className="absolute right-0 top-1/2 -translate-y-1/2 w-2.5 h-2.5 rounded-full -mr-1.5"
              style={{ background: skill.color, boxShadow: `0 0 8px ${skill.color}` }}
            />
          </motion.div>
        </div>
      </div>
    </motion.div>
  )
}

export default function Skills() {
  const [active, setActive] = useState('core')
  const currentCategory = skillCategories.find((c) => c.id === active)

  return (
    <section id="skills" className="section-padding relative" style={{ background: 'rgba(10,18,36,0.5)' }}>
      <div className="container-main">
        <SectionHeader
          eyebrow="Skills"
          title='Tools I use to <span class="gradient-text">get the job done</span>'
          subtitle="Built through real project work, structured mentorship, and continuous learning."
        />
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          {skillCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActive(cat.id)}
              className="px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200"
              style={{
                background: active === cat.id ? '#00E5CC' : 'rgba(255,255,255,0.04)',
                color: active === cat.id ? '#050D18' : '#8B9CB6',
                border: active === cat.id ? '1px solid #00E5CC' : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>
        <motion.div
          key={active}
          className="grid sm:grid-cols-2 gap-x-10 gap-y-5 max-w-3xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          {currentCategory?.skills.map((skill) => (
            <SkillBar key={skill.name} skill={skill} />
          ))}
        </motion.div>
        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          <p className="font-body text-text-muted text-xs uppercase tracking-widest mb-4">Also worked with</p>
          <div className="flex flex-wrap justify-center gap-2">
            {['Looker Studio','Google Sheets','Tableau Public','Airtable','Notion','Meta Business Suite','TikTok Analytics','LinkedIn Analytics'].map((tool) => (
              <span key={tool} className="tag-pill" style={{ fontSize: '0.72rem' }}>{tool}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
