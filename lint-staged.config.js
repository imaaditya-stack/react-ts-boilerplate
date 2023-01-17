module.exports = {
  '*.{ts,tsx,js,jsx}': ['eslint --fix'],
  '*.{ts,tsx,js,css,md}': ['prettier --write --ignore-path .eslintignore'],
};
