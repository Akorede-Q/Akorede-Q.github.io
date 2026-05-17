/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Syne', 'sans-serif'],
        body: ['Outfit', 'sans-serif'],
      },
      colors: {
        accent: '#00E5CC',
        'accent-dim': 'rgba(0,229,204,0.08)',
        'accent-border': 'rgba(0,229,204,0.18)',
        'accent-glow': 'rgba(0,229,204,0.35)',
        violet: '#7C3AED',
        'violet-dim': 'rgba(124,58,237,0.08)',
        amber: '#F59E0B',
        'bg-primary': '#050D18',
        'bg-secondary': '#0A1224',
        'bg-tertiary': '#0F192E',
        'bg-card': 'rgba(255,255,255,0.03)',
        'text-primary': '#F1F5F9',
        'text-secondary': '#8B9CB6',
        'text-muted': '#4A5568',
        'border-subtle': 'rgba(255,255,255,0.06)',
      },
      backgroundImage: {
        'grid-pattern': "linear-gradient(rgba(0,229,204,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(0,229,204,0.025) 1px, transparent 1px)",
        'hero-gradient': "radial-gradient(ellipse 80% 50% at 50% -20%, rgba(0,229,204,0.12), transparent)",
        'card-gradient': "linear-gradient(135deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.01) 100%)",
        'accent-gradient': "linear-gradient(135deg, #00E5CC 0%, #7C3AED 100%)",
        'section-gradient': "radial-gradient(ellipse 60% 40% at 80% 50%, rgba(124,58,237,0.06), transparent)",
      },
      backgroundSize: {
        'grid': '60px 60px',
      },
      animation: {
        'float': 'float 8s ease-in-out infinite',
        'float-delayed': 'float 8s ease-in-out 2s infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'spin-slow': 'spin 25s linear infinite',
        'scan': 'scan 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-18px)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.4', transform: 'scale(1)' },
          '50%': { opacity: '0.7', transform: 'scale(1.05)' },
        },
        scan: {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(200%)' },
        },
      },
      boxShadow: {
        'glow-accent': '0 0 30px rgba(0,229,204,0.2)',
        'glow-sm': '0 0 15px rgba(0,229,204,0.12)',
        'glow-violet': '0 0 30px rgba(124,58,237,0.2)',
        'card': '0 4px 24px rgba(0,0,0,0.3)',
      },
    },
  },
  plugins: [],
}
