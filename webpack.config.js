const path = require('path')
const HtmlwebpackPlugin = require('html-webpack-plugin')
module.exports = {
    mode:'development',

    entry:'./src/index.tsx',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'bundle.js'
    },

    devServer: {
        port: '3000',
        hot:true,
        open:true
    },

    
    //moduleのなかでこんな拡張子のファイルはこんな感じで処理しているという記述
    module: {
        rules:[
            {
                test: /\.js(x?)$/,
                loader:'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.ts(x?)$/,
                loader:'ts-loader',
                exclude: /node_modules/,
         }
        ]
    },
    plugins: [
        new HtmlwebpackPlugin({
            template: './src/index.html'
        })
    ],

    resolve: {
        extensions: ['.js','.ts','.tsx']
    }
    

}