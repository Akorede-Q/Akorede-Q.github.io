import { motion } from 'framer-motion'
import { scaleIn, viewportConfig } from '../../utils/animations'

/**
 * Premium glassmorphism card with animated glow border
 * Props: children, className, glow (color string), delay
 */
export default function GlowCard({ children, className = '', glow = '#00E5CC', delay = 0, onClick }) {
  return (
    <motion.div
      className={`relative rounded-2xl overflow-hidden ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={viewportConfig}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.25, 0.46, 0.45, 0.94], delay },
        },
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      onClick={onClick}
      style={{ cursor: onClick ? 'pointer' : 'default' }}
    >
      {/* Glass background */}
      <div
        className="absolute inset-0 rounded-2xl"
        style={{
          background: 'rgba(255,255,255,0.025)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.06)',
        }}
      />

      {/* Glow top-left corner accent */}
      <div
        className="absolute top-0 left-0 w-24 h-24 rounded-full opacity-20 blur-2xl pointer-events-none"
        style={{ background: glow, transform: 'translate(-30%, -30%)' }}
      />

      {/* Content */}
      <div className="relative z-10">{children}</div>

      {/* Hover glow border */}
      <motion.div
        className="absolute inset-0 rounded-2xl pointer-events-none opacity-0"
        style={{ border: `1px solid ${glow}30` }}
        whileHover={{ opacity: 1 }}
        transition={{ duration: 0.2 }}
      />
    </motion.div>
  )
}
