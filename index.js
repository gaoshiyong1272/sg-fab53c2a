if (process.env.NODE_ENV === 'production') { // 通过环境变量来决定入口文件
  module.exports = require('./dist/helper.min.js')
} else {
  module.exports = require('./dist/helper.js')
}
