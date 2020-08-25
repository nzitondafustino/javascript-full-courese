const path = require('path');
const htmlWebPackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry:['./src/index.js'],

    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'bundel.js'
    },
    devServer:{
        contentBase:'./dist'
    },
    module:{
        rules:[
            {
                test:/\.js$/,
                loader:'babel-loader',
                exclude:/node_modules/,
                options:{
                    presets:['@babel/preset-env']
                }
            },
            {
                test:/\.scss$/,
                use:[MiniCssExtractPlugin.loader, 'css-loader','sass-loader']
            },
            {
                test:/\.html$/,
                loader:'html-loader'
            },
            {
                test:/\.(png|jpe?g|gif)$/i,
                loader:'file-loader',
                options:{
                    filename:'[name].[ext]',
                    outputPath:'img/',
                    publicPath:'./src/img/'
                }
            }
        ]
    },
    plugins:[
        new htmlWebPackPlugin({
            template:'./src/index.html',
            filename:'index.html'
        }),
        new MiniCssExtractPlugin(),
    ]
}