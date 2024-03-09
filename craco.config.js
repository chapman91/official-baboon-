// module.exports is provided by the CommonJS module system


module.exports = {
  // ... configuration options 
  configure: (webpackConfig, { env, paths }) => {
    // ... configuration logic
    webpackConfig.resolve.fallback = {
      crypto: require.resolve('crypto-browserify'),
    };
    //
    return webpackConfig; 
  }


};