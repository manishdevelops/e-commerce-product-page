/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{js,html}'],
	theme: {
		extend: {
			colors: {
				'orange-1': 'hsl(26, 100%, 55%)',
				'Pale-orange': 'hsl(25, 100%, 94%)',
				'very-dark-blue': 'hsl(220, 13%, 13%)',
				'dark-grayish-blue': 'hsl(219, 9%, 45%)',
				'grayish-blue': 'hsl(220, 14%, 75%)',
				'light-grayish-blue': 'hsl(223, 64%, 98%)',
				'White-1': 'hsl(0, 0%, 100%)',
				'black-opacity-75': 'rgba(0, 0, 0, 0.75)',
			},
			fontFamily: {
				'kumbh-sans': ['Kumbh Sans', 'sans-serif'],
			},
			fontWeight: {
				400: '400',
				700: '700',
			},
		},
	},
	plugins: [],
};
