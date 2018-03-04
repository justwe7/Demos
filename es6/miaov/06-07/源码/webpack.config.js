const webpack = require('webpack');
const path = require('path');

module.exports = {
  context: __dirname,
  entry: './src/main.js',
  watch: true,
  output: {
    path: path.resolve(__dirname, './js'),
    filename: 'bundle.js',
    publicPath: '/js/'
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.jsx?$/,
  //       include: [
  //         path.resolve(__dirname, 'src')
  //       ],
  //       exclude: [
  //         /node_modules/
  //       ],
  //       loader: "babel-loader"
  //     }
  //   ]
  // }
};