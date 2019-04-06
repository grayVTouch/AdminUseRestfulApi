const path = require('path');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common , {
	mode: 'development' , 
	devtool: 'inline-source-map' , 
	devServer: {
		contentBase: path.resolve('../../') ,
<<<<<<< HEAD
		index: 'app.html' ,
=======
>>>>>>> 2312275b72dca303976d703d8a85fe347188bdd0
		host: '127.0.0.1' ,
		port: 9000 ,
	}
});
