/** @type {import('tailwindcss').Config} */
export default {
	darkMode: 'class',
	content: [
		'./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
		'./node_modules/preline/preline.js',
	],
	theme: {
		container : {
			center: true,
			padding: '1rem',
		}
	},
	plugins: [
		require('preline/plugin'),
		require('@tailwindcss/typography'),
	],
}
