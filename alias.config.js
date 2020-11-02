'use strict';
const resolve = dir => require('path').join(__dirname, dir);

module.exports = {
	resolve: {
		alias: {
			'@': resolve('website'),
			'@faker': resolve('src/test'),
      'vue$': 'vue/dist/vue.esm.js',
      'slimvue$': resolve('slimvue.js'),
      "@websitedir": resolve('website'),
		}
	}
};
