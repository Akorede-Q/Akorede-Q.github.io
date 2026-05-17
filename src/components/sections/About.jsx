import { motion } from 'framer-motion'
import { MdAutoAwesome, MdTrendingUp, MdQueryStats } from 'react-icons/md'
import { FiArrowRight } from 'react-icons/fi'
import SectionHeader from '../ui/SectionHeader'
import AnimatedCounter from '../ui/AnimatedCounter'
import { fadeLeft, fadeRight, fadeUp, staggerContainer, viewportConfig } from '../../utils/animations'

const highlights = [
  {
    icon: MdQueryStats,
    title: 'Data-First Thinking',
    text: "Every recommendation I make comes back to what the data says. I don't guess — I measure.",
    color: '#00E5CC',
  },
  {
    icon: MdTrendingUp,
    title: 'Growth Orientation',
    text: 'I connect analytics to outcomes. Finding the number is only half the job — knowing what to do with it is the other.',
    color: '#7C3AED',
  },
  {
    icon: MdAutoAwesome,
    title: 'Clear Communication',
    text: "I translate complex findings into plain language. If your team doesn't understand the insight, it won't drive action.",
    color: '#F59E0B',
  },
]

const statCards = [
  { value: '2',  suffix: '+', label: 'Years in Data' },
  { value: '10', suffix: '+', label: 'Projects Completed' },
  { value: '5',  suffix: '',  label: 'Industries' },
]

export default function About() {
  return (
    <section id="about" className="section-padding relative overflow-hidden">
      {/* subtle BG blob */}
      <div
        className="absolute right-0 top-1/2 w-96 h-96 rounded-full pointer-events-none opacity-5 blur-3xl"
        style={{ background: '#7C3AED', transform: 'translate(40%, -50%)' }}
      />

      <div className="container-main">
        <SectionHeader
          eyebrow="About Me"
          title='The analyst behind <span class="gradient-text">the numbers</span>'
          subtitle="I started with a second-hand laptop and a YouTube playlist. Today, I build data systems that real businesses run on."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

          {/* ── Left — Story ───────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeLeft}
          >
            {/* Visual placeholder / abstract data art */}
            <div
              className="w-full aspect-square max-w-sm mx-auto lg:max-w-none rounded-2xl mb-8 lg:mb-0 relative overflow-hidden flex items-center justify-center"
              style={{
                background: 'linear-gradient(135deg, rgba(0,229,204,0.06) 0%, rgba(124,58,237,0.06) 100%)',
                border: '1px solid rgba(255,255,255,0.06)',
              }}
            >
              {/* Abstract data viz decoration */}
              <svg width="100%" height="100%" viewBox="0 0 400 400" fill="none" className="absolute inset-0 opacity-30">
                <line x1="0" y1="300" x2="100" y2="220" stroke="#00E5CC" strokeWidth="1" />
                <line x1="100" y1="220" x2="200" y2="240" stroke="#00E5CC" strokeWidth="1" />
                <line x1="200" y1="240" x2="300" y2="160" stroke="#00E5CC" strokeWidth="1" />
                <line x1="300" y1="160" x2="400" y2="100" stroke="#00E5CC" strokeWidth="1" />
                {[0,100,200,300,400].map((x,i) => {
                  const y = [300,220,240,160,100][i]
                  return <circle key={x} cx={x} cy={y} r="5" fill="#00E5CC" opacity="0.8"/>
                })}
                {/* Grid lines */}
                {[100,200,300].map(y => (
                  <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="#00E5CC" strokeWidth="0.3" strokeDasharray="4 8" />
                ))}
                {/* Bar chart */}
                {[
                  { x: 40,  h: 80,  w: 40 },
                  { x: 110, h: 130, w: 40 },
                  { x: 180, h: 100, w: 40 },
                  { x: 250, h: 160, w: 40 },
                  { x: 320, h: 120, w: 40 },
                ].map((b, i) => (
                  <rect key={i} x={b.x} y={370 - b.h} width={b.w} height={b.h} fill="#7C3AED" opacity="0.35" rx="4" />
                ))}
              </svg>

              {/* Center label */}
              <div className="relative z-10 text-center">
                <div className="font-display font-bold text-5xl text-accent opacity-70">AK</div>
                <div className="font-body text-text-muted text-xs mt-1 tracking-widest uppercase">Data Analyst</div>
              </div>

              {/* Stat badges */}
              {statCards.map((s, i) => (
                <motion.div
                  key={s.label}
                  className="absolute rounded-xl px-4 py-2.5 text-center"
                  style={{
                    background: 'rgba(5,13,24,0.85)',
                    border: '1px solid rgba(0,229,204,0.18)',
                    backdropFilter: 'blur(12px)',
                    ...[
                      { top: '12%', right: '8%' },
                      { bottom: '18%', right: '6%' },
                      { bottom: '10%', left: '8%' },
                    ][i],
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={viewportConfig}
                  transition={{ delay: 0.3 + i * 0.15 }}
                >
                  <div className="font-display font-bold text-xl text-accent">
                    <AnimatedCounter to={s.value} suffix={s.suffix} />
                  </div>
                  <div className="font-body text-text-muted text-xs">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ── Right — Text ───────────────────────────────────────── */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            <motion.div variants={fadeRight}>
              <h3 className="font-display font-bold text-2xl sm:text-3xl text-text-primary mb-4 leading-tight">
                From self-taught curiosity to{' '}
                <span className="gradient-text">real business impact</span>
              </h3>
              <div className="space-y-4 font-body text-text-secondary text-sm sm:text-base leading-relaxed">
                <p>
                  My analytics journey started not in a classroom, but at a desk with a PC I bought with my last savings and a stubborn determination to figure it out. That investment paid off in ways I didn't expect.
                </p>
                <p>
                  Through a combination of structured self-study, a six-month mentorship programme with a UK-based banking professional, and the hard lessons of real client work, I built a skillset that's grounded in practice rather than theory.
                </p>
                <p>
                  Today, I work as a freelance Data & Growth Analyst — helping businesses make smarter decisions through clean dashboards, rigorous analysis, and the kind of clear reporting that actually influences strategy.
                </p>
              </div>
            </motion.div>

            {/* Highlight cards */}
            <motion.div className="grid gap-3" variants={staggerContainer}>
              {highlights.map((h) => (
                <motion.div
                  key={h.title}
                  variants={fadeUp}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center"
                    style={{ background: `${h.color}18`, border: `1px solid ${h.color}25` }}
                  >
                    <h.icon size={18} style={{ color: h.color }} />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-sm text-text-primary mb-0.5">{h.title}</h4>
                    <p className="font-body text-text-muted text-sm leading-relaxed">{h.text}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA */}
            <motion.div variants={fadeUp}>
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="btn-outline text-sm inline-flex"
              >
                See My Projects <FiArrowRight size={14} />
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
