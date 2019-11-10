const webpack = require('webpack');

module.exports = config => {
  // 这里改 webpack 配置, 比如 externals
  config.externals = {
    react: 'React',
    'react-dom': 'ReactDOM',
  };
  config.entry = {
    ...config.entry,
    'mycomponent': './src/index.js',
  };
  return config;
};
