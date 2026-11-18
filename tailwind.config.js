/** @type {import('tailwindcss').Config} */
// N/A branding branch: every colour resolves to an --na-* token from
// src/styles/na/tokens.css (vendored from Niiranen-Advisory/na-design-system).
// Existing utility names are kept and remapped so components need few edits:
//   ms-blue-*            -> the single oxblood accent (tints/shades via color-mix)
//   gray-*               -> ink / paper / border neutrals
//   blue/indigo/purple   -> accent tints (one accent per piece)
//   amber/yellow/orange  -> warning tint + accent ink
//   red                  -> danger, green -> ink (no semaphore green in N/A)
const mix = (pct, base = 'var(--na-color-accent)', other = 'white') =>
  `color-mix(in srgb, ${base} ${pct}%, ${other})`;

const accent = {
  50: mix(5), 100: mix(10), 200: mix(22), 300: mix(40), 400: mix(70),
  500: 'var(--na-color-accent)', 600: 'var(--na-color-accent)',
  700: mix(80, 'var(--na-color-accent)', 'black'), 800: mix(70, 'var(--na-color-accent)', 'black'),
  900: mix(60, 'var(--na-color-accent)', 'black'),
};
const ink = (pct) => mix(pct, 'var(--na-color-ink)', 'var(--na-color-bg)');
const neutral = {
  50: 'var(--na-color-bg)', 100: 'var(--na-color-bg-raised)', 200: 'var(--na-color-border)',
  300: 'var(--na-color-border)', 400: ink(45), 500: 'var(--na-color-ink-muted)',
  600: 'var(--na-color-ink-muted)', 700: ink(85), 800: 'var(--na-color-ink)', 900: 'var(--na-color-ink)',
};
const danger = {
  50: mix(5, 'var(--na-color-danger)'), 100: mix(10, 'var(--na-color-danger)'), 200: mix(30, 'var(--na-color-danger)'),
  600: 'var(--na-color-danger)', 700: 'var(--na-color-danger)', 800: 'var(--na-color-danger)', 900: 'var(--na-color-danger)',
};
const plain = { ...neutral, 50: 'var(--na-color-bg-raised)', 100: 'var(--na-color-bg-raised)' };

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'ms-blue': accent,
        gray: neutral,
        blue: accent, indigo: accent, purple: accent,
        amber: accent, yellow: accent, orange: accent,
        red: danger,
        green: plain,
        white: 'var(--na-color-bg)',
        plate: {
          DEFAULT: 'var(--na-color-plate-bg)', ink: 'var(--na-color-plate-ink)',
          muted: 'var(--na-color-plate-ink-muted)', border: 'var(--na-color-plate-border)',
          accent: 'var(--na-color-plate-accent)',
        },
      },
      fontFamily: {
        sans: 'var(--na-font-ui)',
        serif: 'var(--na-font-text)',
        display: 'var(--na-font-display)',
        mono: 'var(--na-font-mono)',
      },
    },
    // Square edges, 4px ceiling; no shadows.
    borderRadius: { none: '0', DEFAULT: '0', sm: '2px', md: '4px', lg: '4px', xl: '4px', '2xl': '4px', full: '4px' },
    boxShadow: { none: 'none', DEFAULT: 'none', sm: 'none', md: 'none', lg: 'none', xl: 'none' },
  },
  plugins: [],
};
