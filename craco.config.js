const { addBeforeLoader, loaderByName } = require("@craco/craco");
module.exports = {
	eslint: {
		enable: false,
	},
	style: {
		postcss: {
			plugins: [require("tailwindcss/nesting"), require("tailwindcss"), require("autoprefixer")],
		},
	},
	webpack: {
		configure: config => {
			addBeforeLoader(config, loaderByName("file-loader"), {
				test: /\.csv$/,
				loader: "csv-loader",
				options: {
					dynamicTyping: true,
					header: true,
					skipEmptyLines: true,
				},
			});
			return config;
		},
	},
};
