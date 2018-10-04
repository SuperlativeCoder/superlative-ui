const path = require('path')
const webpack = require('webpack')
const UglifyjsPlugin = require('uglifyjs-webpack-plugin');
const env = process.env

const config = {
  mode: env.NODE_ENV ? 'production' : 'development',
  entry: path.resolve(__dirname, 'components/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].min.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader'
      }
    }, {
      test: /\.ts$/,
      exclude: /node_modules/,
      use: {
        loader: 'ts-loader'
      }
    }]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        resolve: {
          extensions: ['', '.ts', '.tsx']
        }
      }
    })
  ],
  //压缩js
  optimization: {
    minimizer: [
      new UglifyjsPlugin({
        uglifyOptions: {
          compress: false
        }
      })
    ]
  },
  resolve: {
    extensions: ['.ts', '.tsx'] ,
    modules: ['src' ,'node_modules']
  } ,
  devtool: env.NODE_ENV ? 'source-maps' : 'eval',
}

module.exports = config
