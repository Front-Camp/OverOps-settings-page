const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: [
    path.join(__dirname, '../src/index.tsx'),
  ],
  target: 'web',
  mode: 'development',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    extensions: ['.js', '.jsx', '.tsx']
  },
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.(js|jsx|tsx)?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              // plugins: ['react-hot-loader/babel'],
            }
          },
          {
            loader: 'ts-loader',
            options: {
              transpileOnly: true,
              compilerOptions: {
                'sourceMap': true,
                'target': 'es5',
                'isolatedModules': true,
                'noEmitOnError': false
              },
            }
          }
        ],
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
