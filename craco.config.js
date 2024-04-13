// craco.config.js
module.exports = {
  configureWebpack: (webpackConfig) => {
    webpackConfig.resolve.fallback = {
      "crypto": require.resolve('crypto-browserify'),
      "http": require.resolve("stream-http"),
      // Add other desired fallbacks here
    };

    return webpackConfig;
  }
};
