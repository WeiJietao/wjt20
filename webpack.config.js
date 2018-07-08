const webpack = require('webpack');
const path = require('path');
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const MODE = process.env.MODE;
const PORT = 2015;

const webpackConfig = {
    mode: MODE.toLowerCase(),
    entry: {
        'vendor': [
            'react',
            'react-dom',
            'react-router'
        ]
    },
    module: {
        rules: [
            {
                // 脚本打包
                test: /\.(js|jsx)$/,
                loader: 'babel-loader'
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
    // resolve: {
    //     alias: {},
    //     extensions: ['.jsx', '.js', '.scss', '.css', '.png', '.jpg'], // 最常匹配的放在最前面，减少查找
    //     modules: [ path.resolve(__dirname, './node_modules') ] // 直接指明第三方模块的绝对路径，减少查找
    // },
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
        // 注入常量
        new webpack.DefinePlugin({
            __DEV__: String(MODE === 'DEVELOPMENT')
        })
    ]
}

// 开发模式打包配置
function setDevMode() {
    // 额外插件
    webpackConfig.plugins.push(
        // 热更新
        new webpack.HotModuleReplacementPlugin(),

        // 分离的css文件不加hash
        new ExtractTextWebpackPlugin('[name].css'),

        // 配置页面模板
        new HtmlWebpackPlugin({
            title: '欢迎访问WJT20的博客',
            filename: path.resolve(__dirname, './dist/index.html'),
            template: path.resolve(__dirname, './src/template.ejs'),
            hash: false,
            minify: false
        })
    );

    // dev工具
    webpackConfig.devtool = 'cheap-module-eval-source-map';

    // 开发模式server
    webpackConfig.devServer = {
        contentBase: path.resolve(__dirname, './dist'),
        port: PORT,
        historyApiFallback: true,
        inline: true,
        hot: true
    };

    // 设置打包入口
    webpackConfig.entry.index = [
        path.resolve(__dirname, './src/entry.js'),
        'react-hot-loader/patch',
        'babel-polyfill',
        'webpack-dev-server/client',
        'webpack/hot/only-dev-server'
    ];

    // 设置打包出口
    webpackConfig.output = {
        path: path.resolve(__dirname, './dist'),
        publicPath: '/',
        filename: '[name].js',
        chunkFilename: '[name].js'
    };
}

// 生产模式打包配置
function setProdMode() {
    // 额外插件
    webpackConfig.plugins.push(
        // 清除打包源文件
        new CleanWebpackPlugin([
            'dist'
        ]),

        // 分离的css文件加hash
        new ExtractTextWebpackPlugin('[name].css'),

        // // 配置页面模板
        // new HtmlWebpackPlugin({
        //     title: '欢迎访问WJT20的博客',
        //     filename: path.resolve(__dirname, './home.html'),
        //     template: path.resolve(__dirname, './src/template.ejs'),
        //     hash: false,
        //     minify: false
        // }),
        // new HtmlWebpackPlugin({
        //     title: '欢迎访问WJT20的博客',
        //     filename: path.resolve(__dirname, './article.html'),
        //     template: path.resolve(__dirname, './src/template.ejs'),
        //     hash: false,
        //     minify: false
        // })
    );

    // TODO 设置打包入口，需优化
    webpackConfig.entry['home/index'] = [
        path.resolve(__dirname, './src/router/Home/entry.js')
    ];
    webpackConfig.entry['article/index'] = [
        path.resolve(__dirname, './src/router/ArticleCont/entry.js')
    ];

    // 设置打包出口
    webpackConfig.output = {
        path: path.resolve(__dirname, './dist'),
        publicPath: 'https://weijietao.github.io/wjt20/dist/',
        filename: '[name].js',
        chunkFilename: '[name].js'
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
