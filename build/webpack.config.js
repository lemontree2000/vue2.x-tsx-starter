const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const { VueLoaderPlugin } = require("vue-loader");
const { ProgressPlugin } = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: {
    app: ["./src/main.ts"],
  },
  output: {
    filename: "[name].[hash].js",
    path: path.resolve(__dirname, "../dist"),
    publicPath: "/",
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: "babel-loader",
          },
          {
            loader: "ts-loader",
            options: {
              transpileOnly: true,
              appendTsSuffixTo: ["\\.vue$"],
              happyPackMode: true,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: [{ loader: "vue-loader" }],
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.less$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          { loader: "less-loader" },
          {
            loader: "sass-resources-loader",
            options: {
              sourceMap: true,
              resources: [
                path.resolve(__dirname, "../src/styles/variables.less"),
              ],
            },
          },
          { loader: "postcss-loader" },
        ],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        use: [
          {
            loader: "url-loader",
            options: { esModule: false },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{ loader: "url-loader" }],
      },
    ],
  },
  resolve: {
    // 将 `.ts` 添加为一个可解析的扩展名。
    extensions: [".ts", ".tsx", ".js"],
    alias: {
      "@": path.resolve(__dirname, "../src/"),
    },
  },
  optimization: {
    splitChunks: {
      chunks: "all",
    },
  },
  plugins: [
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      title: "title",
      template: path.resolve(__dirname, "../public/index.html"),
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, "../public"),
          to: path.resolve(__dirname, "../dist"),
          toType: "dir",
        },
      ],
    }),
  ],
};
