const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    str: './src/str.js',
    arr: './src/arr.js',
    obj: './src/obj.js'
  },
  watch: true,
  output: {
    path: path.resolve(__dirname, 'js'),
    filename: '[name].js',
    publicPath: '/js/'
  }
};