import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { projects, getCategories } from '../../data/projects'
import ProjectCard from '../ui/ProjectCard'
import SectionHeader from '../ui/SectionHeader'
import { viewportConfig } from '../../utils/animations'

export default function Projects() {
  const categories = getCategories()
  const [activeFilter, setActiveFilter] = useState('All')

  const filtered = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="section-padding relative">
      {/* BG accent */}
      <div
        className="absolute right-0 bottom-0 w-96 h-96 rounded-full pointer-events-none opacity-[0.03] blur-3xl"
        style={{ background: '#00E5CC', transform: 'translate(30%, 30%)' }}
      />

      <div className="container-main">
        <SectionHeader
          eyebrow="Projects"
          title='Work that <span class="gradient-text">speaks for itself</span>'
          subtitle="Real problems. Real data. Outcomes that moved the needle."
        />

        {/* Filter tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-2 mb-10"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className="px-5 py-2 rounded-full font-body text-sm font-medium transition-all duration-200"
              style={{
                background: activeFilter === cat ? '#00E5CC' : 'rgba(255,255,255,0.04)',
                color: activeFilter === cat ? '#050D18' : '#8B9CB6',
                border: activeFilter === cat ? '1px solid #00E5CC' : '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {cat}
            </button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35 }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* How to add more */}
        <motion.div
          className="mt-12 p-5 rounded-2xl text-center"
          style={{
            background: 'rgba(0,229,204,0.04)',
            border: '1px dashed rgba(0,229,204,0.18)',
          }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportConfig}
        >
          <p className="font-body text-text-muted text-sm">
            More projects coming soon —{' '}
            <a
              href="https://github.com/your-handle"
              target="_blank"
              rel="noreferrer"
              className="text-accent hover:underline"
            >
              follow along on GitHub
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
