module.exports = {
  mode: "production",
  entry: "./src/kabu.js",
  output: {
    path: `${__dirname}/dist`,
    filename: "kabu.js"
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
