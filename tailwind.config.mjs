/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			spacing:{
				'xxs': '0.25rem', // 4px
				'xs': '0.5rem',   // 8px
				'sm': '0.75rem',  // 12px
				'md': '1rem',     // 16px
				'lg': '1.5rem',   // 24px
				'xl': '2rem',     // 32px
				'2xl': '2.5rem',  // 40px
			},
		},
	},
	plugins: [],
}
