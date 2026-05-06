/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        /* ── Warm light surfaces ── */
        cream:   '#f5f0e8',
        paper:   '#faf8f4',
        warm:    '#ede7db',
        'warm-border': '#ddd7cb',

        /* ── Text ── */
        charcoal: '#14121a',
        body:     '#3d3a48',
        muted:    '#8a8796',

        /* ── Brand blue ── */
        blue:      '#1a5bbf',
        'blue-mid':'#2d6fd4',
        'blue-dim':'#134594',
        'blue-soft':'#e8effa',
        'blue-pale':'#a8c4f0',

        /* ── Amber (Glenturret echo) ── */
        amber:       '#c4862c',
        'amber-light':'#d9a050',
        'amber-dim':  '#8c5e18',

        /* ── Dark (hero / nav / footer) ── */
        midnight:     '#0d1118',
        'dark-surface':'#141a24',
        'dark-border': '#1e2a38',
      },
      fontFamily: {
        display: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans:    ['"DM Sans"', 'system-ui', 'sans-serif'],
        mono:    ['"DM Mono"', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.65rem', { lineHeight: '1rem' }],
      },
      letterSpacing: {
        tight:  '-0.03em',
        caps:   '0.14em',
        'wide': '0.06em',
      },
      lineHeight: {
        body:    '1.75',
        display: '1.05',
      },
      boxShadow: {
        card:       '0 1px 3px rgba(0,0,0,0.05), 0 8px 24px rgba(0,0,0,0.07)',
        'card-up':  '0 4px 16px rgba(0,0,0,0.10), 0 20px 48px rgba(0,0,0,0.10)',
        bottle:     'drop-shadow(0 32px 48px rgba(0,0,0,0.22)) drop-shadow(0 8px 16px rgba(0,0,0,0.10))',
        glow:       '0 0 0 2px rgba(26,91,191,0.35), 0 8px 32px rgba(26,91,191,0.18)',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};
