/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
		"./app/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
		extend: {
			colors: {
				"dark-purple": "#110A18",
				"medium-purple": "#381A41",
				"light-purple": "#CF0DEF",
			},
		},
	},
	plugins: [],
};
