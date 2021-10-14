const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const ImageminPlugin = require('imagemin-webpack-plugin').default;

const { merge } = require('webpack-merge');

const paths = require('../paths');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'production',
  devtool: false,
  output: {
    path: paths.build,
    publicPath: '/',
    filename: 'js/[name].[contenthash].bundle.js',
  },
  entry: {
    index: {
      import: `${paths.src}/index.js`,
      dependOn: ['react', 'helpers']
    },
    react: ['react', 'react-dom', 'prop-types'],
    helpers: ['immer', 'nanoid']
  },
  module: {
    rules: [
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              sourceMap: false,
              modules: true,
            }
          },
          'sass-loader',
          'postcss-loader',
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash].css',
      chunkFilename: '[id].css'
    }),

    new ImageminPlugin({
      test: /\.(jpe?g|png|gif|svg)$/i
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [new CssMinimizerPlugin(), '...'],
    runtimeChunk: {
      name: 'runtime',
    },
  },
  performance: {
    hints: 'warning',
    maxEntrypointSize: 512000,
    maxAssetSize: 512000
  }
});

