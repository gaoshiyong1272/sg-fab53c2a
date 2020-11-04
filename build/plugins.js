'use strict';
let plugins = [];
if(process.env.NODE_ENV === 'development') {
  plugins = plugins.concat(
    require('./plugins/copy-public-plugin'),
  )
}

if(process.env.NODE_ENV === 'production'){
  plugins = plugins.concat(
    require('./plugins/clean-plugin'),
    require('./plugins/copy-public-plugin'),
  )
}

module.exports= plugins;
