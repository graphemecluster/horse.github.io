module.exports = {
	important: true,
	purge: ["./src/**/*"],
	plugins: [require("daisyui")],
	daisyui: {
		themes: [
			{
				light: {
					"primary": "#0d8af8",
					"primary-focus": "#066fcb",
					"primary-content": "#ffffff",
					"secondary": "#42c28b",
					"secondary-focus": "#31a573",
					"secondary-content": "#ffffff",
					"accent": "#37cdbe",
					"accent-focus": "#2aa79b",
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
					"error": "#ff2f24",
				},
			},
		],
	},
};
