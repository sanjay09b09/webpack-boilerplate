const path = require('path')
const common = require('./webpack.common')
const merge = require('webpack-merge')
const {CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
    mode: 'production',
    optimization: {
        minimizer:[new OptimizeCssAssetsPlugin(), new TerserPlugin()]
      },
      devtool: 'cheap-source-map',
    output: {
        filename: 'bundle.[contentHash].js',
        path: path.resolve(__dirname, 'bundle')
    },

    plugins:[new CleanWebpackPlugin()]
}) 