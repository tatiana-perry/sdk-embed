const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: __dirname + '/app/index.js',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				loader: 'babel-loader'
			}
		]
	},
	devServer:{
		historyApiFallback: true,
		https: true,
		port: 443
	},
	output: {
		filename: 'transformed.js',
		path: __dirname + '/build',
		publicPath: '/'
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: __dirname + '/app/index.html',
			filename: 'index.html',
			inject: 'body'
		})
	]
};
