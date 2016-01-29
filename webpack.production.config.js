var path = require('path');
var webpack = require('webpack');
var node_modules_dir = path.resolve(__dirname, 'node_modules');
module.exports = {
  devtool: 'eval',
  entry: {
    app:path.resolve(__dirname, 'src/index.js'),
    vendors:["react"]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'app.js'
  },
  plugins: [
   new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js')
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel?presets[]=react,presets[]=es2015'],
      exclude: [node_modules_dir]
    }, {
      test: /\.css$/, // Only .css files
      loader: 'style!css' // Run both loaders
    },
    
    // LESS
    {
      test: /\.less$/,
      loader: 'style!css!less'
    },

    // SASS
    {
      test: /\.scss$/,
      loader: 'style!css!sass'
    }]
  }
};