const webpack = require('webpack');
const { merge } = require('webpack-merge');

const paths = require('../paths');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',

  devtool: 'inline-source-map',

  devServer: {
    compress: true,
    contentBase: paths.build,
    historyApiFallback: true,
    hot: true,
    open: true,
    port: 8080,
  },

  plugins: [new webpack.HotModuleReplacementPlugin()],
});
