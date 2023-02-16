/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		fontFamily: {
			poppins: ["Poppins", "sans-serif"],
		},
		extend: {
			colors: {
				myDarkblue: "#0C151D",
				myDarklight: "#171F26",
				myRed: "#95190E",
				myWhite: "#E5E5E5",
				darkText: "#A3ABB2",
				lightText: "#3D3D3D",
			},
		},
	},
	plugins: [],
	darkMode: "class",
};
