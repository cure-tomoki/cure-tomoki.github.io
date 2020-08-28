const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;

const package = require('./package.json');

const target = process.env.NODE_ENV || 'development';
const isDev = target === 'development';
const isProd = target === 'production';

const resolve = (dir) => path.resolve(__dirname, dir);

module.exports = {
  mode: target,
  target: 'web',
  entry: {
    main: './src/index.tsx',
  },
  output: {
    path: resolve('dist/public'),
    filename: '[name].[contenthash].js',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      '~': resolve('src'),
    },
  },
  devtool: isDev && 'inline-source-map',
  devServer: {
    contentBase: resolve('dist'),
    compress: true,
    port: 3000,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.ENV': JSON.stringify(target),
      'process.env.VERSION': JSON.stringify(package.version),
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html',
      scriptLoading: 'defer',
    }),
    new BundleAnalyzerPlugin({
      analyzerMode: 'disabled',
      generateStatsFile: isProd,
      statsFilename: isProd && resolve('stats.json'),
    }),
  ],
};
