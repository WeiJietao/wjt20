const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const MODE = process.env.MODE;
const IP = '127.0.0.1';
const PORT = '2015';

const webpackConfig = {
    mode: MODE.toLowerCase(),
    entry: {
        'index': [
            path.resolve(__dirname, './src/entry.js')
        ],
        'vendor': [
            'react',
            'react-dom'
        ]
    },
    module: {
        rules: [
            {
                // 脚本打包
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                options: {
                    cacheDirectory: true,
                    plugins: ['react-hot-loader/babel']
                }
            },
            {
                // CSS样式表打包
                test: /\.(css|scss)$/,
                loaders: ExtractTextWebpackPlugin.extract({
                    use: [
                        'css-loader',
                        'postcss-loader',
                        'sass-loader'
                    ],
                    fallback: 'style-loader'
                })
            },
            {
                // 图像打包
                test: /\.(png|jpg|jpeg|gif)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                // 字体及svg打包
                test: /\.(woff|ttf|tff|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
                loader: 'file-loader'
            }
        ]
    },
    resolve: {
        alias: {},
        extensions: ['.jsx', '.js', '.scss', '.css', '.png', '.jpg'], // 最常匹配的放在最前面，减少查找
        modules: [ path.resolve(__dirname, './node_modules') ] // 直接指明第三方模块的绝对路径，减少查找
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
                }
            }
        }
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: '欢迎访问WJT20的博客',
            filename: path.resolve(__dirname, './index.html'),
            template: path.resolve(__dirname, './src/template.ejs'),
            hash: false,
            minify: false
        })
    ]
}

// 开发模式打包配置
function setDevMode() {
    // 独有插件
    webpackConfig.plugins.push(
        // 热更新
        new webpack.HotModuleReplacementPlugin(),

        // 分离的css文件不加hash
        new ExtractTextWebpackPlugin('[name].css'),

        // 注入常量
        new webpack.DefinePlugin({
            __DEV__: String(true)
        })
    );

    // dev工具
    webpackConfig.devtool = 'cheap-module-eval-source-map';

    // 热更新配置
    webpackConfig.entry.index.push(
        'react-hot-loader/patch',
        'babel-polyfill',
        'webpack-hot-middleware/client?path=http://127.0.0.1:2015/__webpack_hmr&timeout=20000&reload=true', // WebpackDevServer host and port
        'webpack/hot/only-dev-server' // "only" prevents reload on syntax errors
    );

    // 设置打包输出
    webpackConfig.output = {
        path: path.resolve(__dirname, './dist'),
        publicPath: './../dist/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    };
}

// 生产模式打包配置
function setProdMode() {
    // 独有插件
    webpackConfig.plugins.push(
        // 清除打包前的文件
        new CleanWebpackPlugin([
            'dist'
        ]),

        // 分离的css文件加hash
        new ExtractTextWebpackPlugin('[name].[hash:8].css'),
    );

    // 设置打包输出
    webpackConfig.output = {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'https://weijietao.github.io/wjt20/dist/',
        filename: '[name].[hash:8].js',
        chunkFilename: '[name].[hash:8].js'
    };
}

switch (MODE) {
    case 'DEVELOPMENT':
        setDevMode();
        break;
    case 'PRODUCTION':
        setProdMode();
        break;
    default:
        throw new Error('不存在此模式!');
}

module.exports = webpackConfig;
