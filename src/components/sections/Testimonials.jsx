import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { MdFormatQuote } from 'react-icons/md'
import { testimonials } from '../../data/testimonials'
import SectionHeader from '../ui/SectionHeader'
import { fadeUp, viewportConfig } from '../../utils/animations'

export default function Testimonials() {
  const [active, setActive] = useState(0)

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActive((i) => (i + 1) % testimonials.length)

  const current = testimonials[active]

  return (
    <section
      id="testimonials"
      className="section-padding relative overflow-hidden"
      style={{ background: 'rgba(10,18,36,0.5)' }}
    >
      {/* BG blobs */}
      <div
        className="absolute left-1/4 top-0 w-72 h-72 rounded-full pointer-events-none opacity-5 blur-3xl"
        style={{ background: '#00E5CC' }}
      />
      <div
        className="absolute right-1/4 bottom-0 w-72 h-72 rounded-full pointer-events-none opacity-5 blur-3xl"
        style={{ background: '#7C3AED' }}
      />

      <div className="container-main">
        <SectionHeader
          eyebrow="Testimonials"
          title='What clients <span class="gradient-text">say about the work</span>'
          subtitle="Results earn trust. Trust earns words like these."
        />

        {/* ── Carousel ────────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="relative rounded-2xl p-7 sm:p-10"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              {/* Quote accent */}
              <div
                className="absolute top-6 right-6 opacity-15"
                style={{ color: current.accent }}
              >
                <MdFormatQuote size={56} />
              </div>

              {/* Top accent line */}
              <div
                className="absolute top-0 left-8 right-8 h-0.5 rounded-full"
                style={{ background: `linear-gradient(90deg, transparent, ${current.accent}, transparent)` }}
              />

              {/* Quote */}
              <blockquote className="font-body text-text-primary text-base sm:text-lg leading-relaxed mb-8 relative z-10">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center font-display font-bold text-base flex-shrink-0"
                  style={{
                    background: `${current.accent}20`,
                    border: `2px solid ${current.accent}40`,
                    color: current.accent,
                  }}
                >
                  {current.initials}
                </div>
                <div>
                  <p className="font-display font-semibold text-text-primary text-sm">{current.name}</p>
                  <p className="font-body text-text-muted text-xs">
                    {current.role} · {current.company}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-6">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              aria-label="Previous"
            >
              <FiChevronLeft size={18} />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="rounded-full transition-all duration-300"
                  style={{
                    width: i === active ? 24 : 8,
                    height: 8,
                    background: i === active ? '#00E5CC' : 'rgba(255,255,255,0.15)',
                  }}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-text-secondary hover:text-text-primary transition-colors"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)' }}
              aria-label="Next"
            >
              <FiChevronRight size={18} />
            </button>
          </div>
        </div>

        {/* ── Social proof strip ──────────────────────────────────── */}
        <motion.div
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
        >
          {[
            { value: '100%', label: 'On-time delivery' },
            { value: '2+',   label: 'Years experience' },
            { value: '10+',  label: 'Happy clients' },
            { value: '5★',   label: 'Client satisfaction' },
          ].map((s) => (
            <motion.div
              key={s.label}
              variants={fadeUp}
              className="rounded-xl p-4 text-center"
              style={{
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              <div className="font-display font-bold text-xl text-accent mb-0.5">{s.value}</div>
              <div className="font-body text-text-muted text-xs">{s.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
