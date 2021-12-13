'use strict';
const path = require('path');
const  config = {
  buildStaticRoot: path.resolve(__dirname,'./public'),
  buildOutputRoot: path.resolve(__dirname, './dist')
};


module.exports = config;

