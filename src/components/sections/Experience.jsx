import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { experiences } from '../../data/experience'
import SectionHeader from '../ui/SectionHeader'
import { fadeLeft, fadeRight, viewportConfig } from '../../utils/animations'
import { FiBriefcase, FiCheck } from 'react-icons/fi'

function TimelineItem({ exp, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.2 })
  const isLeft = index % 2 === 0

  return (
    <div ref={ref} className="relative grid lg:grid-cols-2 gap-0 lg:gap-8 mb-12 last:mb-0">

      {/* ── Desktop: left/right alternating ──────────────────────── */}
      <motion.div
        className={`
          lg:col-span-1
          ${isLeft ? 'lg:col-start-1 lg:text-right lg:pr-8' : 'lg:col-start-2 lg:text-left lg:pl-8 lg:row-start-1'}
        `}
        initial="hidden"
        animate={inView ? 'visible' : 'hidden'}
        variants={isLeft ? fadeLeft : fadeRight}
      >
        <div
          className="inline-block rounded-2xl p-5 sm:p-6 text-left"
          style={{
            background: 'rgba(255,255,255,0.025)',
            border: '1px solid rgba(255,255,255,0.06)',
          }}
        >
          {/* Header */}
          <div className="flex items-start gap-3 mb-3">
            <div
              className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center mt-0.5"
              style={{ background: 'rgba(0,229,204,0.1)', border: '1px solid rgba(0,229,204,0.2)' }}
            >
              <FiBriefcase size={15} color="#00E5CC" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-text-primary leading-tight">{exp.role}</h3>
              <p className="font-body text-accent text-sm font-medium">{exp.company}</p>
            </div>
          </div>

          {/* Meta badges */}
          <div className="flex flex-wrap gap-2 mb-3">
            <span className="tag-pill" style={{ fontSize: '0.65rem' }}>{exp.type}</span>
            <span className="tag-pill" style={{ fontSize: '0.65rem', borderColor: 'rgba(124,58,237,0.3)', color: '#A78BFA', background: 'rgba(124,58,237,0.08)' }}>
              {exp.period}
            </span>
            <span className="tag-pill" style={{ fontSize: '0.65rem', borderColor: 'rgba(255,255,255,0.1)', color: '#8B9CB6', background: 'rgba(255,255,255,0.04)' }}>
              📍 {exp.location}
            </span>
          </div>

          {/* Description */}
          <p className="font-body text-text-muted text-sm leading-relaxed mb-4">{exp.description}</p>

          {/* Achievements */}
          <ul className="space-y-2">
            {exp.achievements.map((ach) => (
              <li key={ach} className="flex items-start gap-2">
                <FiCheck size={13} className="flex-shrink-0 text-accent mt-0.5" />
                <span className="font-body text-text-secondary text-xs leading-relaxed">{ach}</span>
              </li>
            ))}
          </ul>

          {/* Tools */}
          <div className="flex flex-wrap gap-1.5 mt-4">
            {exp.tools.map((t) => (
              <span key={t} className="tag-pill" style={{ fontSize: '0.62rem' }}>{t}</span>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Desktop: center dot ───────────────────────────────────── */}
      <motion.div
        className="hidden lg:flex absolute left-1/2 -translate-x-1/2 top-6 items-center justify-center"
        initial={{ scale: 0, opacity: 0 }}
        animate={inView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.4, delay: 0.2 }}
      >
        <div
          className="w-4 h-4 rounded-full z-10"
          style={{
            background: '#00E5CC',
            boxShadow: '0 0 16px rgba(0,229,204,0.6)',
          }}
        />
      </motion.div>
    </div>
  )
}

export default function Experience() {
  return (
    <section
      id="experience"
      className="section-padding relative"
      style={{ background: 'rgba(10,18,36,0.5)' }}
    >
      <div
        className="absolute left-1/2 top-0 w-px h-full pointer-events-none opacity-20 hidden lg:block"
        style={{ background: 'linear-gradient(to bottom, transparent, #00E5CC 20%, #00E5CC 80%, transparent)' }}
      />

      <div className="container-main">
        <SectionHeader
          eyebrow="Experience"
          title='The journey that <span class="gradient-text">built the analyst</span>'
          subtitle="Every project, every mentor, every late night with a dataset made the skills real."
        />

        {/* Mobile: simple stack. Desktop: alternating timeline */}
        <div className="relative">
          {experiences.map((exp, i) => (
            <TimelineItem key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
