const webpack = require('webpack');
const { isDev } = require('./webpack.helpers');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  isDev() && new webpack.HotModuleReplacementPlugin(),
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    inject: true,
  }),
  new MiniCssExtractPlugin({
    filename: 'css/[name].[chunkhash].css',
    chunkFilename: 'css/[name].[chunkhash].chunk.css',
  }),
  new webpack.DefinePlugin({
    'process.env': JSON.stringify(process.env),
  }),
  new BundleAnalyzerPlugin({
    analyzerMode: process.env.ANALYZE_BUNDLE ? 'server' : 'disabled',
  }),
].filter(Boolean);
