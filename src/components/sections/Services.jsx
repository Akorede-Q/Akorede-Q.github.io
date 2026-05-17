import { motion } from 'framer-motion'
import { MdBarChart, MdTrendingUp, MdInsights, MdDashboard, MdCheck } from 'react-icons/md'
import { services } from '../../data/services'
import SectionHeader from '../ui/SectionHeader'
import { fadeUp, staggerContainer, viewportConfig } from '../../utils/animations'

const iconMap = { MdBarChart, MdTrendingUp, MdInsights, MdDashboard }

export default function Services() {
  return (
    <section id="services" className="section-padding relative overflow-hidden">
      {/* BG */}
      <div
        className="absolute left-1/2 top-0 w-px h-full pointer-events-none opacity-10"
        style={{ background: 'linear-gradient(to bottom, transparent, #7C3AED, transparent)' }}
      />
      <div
        className="absolute right-0 top-1/3 w-80 h-80 rounded-full pointer-events-none opacity-5 blur-3xl"
        style={{ background: '#7C3AED' }}
      />

      <div className="container-main">
        <SectionHeader
          eyebrow="Services"
          title='What I can <span class="gradient-text">do for you</span>'
          subtitle="Analytics services built around real business needs — not generic packages."
        />

        <motion.div
          className="grid sm:grid-cols-2 gap-5"
          initial="hidden"
          whileInView="visible"
          viewport={viewportConfig}
          variants={staggerContainer}
        >
          {services.map((svc, i) => {
            const Icon = iconMap[svc.icon] || MdBarChart
            return (
              <motion.div
                key={svc.id}
                variants={fadeUp}
                className="group relative rounded-2xl p-6 sm:p-7 overflow-hidden transition-all duration-300"
                style={{
                  background: 'rgba(255,255,255,0.025)',
                  border: '1px solid rgba(255,255,255,0.06)',
                }}
                whileHover={{ y: -4, borderColor: `${svc.accent}30` }}
              >
                {/* Hover glow */}
                <div
                  className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-3xl pointer-events-none"
                  style={{ background: svc.accent, transform: 'translate(30%, -30%)' }}
                />

                {/* Icon */}
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${svc.accent}18`, border: `1px solid ${svc.accent}28` }}
                >
                  <Icon size={22} style={{ color: svc.accent }} />
                </div>

                {/* Title */}
                <h3
                  className="font-display font-bold text-lg text-text-primary mb-2 group-hover:transition-colors"
                  style={{ '--hover-color': svc.accent }}
                >
                  {svc.title}
                </h3>

                {/* Description */}
                <p className="font-body text-text-muted text-sm leading-relaxed mb-5">
                  {svc.description}
                </p>

                {/* Features */}
                <ul className="space-y-2">
                  {svc.features.map((f) => (
                    <li key={f} className="flex items-start gap-2">
                      <MdCheck size={14} className="flex-shrink-0 mt-0.5" style={{ color: svc.accent }} />
                      <span className="font-body text-text-secondary text-sm">{f}</span>
                    </li>
                  ))}
                </ul>

                {/* Bottom accent line */}
                <div
                  className="absolute bottom-0 left-0 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-b-2xl"
                  style={{ background: `linear-gradient(90deg, ${svc.accent}, transparent)` }}
                />
              </motion.div>
            )
          })}
        </motion.div>

        {/* CTA */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportConfig}
        >
          <p className="font-body text-text-muted text-sm mb-5">
            Not sure which service fits your needs? Let's talk it through.
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault()
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
            }}
            className="btn-primary"
          >
            Book a Free Discovery Call
          </a>
        </motion.div>
      </div>
    </section>
  )
}
