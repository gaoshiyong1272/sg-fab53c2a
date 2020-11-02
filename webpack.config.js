'use strict';
const TerserPlugin = require('terser-webpack-plugin'); // 引入压缩插件

module.exports = {
  mode: 'none', // 因为默认是production 默认会进行压缩
  entry: {
    "helper": "./src/index.js",
    "helper.min": "./src/index.js"
  },
  output: {
    filename: "[name].js",
    library: "helper",
    libraryExport: "default", // 不添加的话引用的时候需要 tools.default
    libraryTarget: "umd", // var this window ...
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({ // 使用压缩插件
        include: /\.min\.js$/
      })
    ]
  }
}
