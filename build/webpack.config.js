const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const { VueLoaderPlugin } = require('vue-loader')
const { ProgressPlugin } = require('webpack')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const PreloadPlugin = require('preload-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

const DotevnPlugin = require('./dotenv.plugin')
const config = require('./config')
const isProd = process.env.NODE_ENV === 'production'
const resloveCssPoader = () => isProd ? MiniCssExtractPlugin.loader : 'style-loader'

module.exports = {
  entry: {
    app: ['./src/main.ts']
  },
  output: {
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
    publicPath: './'
  },
  module: {
    noParse: /^(vue|vue-router|vuex)$/,
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'ts-loader',
            options: {
              appendTsSuffixTo: ['\\.vue$']
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        use: [{ loader: 'vue-loader' }]
      },
      {
        test: /\.(vue|(j|t)sx?)$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          extensions: ['.js', '.jsx', '.vue', '.ts', '.tsx'],
          cache: false,
          emitWarning: false,
          emitError: false
        }
      },
      {
        test: /\.css$/,
        use: [
          resloveCssPoader(),
          { loader: 'css-loader' },
          { loader: 'postcss-loader' }
        ]
      },
      {
        test: /\.less$/,
        use: [
          resloveCssPoader(),
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'less-loader' },
          {
            loader: 'sass-resources-loader',
            options: {
              sourceMap: true,
              resources: [
                path.resolve(__dirname, '../src/styles/variables.less')
              ]
            }
          }
        ]
      },
      {
        test: /\.(png|svg|jpg|gif|webp)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              esModule: false,
              limit: 4096,
              fallback: {
                loader: 'file-loader',
                options: {
                  name: 'img/[name].[hash:8].[ext]'
                }
              }
            }
          }
        ]
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/,
        use: [{ loader: 'url-loader' }]
      }
    ]
  },
  resolve: {
    // 将 `.ts` 添加为一个可解析的扩展名。
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '@': path.resolve(__dirname, '../src/')
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  plugins: [
    new DotevnPlugin(),
    new HtmlWebpackPlugin({
      title: config.documentTitle,
      template: path.resolve(__dirname, '../public/index.html')
    }),
    new ProgressPlugin(),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new PreloadPlugin({
      rel: 'preload',
      include: 'initial',
      fileBlacklist: [/\.map$/, /hot-update\.js$/]
    }),
    new PreloadPlugin({
      rel: 'prefetch',
      include: 'asyncChunks'
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, '../public'),
          to: path.resolve(__dirname, '../dist'),
          toType: 'dir',
          noErrorOnMissing: true, // 当目录为空时不会报错
          globOptions: {
            dot: true,
            ignore: ['**/index.html']
          }
        }
      ]
    })
  ]
}
