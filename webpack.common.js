const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
// 编译后文件输出路径
const outputDir = 'compiled';

module.exports = {
<<<<<<< HEAD
	// 入口
	entry: {
		// 单一入口
		app_v1: ['babel-polyfill' , './source/app.js']
	} ,
=======
	entry: {
		app_v7: ['babel-polyfill' , './source/app.js']
	} , 
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
	plugins: [
		new CleanWebpackPlugin([outputDir]),
		new HtmlWebpackPlugin({
			filename: 'app.html' ,
			template: 'template.html'
		}) , 
		new VueLoaderPlugin() , 
		new MiniCssExtractPlugin({
			filename: "[name].css" ,
			chunkFilename: "[id].css"
		}) ,
	] , 
	output: {
		filename: 'js/[name].js' , 
		path: path.resolve(__dirname , outputDir)
	} , 
	module: {
		rules: [
			{
<<<<<<< HEAD
				test: /\.js/ ,
				// 如果不排除 node_modules，babel 编译速度将会非常慢
				exclude: /node_modules/ , 
				use: {
					loader: 'babel-loader' ,
					options: {
                        "presets": ["@babel/preset-env"] ,
                        plugins: [
                        	// 提升运行速度 详情请查看 https://webpack.js.org/loaders/babel-loader/#root
                        	'@babel/plugin-transform-runtime' ,
							// 支持动态导入语法
							'@babel/plugin-syntax-dynamic-import' ,
						]
					}
=======
				test: /\.js/ , 
				exclude: /node_modules/ , 
				use: {
					loader: 'babel-loader' ,
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
				}
			} , 
			{
				test: /\.css/ , 
				use: [
					MiniCssExtractPlugin.loader ,
					// 'vue-style-loader' ,
					{
						loader: 'css-loader' , 
<<<<<<< HEAD
						options: {
							sourceMap: true
						}
=======
							options: {
								sourceMap: true
							}
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
					}
				]
			} , 
			{
				test: /\.(png|svg|jpg|gif)$/ , 
				use: [
					{
						loader: 'file-loader' , 
						options: {
							name: 'assets/image/[name].[ext]'
						}
					}
				]
			} , 
			{
				test: /\.vue$/ , 
				loader: 'vue-loader'
			} , 
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/ ,
				use: [
					{
                        loader: 'file-loader' ,
						options: {
                        	name: '[name].[ext]'
						}
					}
				],
			}
		]
	} , 
	resolve: {
		alias: {
			// 依赖
			'vue': 'vue/dist/vue.esm.js' , 
			'vue-router': 'vue-router/dist/vue-router.esm.js' , 
			'vuex': 'vuex/dist/vuex.esm.js' ,
<<<<<<< HEAD
=======
			'iview.js': 'iview/dist/iview.js' ,
			'iview.css': 'iview/dist/styles/iview.css' ,
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0

			// 目录别名
            // asset: path.resolve(__dirname , './source/asset') ,
			// _vue: path.resolve(__dirname , './source/vue') ,
			// api: path.resolve(__dirname , './source/api') ,
			// mapping: path.resolve(__dirname , './source/mapping') ,

			// view: path.resolve(__dirname , './source/vue/view') ,
			// router: path.resolve(__dirname , './source/vue/router') ,
			// store: path.resolve(__dirname , './source/vue/store') ,
			// mixin: path.resolve(__dirname , './source/vue/mixin')
		}
	}
};
