'use strict';
const path = require('path');
const proxy = {
  '/api/admin': {
    target: 'https://sandbox-c.jufubao.cn',
    pathRewrite: {"^/api/admin": "/api/admin"},
    changeOrigin: true,
    secure: false,
  },
  '/oauth': {
    target: 'https://sandbox-c.jufubao.cn',
    pathRewrite: {"^/oauth": "/oauth"},
    changeOrigin: true,
    secure: false,
  }
};



const devServer = {
  contentBase: path.join(__dirname, "./dist"),
  port: 8030,
  open: true,
  host:'127.0.0.1',
  overlay: {
    warnings: false,
    errors: true
  },
  //proxy, //proxy与before不能共用，before优先于proxy
  //before: ()=> {}
};

console.log(`web:http://${devServer.host}:${devServer.port}/index.html`);
module.exports = devServer;
