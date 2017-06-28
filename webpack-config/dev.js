/**
 * Created by Administrator on 2017/6/27.
 */
const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const htmlWebpackPlugin = require('html-webpack-plugin');

const baseConfig = require('./base');

const basePath = path.resolve(__dirname, '../demo/');
const config = {
    entry: {
    },
    output: {
        filename: 'scripts/[name].bundle.js',
        publicPath: '/'
    },
    devtool: 'eval-source-map',
    devServer: {
        overlay: true,
        publicPath: '/',
        compress: true
    },
    module: {
        rules: [{
            test: /\.css$/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new htmlWebpackPlugin({
            title: 'development page',
            filename: 'index.html',
            template: path.resolve(__dirname, './index.pug')
        })
    ]
};

module.exports = webpackMerge(baseConfig, config);