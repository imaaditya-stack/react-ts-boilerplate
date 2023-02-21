const { createWebpackAliases } = require('./helpers');

module.exports = createWebpackAliases({
  '@assets': 'assets',
  '@src': 'src',
});
