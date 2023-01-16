const { isDev } = require('./webpack.helpers');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = [
  {
    // Typescript loader
    test: /\.(js|jsx|ts|tsx)$/,
    exclude: /(node_modules|\.webpack)/,
    use: {
      loader: 'babel-loader',
      options: {
        configFile: './tools/babel/.babelrc',
      },
    },
  },
  {
    // CSS Loader
    test: /\.css$/,
    use: [
      { loader: isDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
    ],
  },
  {
    // SCSS (SASS) Loader
    test: /\.s[ac]ss$/i,
    use: [
      { loader: isDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
      { loader: 'sass-loader' },
    ],
  },
  {
    // Less loader
    test: /\.less$/,
    use: [
      { loader: isDev() ? 'style-loader' : MiniCssExtractPlugin.loader },
      { loader: 'css-loader' },
      { loader: 'less-loader' },
    ],
  },
  {
    test: /\.(gif|jpe?g|tiff|png|webp|bmp|svg|eot|ttf|woff|woff2)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/[hash][ext][query]',
    },
  },
];
