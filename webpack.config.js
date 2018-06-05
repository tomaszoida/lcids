var webpack = require("webpack"),
  path = require('path');

module.exports = {
  entry: {
    "lcids": "./src/index",   
  },
  output: {
    path: __dirname,
    filename: "./dist/[name].js",
    library: "lcids",
    libraryTarget: "umd",
    umdNamedDefine: true
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.ts', '.js']
  },
  module: {
    rules: [
      {
        test: /\.ts/, loader: 'ts-loader', exclude: /node_modules/,
      }
    ]
  },
  plugins: [   
    new webpack.LoaderOptionsPlugin({
      minimize: false,
      debug: true
    }),    
  ]
}
