/**
 * Created by Administrator on 2017/6/27.
 */
const path = require('path');
const webpack = require('webpack');
const basePath = path.resolve(__dirname, '../demo/');

module.exports = {
    entry: {
        vue: 'vue',
        vueAwesomeIcons: 'vue-awesome/icons',
        vueAwesomeComponents: 'vue-awesome/components/Icon',
        main: path.resolve(basePath, './index.js')
    },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            use: ['babel-loader']
        }, {
            test: /\.vue$/,
            use: ['vue-loader']
        }, {
            test: /\.less$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader', 'less-loader']
        }, {
            test: /\.pug$/,
            use: ['pug-loader']
        }, {
            test: /\.html$/,
            use: [{
                loader: 'html-loader',
                options: {
                    minimize: true
                }
            }],
        }, {
            test: /\.(jpe?g|png|gif|svg)$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    publicPath: '/',
                    name: 'assets/images/[hash].[ext]'
                }
            }]
        }, {
            test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
            use: [{
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    publicPath: '/',
                    name: 'assets/images/[hash].[ext]'
                }
            }]
        }]
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            names: ['vueAwesomeIcons', 'vueAwesomeComponents', 'vue', 'menifest'],
            minChunks: Infinity
        })
    ],
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            '@': path.resolve(__dirname, '../src/'),
            'vue$': 'vue/dist/vue.js',
        }
    }
};