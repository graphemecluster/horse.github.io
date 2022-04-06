module.exports = {
	important: true,
	content: ["./src/**/*"],
	theme: {
		fontFamily: {
			sans: ["Open Sans", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
		},
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					"primary": "#0d8af8",
					"primary-focus": "#066fcb",
					"primary-content": "#ffffff",
					"secondary": "#4bcc8c",
					"secondary-focus": "#40a371",
					"secondary-content": "#ffffff",
					"accent": "#fa1e47",
					"accent-focus": "#b51633",
					"accent-content": "#ffffff",
					"neutral": "#3d4451",
					"neutral-focus": "#2a2e37",
					"neutral-content": "#ffffff",
					"base-100": "#ffffff",
					"base-200": "#f9fafb",
					"base-300": "#e4e6e8",
					"base-content": "#1f2937",
					"info": "#2071f3",
					"success": "#009485",
					"warning": "#ff9900",
					"error": "#f83434",
				},
			},
		],
	},
};
