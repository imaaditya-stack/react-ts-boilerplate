require('dotenv').config();
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: ['./src/index.tsx'],
  module: {
    rules: require('./rules'),
  },
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].chunk.js',
  },
  plugins: require('./plugins'),
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: require('./aliases'),
  },
  stats: 'errors-warnings',
  devtool: 'source-map',
  devServer: {
    hot: true,
    open: true,
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        terserOptions: {
          sourceMap: true,
        },
      }),
    ],
    splitChunks: {
      chunks: 'all',
    },
  },
  performance: {
    hints: false,
  },
};
