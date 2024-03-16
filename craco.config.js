module.exports = {
  // ... other configuration options 
  configure: (webpackConfig, { env, paths }) => {
    // ... other configuration logic

    // Add crypto polyfill
    webpackConfig.resolve.fallback = {
      ...webpackConfig.resolve.fallback,
      "crypto": require.resolve('crypto-browserify'),
    };

    // Add http polyfill (merging with existing fallbacks)
    webpackConfig.resolve.fallback = {
      ...webpackConfig.resolve.fallback,
      "http": require.resolve("stream-http")
    };

    return webpackConfig; 
  }
};
