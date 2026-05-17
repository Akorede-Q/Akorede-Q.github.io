import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Skills from './components/sections/Skills'
import Projects from './components/sections/Projects'
import Experience from './components/sections/Experience'
import Services from './components/sections/Services'
import Testimonials from './components/sections/Testimonials'
import Contact from './components/sections/Contact'

export default function App() {
  return (
    <div className="relative bg-bg-primary text-text-primary min-h-screen overflow-x-hidden w-full">
      {/* Global noise texture */}
      <div
        className="fixed inset-0 pointer-events-none z-0 opacity-[0.025]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat',
          backgroundSize: '256px',
        }}
      />

      {/* ── Navigation ─────────────────────────────────────────── */}
      <Navbar />

      {/* ── Main content ───────────────────────────────────────── */}
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Services />
        <Testimonials />
        <Contact />
      </main>

      {/* ── Footer ─────────────────────────────────────────────── */}
      <Footer />
    </div>
  )
}
