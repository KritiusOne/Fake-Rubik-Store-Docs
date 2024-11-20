/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				"black": "#080705",
				"charcoal": "#40434E",
				"cordovan": "#912F40",
				"redWood": "#B63E52",
				"babyPowder": "#FFFFFA"
			}
		},
	},
	plugins: [],
}
