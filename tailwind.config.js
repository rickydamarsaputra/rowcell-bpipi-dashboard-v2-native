module.exports = {
	purge: ["./*.html", "./pages/*.html"],
	mode: "jit",
	darkMode: false, // or 'media' or 'class'
	theme: {
		screens: {
			sm: "640px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			fhd: "1920px",
		},
		extend: {},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
