/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				coral: {
					DEFAULT: '#FF6F61', // Rojo Coral
					light: '#FFA491', // Tonos más claros si los necesitas
					dark: '#CC584D',  // Tonos más oscuros
				},
				cream: '#FFF8F1',     // Blanco Crema
				pigeon: '#4F4F4F',    // Gris Paloma
				sage: '#A7C957',      // Verde Salvia
				steelblue: '#6C7A89', // Azul Grisáceo
				gold: '#FFD66B',      // Amarillo Dorado
			},
		},
	},
	plugins: [],
}
