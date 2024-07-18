const cracoBabelLoader = require("craco-babel-loader");

module.exports = {
  plugins: [
    {
      plugin: cracoBabelLoader,
      options: {
        includes: [/[\\/]node_modules[\\/](relay-runtime|react-relay)[\\/]/],
        plugins: ["relay"],
      },
    },
  ],
};
