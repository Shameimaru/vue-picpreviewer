/**
 * Created by Administrator on 2017/6/27.
 */
const devConfig = require('./webpack-config/dev');
const prodConfig = require('./webpack-config/prod');

let config = {};

const ENV = process.env.NODE_ENV;

switch(ENV) {
    case 'dev':
        config = devConfig;
        break;
    case 'prod':
        config = prodConfig;
        break;
    default:
        config = devConfig;
}

module.exports = config;