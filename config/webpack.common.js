const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: {
    'scripts/app': path.resolve(__dirname, '../src/index.js')
  },

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name]-[chunkHash:6].js'
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            // 插件的集合
            presets: [
              [
                '@babel/preset-env',
                // {
                //   "targets": {
                //     "chrome": "58",
                //     "ie": "11"
                //   },
                //   "useBuiltIns": "usage"
                // }
                {
                  "targets": {
                    "chrome": "58",
                    "ie": "11"
                  },
                  useBuiltIns: "usage", // or "usage"，见如下说明
                  corejs: 3,
                }
              ],
              '@babel/preset-react'
            ],
            plugins: [
              ["@babel/plugin-proposal-decorators", { "legacy": true }],
              ["@babel/plugin-proposal-class-properties", { "loose": true }],
              ["import", { libraryName: "antd-mobile", style: "css" }]
            ]
          }
        }
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /(node_modules|bower_components)/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              hmr: process.env.NODE_ENV === 'development',
            },
          }, 
          {
            loader: 'css-loader'
          },
          {
            loader: "postcss-loader",
            options: { 
              ident: "postcss", 
              plugins: () => [require("postcss-preset-env")()]
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      },
      {
        test: /\.(less|css)$/,
        loaders: ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.(jpg|jpeg|png|gif)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8000000,
            name: '[name]-[hash:6].[ext]',
            outputPath: 'images/'
          }
        }
      },
      {
        test: /\.(woff|ttf)$/,
        use: {
          loader: 'file-loader',
          options: {
            limit: 8000000,
            name: '[name]-[hash:6].[ext]',
            outputPath: 'iconfont/'
          }
        }
      }
    ]
  },

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '../src/components'),
      'pages': path.resolve(__dirname, '../src/pages'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'utils': path.resolve(__dirname, '../src/utils')
    },

    extensions: [".js", ".jsx", ".json", ".css"]
  },

  plugins: [
    new HtmlWebpackPlugin({
      title: 'webpack-demo',
      template: path.resolve(__dirname, '../public/index.ejs'),
      filename: 'index.html'
    }),

    new MiniCssExtractPlugin({
      moduleFilename: ({ name }) => {
        return `${name.replace('scripts', 'styles')}-[hash:6].css`
      },
    }),

    new CleanWebpackPlugin()
  ],

  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  }
}