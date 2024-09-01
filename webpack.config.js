const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development', // Ensure you are in development mode for better debugging
  entry: './src/main.ts',
  devtool: 'inline-source-map', // This enables source map generation
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            compilerOptions: {
              "sourceMap": true,  // Ensure source maps are enabled
              "inlineSources": true  // Include the original source in the source map
            }
          }
        },
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html', // Reference index.html in the root directory
      filename: 'index.html',   // Output file in the dist directory
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: {
      app: {
        name: 'chrome', // Specify the browser to open
      },
    },
  },
};
