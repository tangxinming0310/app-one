const HtmlWebPackPlugin = require("html-webpack-plugin");

module.exports = {

  entry: {
    index: "./src/index.js",
  },

  devServer: {
    port: 8081,
    disableHostCheck: true,
  },

  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  plugins: [
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      chunks: ["index"],
    }),
  ],
};
