module.exports = [
  {
    loader: 'style-loader' // creates style nodes from JS strings
  },
  {
    loader: 'css-loader', // translates CSS into CommonJS
    query: {
      modules: true,
      camelCase: true,
      localIdentName: '[name]__[local]___[hash:base64:5]'
    }
  },
  {
    loader: 'sass-loader' // compiles Sass to CSS
  }
];
