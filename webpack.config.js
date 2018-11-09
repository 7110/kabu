module.exports = {
  mode: "production",
  entry: "./src/kabu.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "kabu.js",
    library: undefined,
    libraryTarget: "umd"
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader",
        type: "javascript/auto"
      }
    ]
  }
};
