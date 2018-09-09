const path = require('path');

module.exports = [
  {
    loader: 'style-loader' // creates style nodes from JS strings
  },
  {
    loader: 'css-loader', // translates CSS into CommonJS
    options: {
      modules: true,
      camelCase: true,
      importLoaders: 2,
      localIdentName: '[name]__[local]___[hash:base64:5]'
    }
  },
  {
    loader: 'sass-loader', // compiles Sass to CSS
    options: {
      sourceMap: true
    }
  },
  {
    loader: 'sass-resources-loader',
    options: {
      resources: [
        path.resolve(__dirname, '../../src/styles/main.scss'),
        path.resolve(__dirname, '../../src/styles/utils/mixins.scss'),
      ]
    }
  }
];
