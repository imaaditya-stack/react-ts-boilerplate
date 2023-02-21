const webpack = require('webpack');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = [
  new ForkTsCheckerWebpackPlugin(),
  new HtmlWebpackPlugin({
    template: 'public/index.html',
    favicon: 'public/React-icon.png',
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
    analyzerMode: process.env.BUNDLE_ANALYZE ? 'server' : 'disabled',
    analyzerPort: 8989,
  }),
].filter(Boolean);
