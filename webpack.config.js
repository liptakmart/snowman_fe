const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/main.ts',
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: {
          loader: 'ts-loader',
          options: {
            transpileOnly: true,
            compilerOptions: {
              "sourceMap": true,
              "inlineSources": true
            }
          }
        },
        exclude: /node_modules/,
      },
      {
        test: /\.html$/,
        use: 'html-loader', // Allows importing HTML files
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Allows importing CSS files
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/' // Ensures proper handling of routes
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
    }),
  ],
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    open: true,
    historyApiFallback: true, // This is important for handling client-side routing
  },
};
