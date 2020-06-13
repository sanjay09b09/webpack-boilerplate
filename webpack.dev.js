const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
module.exports = merge(common, {
    mode: 'development',
    devtool: 'eval-cheap-module-source-map',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'bundle')
    },
    devServer:{
        port:3000,
        hot: true
    }
})