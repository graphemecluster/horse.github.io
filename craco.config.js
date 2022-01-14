const path = require("path");
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
			const fileLoader = loaderByName("file-loader");
			addBeforeLoader(config, fileLoader, {
				test: /\.csv$/,
				loader: "csv-loader",
				options: {
					dynamicTyping: true,
					header: true,
					skipEmptyLines: true,
				},
			});
			addBeforeLoader(config, fileLoader, {
				include: path.resolve(__dirname, "./src/tables.txt"),
				loader: path.resolve(__dirname, "./scripts/custom-loader.js"),
			});
			return config;
		},
	},
};
