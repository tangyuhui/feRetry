const webpack = require('webpack')
const path = require('path')
const TerserPlugin = require('terser-webpack-plugin');

const pkg = require('../package.json')
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

const rootPath = path.resolve(__dirname, '../')

// 转为驼峰
function toCamelCase(str) {
    return str
        .split(/[-_ ]+/) // 分割字符串
        .map((word, index) => {
            // 如果是第一个单词，返回原样，否则首字母大写
            return index === 0 ? word.toLowerCase() : word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        .join(''); // 合并单词
}

const config = {
    mode: 'production',
    entry: path.resolve(rootPath, 'src', 'index.js'),
    plugins: [
        // new BundleAnalyzerPlugin()   
    ],
    output: {
        filename: `${pkg.name}.min.js`,
        path: path.resolve(rootPath, 'dist'),
        library: toCamelCase(`${pkg.name}`),
        libraryTarget: "umd"
    },
    optimization: {
        minimizer: [new TerserPlugin()],
      },
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: "babel-loader"
        }]
    }
}

module.exports = config