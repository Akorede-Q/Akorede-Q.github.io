import { motion } from 'framer-motion'
import { fadeUp, viewportConfig } from '../../utils/animations'

/**
 * Reusable section header
 * Props: eyebrow, title, subtitle, align ('left' | 'center')
 */
export default function SectionHeader({ eyebrow, title, subtitle, align = 'center' }) {
  const alignClass = align === 'left' ? 'text-left items-start' : 'text-center items-center'

  return (
    <motion.div
      className={`flex flex-col gap-3 mb-14 ${alignClass}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: 0.12 } },
      }}
    >
      {eyebrow && (
        <motion.span
          variants={fadeUp}
          className="inline-flex items-center gap-2 text-accent font-body text-xs font-semibold uppercase tracking-widest"
        >
          <span className="w-6 h-px bg-accent opacity-60" />
          {eyebrow}
          <span className="w-6 h-px bg-accent opacity-60" />
        </motion.span>
      )}

      <motion.h2
        variants={fadeUp}
        className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-text-primary leading-tight"
        dangerouslySetInnerHTML={{ __html: title }}
      />

      {subtitle && (
        <motion.p
          variants={fadeUp}
          className="text-text-secondary font-body text-base sm:text-lg max-w-2xl leading-relaxed"
        >
          {subtitle}
        </motion.p>
      )}
    </motion.div>
  )
}
