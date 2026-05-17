import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  FiMail, FiLinkedin, FiGithub, FiTwitter,
  FiSend, FiCheck, FiAlertCircle,
} from 'react-icons/fi'
import { MdWhatsapp } from 'react-icons/md'
import SectionHeader from '../ui/SectionHeader'
import { fadeLeft, fadeRight, fadeUp, staggerContainer, viewportConfig } from '../../utils/animations'

// ── Update these with real contact details ────────────────────────────────────
const CONTACT_EMAIL = 'waheedakorede0@gmail.com'
const WHATSAPP_NUM  = '+2347050308357'   // with country code, no spaces

const contactLinks = [
  {
    icon: FiMail,
    label: 'Email',
    value: Waheedakorede0@gmail.com,
    href: `mailto:${waheedakorede0@gmail.com}`,
    color: '#00E5CC',
  },
  {
    icon: FiLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/akoredewaheed',
    href: 'https://linkedin.com/in/akoredewaheed',
    color: '#0A66C2',
  },
  {
    icon: FiGithub,
    label: 'GitHub',
    value: 'github.com/Akorede-Q',
    href: 'https://github.com/Akorede-Q',
    color: '#6E40C9',
  },
  {
    icon: FiTwitter,
    label: 'Twitter / X',
    value: 'LegitCash5',
    href: 'https://twitter.com/LegitCash5',
    color: '#1DA1F2',
  },
  {
    icon: MdWhatsapp,
    label: 'WhatsApp',
    value: +2347050308357,
    href: `https://wa.me/${+2347050308357.replace(/\D/g, '')}`,
    color: '#25D366',
  },
]

// Simple form — for real form submissions, connect to Formspree/EmailJS
function ContactForm() {
  const [form, setForm]       = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus]   = useState('idle') // idle | sending | success | error

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')

    // ── To wire up a real form: ───────────────────────────────────────────────
    // Option 1 — Formspree (free): replace YOUR_FORM_ID below and uncomment
    //   const res = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(form),
    //   })
    //   setStatus(res.ok ? 'success' : 'error')
    //
    // Option 2 — EmailJS: follow emailjs.com docs and call emailjs.send()
    // ─────────────────────────────────────────────────────────────────────────

    // Demo: simulate a successful send after 1.5s
    await new Promise((r) => setTimeout(r, 1500))
    setStatus('success')
    setForm({ name: '', email: '', subject: '', message: '' })
  }

  const inputClass = `
    w-full px-4 py-3 rounded-xl font-body text-sm text-text-primary placeholder-text-muted
    outline-none transition-all duration-200
    focus:border-accent focus:shadow-glow-sm
  `

  const inputStyle = {
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
  }

  const focusStyle = { borderColor: 'rgba(0,229,204,0.4)' }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="grid sm:grid-cols-2 gap-4">
        <div>
          <label className="font-body text-text-muted text-xs uppercase tracking-wider mb-1.5 block">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Your name"
            className={inputClass}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
        </div>
        <div>
          <label className="font-body text-text-muted text-xs uppercase tracking-wider mb-1.5 block">Email</label>
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="your@email.com"
            className={inputClass}
            style={inputStyle}
            onFocus={(e) => Object.assign(e.target.style, focusStyle)}
            onBlur={(e) => Object.assign(e.target.style, inputStyle)}
          />
        </div>
      </div>

      <div>
        <label className="font-body text-text-muted text-xs uppercase tracking-wider mb-1.5 block">Subject</label>
        <input
          name="subject"
          value={form.subject}
          onChange={handleChange}
          placeholder="What are you looking for?"
          className={inputClass}
          style={inputStyle}
          onFocus={(e) => Object.assign(e.target.style, focusStyle)}
          onBlur={(e) => Object.assign(e.target.style, inputStyle)}
        />
      </div>

      <div>
        <label className="font-body text-text-muted text-xs uppercase tracking-wider mb-1.5 block">Message</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Tell me about your project, data challenge, or just say hello."
          className={`${inputClass} resize-none`}
          style={inputStyle}
          onFocus={(e) => Object.assign(e.target.style, focusStyle)}
          onBlur={(e) => Object.assign(e.target.style, inputStyle)}
        />
      </div>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === 'sending' || status === 'success'}
        className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === 'idle' && <><FiSend size={15} /> Send Message</>}
        {status === 'sending' && (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
            </svg>
            Sending…
          </>
        )}
        {status === 'success' && <><FiCheck size={15} /> Message Sent!</>}
        {status === 'error' && <><FiAlertCircle size={15} /> Try Again</>}
      </button>

      {status === 'success' && (
        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          className="font-body text-accent text-sm text-center"
        >
          Thanks! I'll get back to you within 24 hours.
        </motion.p>
      )}

      {/* Formspree notice */}
      <p className="font-body text-text-muted text-xs text-center">
        Or connect directly via the channels listed →
      </p>
    </form>
  )
}

export default function Contact() {
  return (
    <section id="contact" className="section-padding relative overflow-hidden">
      {/* BG */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(0,229,204,0.06), transparent)',
        }}
      />

      <div className="container-main relative z-10">
        <SectionHeader
          eyebrow="Contact"
          title='Let&rsquo;s build something <span class="gradient-text">data-driven</span>'
          subtitle="Have a project in mind? Looking for an analyst for your team? Or just want to talk data? I'm easy to reach."
        />

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 max-w-5xl mx-auto">

          {/* ── Left — Links ─────────────────────────────────────────── */}
          <motion.div
            className="flex flex-col gap-6"
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={staggerContainer}
          >
            <motion.div variants={fadeLeft}>
              <h3 className="font-display font-bold text-xl text-text-primary mb-2">
                Available for freelance & full-time
              </h3>
              <p className="font-body text-text-secondary text-sm leading-relaxed mb-6">
                I'm currently taking on new clients and open to conversations about full-time data roles. 
                Typically respond within 24 hours.
              </p>
            </motion.div>

            {/* Contact channels */}
            <motion.div className="flex flex-col gap-3" variants={staggerContainer}>
              {contactLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noreferrer"
                  variants={fadeUp}
                  className="flex items-center gap-4 p-4 rounded-xl group transition-all duration-200"
                  style={{
                    background: 'rgba(255,255,255,0.025)',
                    border: '1px solid rgba(255,255,255,0.06)',
                  }}
                  whileHover={{
                    borderColor: `${link.color}30`,
                    background: `${link.color}06`,
                    y: -2,
                  }}
                >
                  <div
                    className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                    style={{ background: `${link.color}15`, border: `1px solid ${link.color}25` }}
                  >
                    <link.icon size={17} style={{ color: link.color }} />
                  </div>
                  <div>
                    <p className="font-body text-text-muted text-xs uppercase tracking-wider">{link.label}</p>
                    <p className="font-body text-text-primary text-sm font-medium group-hover:text-accent transition-colors">
                      {link.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Availability badge */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-3 px-4 py-3 rounded-xl"
              style={{
                background: 'rgba(0,229,204,0.06)',
                border: '1px solid rgba(0,229,204,0.15)',
              }}
            >
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse flex-shrink-0" />
              <p className="font-body text-text-secondary text-sm">
                <span className="text-accent font-medium">Available now</span> — response time usually under 24 hours
              </p>
            </motion.div>
          </motion.div>

          {/* ── Right — Form ─────────────────────────────────────────── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportConfig}
            variants={fadeRight}
            className="rounded-2xl p-6 sm:p-8"
            style={{
              background: 'rgba(255,255,255,0.025)',
              border: '1px solid rgba(255,255,255,0.06)',
            }}
          >
            <h3 className="font-display font-semibold text-lg text-text-primary mb-6">
              Send a message
            </h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
