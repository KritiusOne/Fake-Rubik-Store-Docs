import StarlightTailwindPlugin from '@astrojs/starlight-tailwind';
// Generated color palettes
const accentTheme = { 200: '#feb3a6', 600: '#a90a00', 900: '#640300', 950: '#460b05' };
const grayTheme = { 100: '#edf8ff', 200: '#dbf2ff', 300: '#a6c8db', 400: '#4f95b9', 500: '#0f5e80', 700: '#003e57', 800: '#002b3e', 900: '#001b29' };

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"black": "#080705",
				"raising-black": "#161925",
				"cordovan": "#912F40",
				"redWood": "#B63E52",
				"babyPowder": "#FFFFFA",
				accent: accentTheme,
				gray: grayTheme,
			},
			fontFamily: {
        
        sans: ['"Atkinson Hyperlegible"'],
        
        mono: ['"IBM Plex Mono"'],
      }
		},
	},
	plugins: [StarlightTailwindPlugin()]
}
