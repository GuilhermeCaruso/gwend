const path = require('path');
const modoDev = process.env.NODE_ENV !== 'production'
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
      'main':'./src/index.js'
    },
      output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    },
    devServer: {
        contentBase: "./dist",
        port: 9000,
        publicPath:'/#/'
    },
    optimization: {
      minimizer: [
          new OptimizeCSSAssetsPlugin({}),
          new UglifyJsPlugin()
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'My App',
        filename: 'index.html',
        template: './index.html'
      }),
      new MiniCssExtractPlugin({
        filename: "[name].css",
        chunkFilename: "[id].css"
      })
    ],
    module:{
      rules: [
        {
          test:/\.m?js$/,
          exclude: /(node_modules)/,
          use:{
            loader: 'babel-loader',
            options:{
              presets:['@babel/preset-env']
            }
          }
        },
        {
          test: /\.(html)$/,
          use: {
            loader: 'html-loader',
            options: {
              minimize: true
            }
          }
        },
        {
          test: /\.s?[ac]ss$/,
          use: [
            MiniCssExtractPlugin.loader,
            'css-loader',
            "sass-loader"
          ]
        }
      ]
    }
  }
