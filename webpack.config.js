const path = require("path");

module.exports = {
  // bundling mode
  mode: "production",

  // generate source map
  devtool: "source-map",

  // entry files
  entry: "./src/index.ts",

  // Live changing
  // watch: true,

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },

  // Webpack-dev-server
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },

  // file resolutions
  resolve: {
    extensions: [".ts", ".js"],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
};
