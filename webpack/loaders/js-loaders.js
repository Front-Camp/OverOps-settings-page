module.exports = [
  {
    loader: 'babel-loader',
    options: {
      babelrc: false
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
];
