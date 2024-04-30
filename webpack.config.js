// // const path = require('path');

// // module.exports = {
// //   entry: './src/index.js',
// //   output: {
// //     path: path.resolve(__dirname, 'dist'),
// //     filename: 'bundle.js'
// //   },
// //   module: {
// //     rules: [
// //       {
// //         test: /\.(js|jsx)$/,
// //         exclude: /node_modules/,
// //         use: {
// //           loader: 'babel-loader'
// //         }
// //       }
// //     ]
// //   }
// // };
// const path = require('path')
// const HTMLWebpackPlugin = require('html-webpack-plugin')

// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: 'bundle.js',
//     path: path.resolve(__dirname, 'build'),
//   },
//   plugins: [
//     new HTMLWebpackPlugin({
//       template: path.join(__dirname, 'public', 'index.html'),
//     }),
//   ],
//   devServer: {
//     static: {
//       directory: path.join(__dirname, 'build'),
//     },
//     port: 3000,
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         exclude: /node_modules/,
//         use: ['babel-loader'],
//       },
//     ],
//   },
//   resolve: {
//     extensions: ['*', '.js', '.jsx'],
//   },
// }
