const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssLoaders = require('./loaders/css-loaders');
const jsLoaders = require('./loaders/js-loaders');
const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, '../src/app.jsx'),
  ],
  target: 'web',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        use: jsLoaders,
        exclude: [/(node_modules)/]
      },
      {
        test: /\.scss$/,
        use: cssLoaders,
        exclude: [/(node_modules)/]
      }
    ]
  },
  plugins: [
    new StyleLintPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve('index.html')
    })
  ],
  devServer: {
    compress: true,
    publicPath: '/',
    contentBase: path.join(__dirname, '..', './dist'),
    port: 3001,
    historyApiFallback: true
  }
};
