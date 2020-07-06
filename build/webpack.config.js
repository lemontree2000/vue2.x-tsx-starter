const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "production",
  entry: "./src/index.js",
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: "style-loader" }, { loader: "css-loader" }],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [{ loader: "url-loader" }],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{ loader: "url-loader" }],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "html inject title",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
  ],
};
