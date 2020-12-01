'use strict';

const config = require('../../config');
const CopyWebpackPlugin = require('copy-webpack-plugin');
let patterns = [
    {
        from: config.buildStaticRoot,
        to: config.buildOutputRoot,
        ignore: ['.*'],
    },
];

module.exports = new CopyWebpackPlugin(patterns);
