/**
 * Created by Administrator on 2017/6/27.
 */
const path = require('path');
const webpackMerge = require('webpack-merge');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const baseConfig = require('./base');

const basePath = path.resolve(__dirname, '../src');
console.log(path.resolve(basePath, '../dist'));

const config = {
    output: {
        filename: '[name].bundle.[chunkhash].js',
        path: path.resolve(basePath, '../dist'),
        publicPath : '/'
    },
    module: {
        rules: [
            {
                test: /\.css/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        // 'postcss-loader',
                    ]
                })
            }, {
                test: /\.less/,
                exclude: /node_modules/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                minimize: true
                            }
                        },
                        // 'postcss-loader',
                        'less-loader'
                    ]
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin({
            filename: "bundle.[chunkhash].css"
        })
    ],
};

module.exports = webpackMerge(baseConfig, config);