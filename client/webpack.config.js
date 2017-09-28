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
<<<<<<< HEAD
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
=======
      {
        // exclude: /node_modules/,
        exclude: /node_modules(?!\/webpack-dev-server)/,
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
      },
      // added code to work with svg
      // {
      //   test: /\.jsx?$/, // Match both .js and .jsx files
      //   exclude: /node_modules/,
      //   loader: 'babel-loader',
      //   query: {
      //     presets: ['react'],
      //   },
      // },
      {
        test: /\.css$/i,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader',
        }),
      },
      {
        test: /\.scss$/i,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
        }),
      },
      {
        test: /\.(png|jpg|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {},
          },
        ],
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
>>>>>>> e9a3e3e9e925b63f0746f11a51610257f5a2d2d6
    ],
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './',
    // port:8000,
    proxy: {'/api':'http://localhost:3000'},
  },
  plugins: [
    new webpack.DefinePlugin({ 'process.env': { NODE_ENV: JSON.stringify('production') } }),
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new UglifyJSPlugin({
      sourceMap: true,
<<<<<<< HEAD
      compress: {
        warnings: false,
        comparisons: false, // don't optimize comparisons
      }
    }),
    new ExtractTextPlugin({filename: 'src/public/stylesheets/app.css', allChunks: true})
=======
      uglifyOptions:{
        properties: {
          compress: {
            warnings: false,
            comparisons: false, // don't optimize comparisons
          }
        }
      },
    }),
    new ExtractTextPlugin({ filename: 'src/public/stylesheets/app.css', allChunks: true }),
>>>>>>> e9a3e3e9e925b63f0746f11a51610257f5a2d2d6
  ],
};

module.exports = config;
<<<<<<< HEAD

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
=======
>>>>>>> e9a3e3e9e925b63f0746f11a51610257f5a2d2d6
