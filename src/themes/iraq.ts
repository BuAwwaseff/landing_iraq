import { baseTheme, type ThemeTokens } from '@/themes/base';

export const iraqTheme: ThemeTokens = {
  ...baseTheme,
  color: {
    ...baseTheme.color,
    bg: '#070706',
    bgTop: '#120f0a',
    bgBottom: '#020202',
    foreground: '#f4ead7',
    foregroundSoft: '#cec2b0',
    primary: '#d9a43a',
    primarySoft: 'rgba(217, 164, 58, 0.12)',
    primaryStrong: '#f0c25b',
    highlight: '#dce0b6',
    secondary: '#f4ead7',
    surface: 'rgba(17, 14, 11, 0.72)',
    surfaceStrong: 'rgba(14, 12, 10, 0.84)',
    surfaceAccent: 'rgba(19, 15, 12, 0.9)',
    borderSoft: 'rgba(240, 194, 91, 0.12)',
    borderStrong: 'rgba(240, 194, 91, 0.26)',
    gridLine: 'rgba(255, 246, 226, 0.036)',
    glow: 'rgba(217, 164, 58, 0.16)',
  },
  space: {
    ...baseTheme.space,
    sectionY: '4.8rem',
    sectionYMobile: '3.2rem',
  },
  shadow: {
    ...baseTheme.shadow,
    soft: '0 22px 60px rgba(0, 0, 0, 0.2)',
    card: '0 34px 90px rgba(0, 0, 0, 0.34)',
    hero: '0 42px 130px rgba(0, 0, 0, 0.42)',
    glow: '0 0 120px rgba(255, 182, 66, 0.18)',
  },
};
