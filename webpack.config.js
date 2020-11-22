const HtmlWebPackPlugin = require("html-webpack-plugin");
const { ModuleFederationPlugin  } = require('webpack').container;

module.exports = {

  entry: {
    index: "./src/index.js",
  },

  output: {
    publicPath: 'http://localhost:12500'
  },

  devServer: {
    port: 12500,
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
    new ModuleFederationPlugin({
      // 唯一ID，用于标记当前服务
      name: 'app1',
      // 提供给其他服务加载的文件
      filename: 'remoteEntry.js',
      // 需要暴露的模块，使用时通过 `${name}/${expose}` 引入
      exposes: {
        ZYHeader: './src/components/zy-header/ZYHeader',
      },
    }),
    new HtmlWebPackPlugin({
      template: "./src/index.html",
      chunks: ["index"],
    }),
  ],
};
