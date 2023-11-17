const path = require('path');
const package = require('./package.json')
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  mode: "production",
  devtool: "inline-source-map",
  entry: {
    main: "./src/main.ts",
  },
  output: {
    path: path.resolve(__dirname, './latest_build'),
    filename: package.name + ".js", // <--- Will be compiled to this single file
    library: 'SeaPicklelib',
    libraryTarget: 'umd',
        globalObject: 'this',
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js"],
  },
  module: {
    rules: [
      { 
        test: /\.tsx?$/,
        loader: "ts-loader"
      },
      {
        test: /\.(png|jpg|gif)$/i,
        type: 'asset/inline'
      }
        
    ]
  },
  optimization: {
    minimizer: [new TerserPlugin({
      extractComments: false,
    })],
  }
};
