const jsLoaders = require('../webpack/loaders/js-loaders');
const cssLoaders = require('../webpack/loaders/css-loaders');

module.exports = (baseConfig, env, defaultConfig) => {
  defaultConfig.module.rules.push({
    test: /\.(js|jsx)?$/,
    use: jsLoaders,
    exclude: [/(node_modules)/]
  });

  defaultConfig.module.rules.push({
    test: /\.scss$/,
    use: cssLoaders,
    exclude: [/(node_modules)/]
  });

  return defaultConfig;
};
