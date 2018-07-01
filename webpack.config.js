let webpack = require("webpack");
let path = require("path");
let ExtractTextWebpackPlugin = require("extract-text-webpack-plugin");
let HtmlWebpackPlugin = require("html-webpack-plugin");
let CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    mode: "production",
    entry: {
        "index": [
            path.resolve(__dirname, "./src/entry.js")
        ],
        "vendor": [
            "react",
            "react-dom"
        ],
    },
    output: {
        path: path.resolve(__dirname, "./dist"),
        publicPath: "./../dist/",
        filename: "[name].[hash:8].js",
        chunkFilename: "[name].[hash:8].js",
    },
    module: {
        rules: [
            {
                // 脚本打包
                test: /\.(js|jsx)$/,
                loader: "babel-loader",
            },
            {
                // CSS样式表打包
                test: /\.(css|scss)$/,
                loaders: ExtractTextWebpackPlugin.extract({
                    use: [
                        "css-loader",
                        "postcss-loader",
                        "sass-loader"
                    ],
                    fallback: "style-loader",
                }),
            },
            {
                // 图像打包
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: "url-loader?limit=8192",
            },
            {
                // 字体及svg打包
                test: /\.(woff|ttf|tff|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: "file-loader",
            }
        ]
    },
    optimization: {
        splitChunks: {
            cacheGroups: {
                vendor: {   // 抽离第三方插件
                    test: /node_modules/,   // 指定是node_modules下的第三方包
                    chunks: 'initial',
                    name: 'vendor',  // 打包后的文件名，任意命名
                    // 设置优先级，防止和自定义的公共代码提取时被覆盖，不进行打包
                    priority: 10
                },
            }
        }
    },
    plugins: [
        new ExtractTextWebpackPlugin("[name].[hash:8].css"),
        new HtmlWebpackPlugin({
            title: "WJT20 index",
            filename: path.resolve(__dirname, "./index.html"),
            template: path.resolve(__dirname, "./src/template.ejs"),
            hash: false,
            minify: false,
        }),
        new CleanWebpackPlugin([
            "dist"
        ]),
        new webpack.HotModuleReplacementPlugin()
    ],
    devServer: {
        inline: true, // 打包后加入一个websocket客户端
        hot: true, // 热加载
        contentBase: path.resolve(__dirname), // 开发服务运行时的文件根目录
        host: "localhost", // 主机地址
        port: 2015, // 端口号
        compress: true, // 开发服务器是否启动gzip等压缩
    },
}

console.log(process.env.MODE);

// https://weijietao.github.io/wjt20/
