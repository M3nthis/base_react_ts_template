const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  // bundling mode
  mode: "production",

  // generate source map
  devtool: "source-map",

  // entry files
  entry: path.join(__dirname, "src", "index.tsx"),

  // Live changing
  // watch: true,

  // output bundles (location)
  output: {
    path: path.resolve(__dirname, "dist"),
    // filename: "main.js",
  },

  // Webpack-dev-server
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
    port: 3000,
  },

  // configure how modules are resolved
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".css"],
  },

  // loaders
  module: {
    rules: [
      {
        test: /\.tsx?/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
    ],
  },

  //Inject js to HTML index file
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, "public", "index.html"),
    }),
  ],

  // Avoid size exceeds the recommended limit
  performance: {
    hints: false,
    maxEntrypointSize: 512000,
    maxAssetSize: 512000,
  },
};
