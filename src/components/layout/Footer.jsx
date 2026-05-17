import { FiGithub, FiLinkedin, FiMail, FiTwitter } from 'react-icons/fi'

const socials = [
  { icon: FiLinkedin, href: 'https://linkedin.com/in/akoredewaheed', label: 'LinkedIn' },
  { icon: FiGithub,   href: 'https://github.com/Akorede-Q',    label: 'GitHub' },
  { icon: FiTwitter,  href: 'https://twitter.com/LegitCash5',   label: 'Twitter' },
  { icon: FiMail,     href: 'mailto:Waheedakorede0@gmail.com',             label: 'Email' },
]

export default function Footer() {
  return (
    <footer
      className="border-t"
      style={{ borderColor: 'rgba(255,255,255,0.06)' }}
    >
      <div className="container-main py-10">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">

          {/* Brand */}
          <div className="flex items-center gap-2.5">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center font-display font-bold text-bg-primary text-xs"
              style={{ background: 'linear-gradient(135deg, #00E5CC, #7C3AED)' }}
            >
              AK
            </div>
            <span className="font-display font-semibold text-text-primary text-sm">Akorede</span>
          </div>

          {/* Copy */}
          <p className="font-body text-text-muted text-xs text-center">
            © {new Date().getFullYear()} Akorede. Built with React & Vite.
          </p>

          {/* Socials */}
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-text-muted hover:text-accent transition-all duration-200 hover:bg-accent-dim"
              >
                <Icon size={15} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
