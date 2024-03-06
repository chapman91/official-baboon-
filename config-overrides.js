// customizing webpack configuration


const { override } = require('react-app-rewired');

// 'override'is an higher order function 
// 'override' function is capable of modifying webpack config
//  exports module using config function

module.exports = override((config, env) => {
    // A fallback for 'crypto' for webpack if it does not locate crypto module in normal location
  config.resolve.fallback = {
    crypto: require.resolve('crypto-browserify'),
  };
  return config;
});
