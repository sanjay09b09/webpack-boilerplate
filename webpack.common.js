const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin  = require('mini-css-extract-plugin')
module.exports  = {

entry:"./src/index.js",
module:{
    rules:[
      
        {
            test:/\.js$/,
            use:['babel-loader']
        },
        {
            test:/\.(svg|png|jpg|gif)$/,
            use:{
                loader:'url-loader',
                options:{
                    limit:8000
            }}
        },
        {
            test:/\.scss$/,
            use:[MiniCssExtractPlugin.loader,'css-loader','sass-loader']
        }
    ]
},
plugins:[new MiniCssExtractPlugin({
    filename: '[name].css',
    chunkFilename: '[id].css',
  }),
    new HtmlWebpackPlugin({
        template:'./src/index.html'
    })
]

}