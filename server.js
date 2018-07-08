const path = require('path');
const express = require('express');
const Webpack = require('webpack');
const WebpackDevMiddleware = require('webpack-dev-middleware');
const WebpackHotMiddleware = require('webpack-hot-middleware'); // 用法: https://github.com/webpack-contrib/webpack-hot-middleware
const config = require('./webpack.config.js');

const app = new express();
const host = '127.0.0.1';
const port = 2015;
const compiler = Webpack(config);

/*
 * 中间件
 */
// webpack-dev中间件
app.use(WebpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    hot: true,
    stats: {
        colors: true
    }
}));

// 热更新
app.use(WebpackHotMiddleware(compiler));

// 静态资源
app.use('/dist', express.static(path.join(__dirname, './dist')));

/*
 * 路由
 */
app.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, './index.html'));
});


app.listen(port, host);
