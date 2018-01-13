const path = require('path');
// const webpack = require('webpack');  //加载webpack依赖包
module.exports = {
    entry: './pubilc/main.js',
    //入口文件并添加了热加载
    output: {
        path:  '/',
        filename: 'bundle.js'  //输出文件
    },
    module: {
        loaders: [
            {
                test: /\.js?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'},
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                loader: 'url-loader',
            }
        ]
    },
    devServer: {
        // port: 8080 ,//设置监听端口（默认的就是8080）
        contentBase: "./",//本地服务器所加载的页面所在的目录
        // colors: true,//终端中输出结果为彩色
        historyApiFallback: true,//不跳转，用于开发单页面应用，依赖于HTML5 history API 设置为true点击链接还是指向index.html
    },
    // plugins: [
    //     new webpack.HotModuleReplacementPlugin()
    // ],
    // "plugins": [
    //     ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` 会加载 less 文件
    // ],
    resolve: {
        extensions: [ ' ','.js', '.json', '.scss', '.ts']
    }
};