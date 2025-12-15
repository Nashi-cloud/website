/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				nashi: {
					100: '#f7f2d4', // Tranche claire
					200: '#f6efd2',
					300: '#f7e6ae',
					400: '#f6e5af',
					500: '#edd074', // Tranche dorée
					600: '#d8a82a', // Extérieur
					900: '#553016', // Pépins (Texte / Dark)
				}
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', 'sans-serif'],
			}
		},
	},
	plugins: [],
}
