const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const cssLoaders = require('./loaders/css-loaders');
const jsLoaders = require('./loaders/js-loaders');

module.exports = {
  entry: [
    path.join(__dirname, '../src/app.tsx'),
  ],
  target: 'web',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx', '.ts']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|ts|jsx|tsx)?$/,
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
    new HtmlWebpackPlugin({
      template: path.resolve('index.html')
    })
  ],
  devServer: {
    contentBase: path.join(__dirname, '..', './dist'),
    compress: true,
    port: 3001,
    historyApiFallback: true
  }
};
