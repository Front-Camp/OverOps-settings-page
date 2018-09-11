module.exports = [
  {
    loader: 'babel-loader',
    query: {
      cacheDirectory: true
    }
  },
  {
    loader: 'eslint-loader',
    options: {
      emitWarning: true
      // eslint options (if necessary)
    }
  }
];