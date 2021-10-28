const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');
const webpack = require('webpack');

const paths = require('../paths');

const babelLoader = {
  loader: 'babel-loader',
  options: {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: ['@babel/plugin-proposal-class-properties'],
  },
};

module.exports = {
  entry: [`${paths.src}/App.tsx`],
  output: {
    path: paths.build,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  plugins: [
    new CleanWebpackPlugin(),

    new CopyWebpackPlugin({
      patterns: [
        {
          from: `${paths.public}/assets`,
        },
      ],
    }),

    new HtmlWebpackPlugin({
      title: 'webpack setting',
      template: `${paths.src}/template.html`,
      filename: 'index.html',
    }),

    new ESLintPlugin({
      files: ['.', 'src', 'config'],
      formatter: 'table',
    }),

    new webpack.ProvidePlugin({
      React: 'react',
    }),
  ],
  resolve: {
    modules: [paths.src, 'node_modules'],
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      '@': paths.src,
    },
  },
  module: {
    rules: [
      { test: /\.js$/, use: ['babel-loader'] },
      {
        test: /\.m?jsx?$/i,
        exclude: /node_modules/,
        use: babelLoader,
      },

      {
        test: /.tsx?$/i,
        exclude: /node_modules/,
        use: [babelLoader, 'ts-loader'],
      },

      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: { importLoaders: 1 },
          },
          'sass-loader',
        ],
      },

      {
        test: /\.(jpe?g|png|gif|svg|eot|ttf|woff2?)$/i,
        type: 'asset',
      },
    ],
  },

  experiments: {
    topLevelAwait: true,
    outputModule: true,
  },
};
