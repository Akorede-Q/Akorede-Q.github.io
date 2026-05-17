import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown, FiTwitter } from 'react-icons/fi'
import AnimatedCounter from '../ui/AnimatedCounter'

// ── Typewriter hook ───────────────────────────────────────────────────────────
function useTypewriter(words) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = words[index % words.length]
    let timeout

    if (!deleting) {
      if (text.length < word.length) {
        timeout = setTimeout(() => setText(word.slice(0, text.length + 1)), 90)
      } else {
        timeout = setTimeout(() => setDeleting(true), 2200)
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(word.slice(0, text.length - 1)), 45)
      } else {
        setDeleting(false)
        setIndex((i) => (i + 1) % words.length)
      }
    }
    return () => clearTimeout(timeout)
  }, [text, deleting, index, words])

  return text
}

// ── Floating orb ─────────────────────────────────────────────────────────────
function Orb({ x, y, size, color, delay = 0 }) {
  return (
    <motion.div
      className="absolute rounded-full pointer-events-none"
      style={{
        left: x,
        top: y,
        width: size,
        height: size,
        background: color,
        filter: 'blur(80px)',
        opacity: 0.18,
      }}
      animate={{ y: [0, -24, 0], opacity: [0.18, 0.28, 0.18] }}
      transition={{ duration: 8 + delay, repeat: Infinity, ease: 'easeInOut', delay }}
    />
  )
}

const roles = ['Data Analyst', 'Growth Analyst', 'BI Developer', 'Dashboard Builder']

const stats = [
  { value: '2', suffix: '+', label: 'Years Experience' },
  { value: '10', suffix: '+', label: 'Projects Delivered' },
  { value: '5', suffix: '', label: 'Industries Served' },
  { value: '100', suffix: '%', label: 'Data-Driven' },
]

const socials = [
  { icon: FiLinkedin, href: 'https://linkedin.com/in/your-handle', label: 'LinkedIn' },
  { icon: FiGithub,   href: 'https://github.com/your-handle',    label: 'GitHub' },
  { icon: FiTwitter,  href: 'https://twitter.com/your-handle',   label: 'Twitter' },
  { icon: FiMail,     href: 'mailto:your@email.com',             label: 'Email' },
]

export default function Hero() {
  const role = useTypewriter(roles)

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-grid"
      style={{ paddingTop: 80 }}
    >
      {/* ── Background orbs ─────────────────────────────────────── */}
      <Orb x="10%"  y="20%"  size={400} color="#00E5CC" delay={0} />
      <Orb x="70%"  y="5%"   size={350} color="#7C3AED" delay={2} />
      <Orb x="85%"  y="55%"  size={280} color="#00E5CC" delay={4} />
      <Orb x="5%"   y="70%"  size={250} color="#7C3AED" delay={1} />

      {/* ── Radial gradient overlay ──────────────────────────────── */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(0,229,204,0.07), transparent 70%)',
        }}
      />

      {/* ── Content ─────────────────────────────────────────────── */}
      <div className="container-main relative z-10 flex flex-col items-center text-center py-20">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8 text-xs font-semibold font-body uppercase tracking-widest"
          style={{
            background: 'rgba(0,229,204,0.07)',
            border: '1px solid rgba(0,229,204,0.18)',
            color: '#00E5CC',
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
          Available for new projects
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="font-display font-extrabold text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-text-primary tracking-tight mb-4 leading-none"
        >
          Hi, I&rsquo;m{' '}
          <span className="gradient-text-accent glow-text">Akorede</span>
        </motion.h1>

        {/* Typewriter role */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="h-10 sm:h-12 flex items-center justify-center mb-6"
        >
          <span className="font-display font-semibold text-xl sm:text-2xl md:text-3xl text-text-secondary">
            {role}
            <span
              className="inline-block w-0.5 h-7 sm:h-8 ml-1 rounded-full animate-pulse"
              style={{ background: '#00E5CC', verticalAlign: 'middle' }}
            />
          </span>
        </motion.div>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="max-w-xl font-body text-text-secondary text-base sm:text-lg leading-relaxed mb-10"
        >
          I turn messy data into clear decisions — building dashboards, growth models, and analytics systems 
          that help businesses move with confidence.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-col sm:flex-row gap-3 mb-10"
        >
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary text-sm"
          >
            View My Work
          </a>
          <a href="./cv.pdf" download className="btn-outline text-sm">
            Download CV
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.65 }}
          className="flex items-center gap-3 mb-16"
        >
          {socials.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noreferrer"
              aria-label={label}
              className="w-10 h-10 rounded-xl flex items-center justify-center text-text-muted hover:text-accent transition-all duration-200"
              style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
            >
              <Icon size={16} />
            </a>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.75 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px w-full max-w-lg"
          style={{
            background: 'rgba(255,255,255,0.04)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: 16,
            overflow: 'hidden',
          }}
        >
          {stats.map((s, i) => (
            <div
              key={s.label}
              className="flex flex-col items-center py-4 px-3"
              style={{ background: 'rgba(5,13,24,0.6)' }}
            >
              <span className="font-display font-bold text-2xl text-accent">
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </span>
              <span className="font-body text-text-muted text-xs mt-0.5">{s.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* ── Scroll indicator ─────────────────────────────────────── */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        <span className="font-body text-text-muted text-xs uppercase tracking-widest">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <FiArrowDown size={16} className="text-accent opacity-60" />
        </motion.div>
      </motion.div>
    </section>
  )
}
