const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

const config = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    rules: [
    {
      // exclude: /node_modules/,
      exclude: /node_modules(?!\/webpack-dev-server)/,
      test: /\.(js|jsx)$/,
      loader: 'babel-loader',
    },
    { test: /\.css$/i,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
      })
    },
    {
      test: /\.scss$/i,
      exclude: /node_modules/,
      use: ExtractTextPlugin.extract({
        use: ['css-loader', 'sass-loader']
      })
    },
    {
      test: /\.(png|jpg|gif)$/,
      use: [
        {
          loader: 'file-loader',
          options: {}  
        }
      ]
    },
    // {
    //   test: /\.svg$/,
    //   use: [
    //     {
    //       loader: 'file-loader'
    //     },
    //     {
    //       loader: 'svgo-loader',
    //       options: {
    //         plugins: [
    //           {removeTitle: true},
    //           {convertColors: {shorthex: false}},
    //           {convertPathData: false}
    //         ]
    //       }
    //     }
    //   ]
    // },
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJSPlugin({
      sourceMap: true,
      compress: {
        warnings: false,
        comparisons: false, // don't optimize comparisons
      }
    }),
    new ExtractTextPlugin({filename: 'src/public/stylesheets/app.css', allChunks: true})
  ],
};

module.exports = config;

// new webpack.optimize.UglifyJsPlugin({
//       compress: {
//         warnings: false,
//         screw_ie8: true,
//         conditionals: true,
//         unused: true,
//         comparisons: true,
//         sequences: true,
//         dead_code: true,
//         evaluate: true,
//         if_return: true,
//         join_vars: true,
//       },
//       output: {
//         comments: false,
//       },
//     }),

/*

{
      test: /\.scss$/,
      use: ExtractTextPlugin.extract({'css-loader!sass-loader'}),
    },

new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      mangle: false,
      sourcemap: false,
      minimize: true,
      mangle: { except: ['$super', '$', 'exports', 'require', '$q', '$ocLazyLoad'] },
    }),

*/