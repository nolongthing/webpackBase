const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
// const Merge = require("webpack-merge");

module.exports = {
    mode: 'development',
    //入口
    entry: __dirname + '/src/APP.tsx',
    //出口
    output: {
        path: __dirname + '/dist',
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: {
                    loader: 'ts-loader'
                }
            },
            { 
                test:/\.less$/,
                use: ['style-loader','css-loader','less-loader']
            },
            { 
                test:/\.css$/,
                use: ['style-loader','css-loader']
            },
        ]
    },
    resolve: {
        extensions: [".ts", ".tsx", ".js"],    //添加支持的文件类型
        alias: {
            "@": __dirname + "/src",
            // "@component": __dirname + "src/component",
            "@pages": __dirname + "/src/pages",
            // "@utils": __dirname + "src/utils",
        },
    },
    devServer: {
        inline: true,
        port: 8080,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}