import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX, FiChevronRight } from 'react-icons/fi'
import { MdBarChart } from 'react-icons/md'

export default function ProjectCard({ project }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <>
      {/* ─── Card ─────────────────────────────────────────────────── */}
      <motion.article
        className="relative rounded-2xl overflow-hidden cursor-pointer group"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94] }}
        whileHover={{ y: -5 }}
        onClick={() => setExpanded(true)}
        style={{
          background: 'rgba(255,255,255,0.025)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      >
        {/* Color bar top */}
        <div
          className="h-0.5 w-full"
          style={{ background: 'linear-gradient(90deg, #00E5CC, #7C3AED)' }}
        />

        {/* Thumbnail / placeholder */}
        <div
          className="w-full h-44 flex items-center justify-center relative overflow-hidden"
          style={{ background: 'rgba(0,229,204,0.04)' }}
        >
          {project.image ? (
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
          ) : (
            <div className="flex flex-col items-center gap-2 opacity-30 group-hover:opacity-50 transition-opacity">
              <MdBarChart size={48} color="#00E5CC" />
              <span className="text-xs text-text-muted font-body tracking-wide uppercase">
                {project.category}
              </span>
            </div>
          )}

          {/* Category badge */}
          <span
            className="absolute top-3 right-3 tag-pill text-xs"
            style={{ fontSize: '0.68rem' }}
          >
            {project.category}
          </span>
        </div>

        {/* Content */}
        <div className="p-5">
          <h3 className="font-display font-semibold text-base text-text-primary leading-snug mb-2 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-text-secondary font-body text-sm leading-relaxed mb-4 line-clamp-2">
            {project.description}
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {project.tags.slice(0, 4).map((tag) => (
              <span key={tag} className="tag-pill" style={{ fontSize: '0.65rem' }}>
                {tag}
              </span>
            ))}
            {project.tags.length > 4 && (
              <span className="tag-pill" style={{ fontSize: '0.65rem' }}>
                +{project.tags.length - 4}
              </span>
            )}
          </div>

          {/* Footer row */}
          <div className="flex items-center justify-between pt-2 border-t border-white/5">
            <div className="flex gap-3">
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  <FiGithub size={16} />
                </a>
              )}
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="text-text-muted hover:text-accent transition-colors"
                >
                  <FiExternalLink size={16} />
                </a>
              )}
            </div>
            <span className="flex items-center gap-1 text-accent text-xs font-semibold font-body group-hover:gap-2 transition-all">
              View case study <FiChevronRight size={13} />
            </span>
          </div>
        </div>
      </motion.article>

      {/* ─── Modal ────────────────────────────────────────────────── */}
      <AnimatePresence>
        {expanded && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setExpanded(false)}
          >
            {/* Backdrop */}
            <div className="absolute inset-0 bg-black/75 backdrop-blur-sm" />

            {/* Modal panel */}
            <motion.div
              className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl"
              style={{
                background: '#0A1224',
                border: '1px solid rgba(0,229,204,0.15)',
              }}
              initial={{ opacity: 0, scale: 0.93, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.93, y: 16 }}
              transition={{ duration: 0.3 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Top accent line */}
              <div
                className="h-0.5 w-full rounded-t-2xl"
                style={{ background: 'linear-gradient(90deg, #00E5CC, #7C3AED)' }}
              />

              <div className="p-6 sm:p-8">
                {/* Header */}
                <div className="flex items-start justify-between gap-4 mb-6">
                  <div>
                    <span className="tag-pill mb-3 inline-flex">{project.category}</span>
                    <h2 className="font-display font-bold text-xl sm:text-2xl text-text-primary leading-tight">
                      {project.title}
                    </h2>
                  </div>
                  <button
                    onClick={() => setExpanded(false)}
                    className="flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white/5 transition-colors"
                  >
                    <FiX size={18} />
                  </button>
                </div>

                {/* Metrics */}
                {project.metrics?.length > 0 && (
                  <div className="grid grid-cols-3 gap-3 mb-6">
                    {project.metrics.map((m) => (
                      <div
                        key={m.label}
                        className="rounded-xl p-3 text-center"
                        style={{ background: 'rgba(0,229,204,0.05)', border: '1px solid rgba(0,229,204,0.12)' }}
                      >
                        <div className="font-display font-bold text-xl text-accent">{m.value}</div>
                        <div className="font-body text-xs text-text-secondary mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Sections */}
                {[
                  { label: 'The Problem', content: project.problem },
                  { label: 'My Solution', content: project.solution },
                  { label: 'Impact & Results', content: project.impact },
                ].map(({ label, content }) => (
                  <div key={label} className="mb-5">
                    <h4 className="font-display font-semibold text-sm text-accent uppercase tracking-wider mb-2">
                      {label}
                    </h4>
                    <p className="font-body text-sm text-text-secondary leading-relaxed">{content}</p>
                  </div>
                ))}

                {/* Tools */}
                <div className="mb-6">
                  <h4 className="font-display font-semibold text-sm text-accent uppercase tracking-wider mb-2">
                    Tools Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((t) => (
                      <span key={t} className="tag-pill">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Links */}
                {(project.github || project.live) && (
                  <div className="flex gap-3">
                    {project.github && (
                      <a href={project.github} target="_blank" rel="noreferrer" className="btn-outline">
                        <FiGithub size={15} /> GitHub
                      </a>
                    )}
                    {project.live && (
                      <a href={project.live} target="_blank" rel="noreferrer" className="btn-primary">
                        <FiExternalLink size={15} /> Live Demo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
