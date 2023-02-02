const HtmlWebpackPlugin = require("html-webpack-plugin");

/**
 * path which is a Node build in package that handles file paths in a node project
 */
const path = require("path");

module.exports = {
  /**
   * specifies the main file (the entry) of our application which will be the index.js file.
   */
  entry: "./index.js",

  mode: "development",

  /**
   * specifies where Webpack will put it's files after bundling and we specify
   * the path and the file name of that Webpack bundle
   */
  output: {
    path: path.resolve(__dirname, "./dist"),
    filename: "index_bundle.js",
  },

  target: "web",

  devServer: {
    port: "5000",
    static: {
      directory: path.join(__dirname, "public"),
    },
    open: true,
    hot: true,
    liveReload: true,
  },

  resolve: {
    extensions: [".js", ".jsx", ".json"],
  },

  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: "babel-loader",
      },
    ],
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],
};
