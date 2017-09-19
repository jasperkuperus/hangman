import path from 'path';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import CopyWebpackPlugin from 'copy-webpack-plugin';

export default {
  entry: [
    './src/index.jsx',
  ],

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, './dist'),
  },

  resolve: {
    extensions: ['.js', '.jsx', '.js', '.json'],
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // New webpack breaks and does not refresh on errors otherwise...
          emitWarning: true,
        },
      },
      {
        test: /\.html$/,
        loader: 'html-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'postcss-loader' },
          { loader: 'sass-loader' },
        ],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url-loader?limit=25000'
      },
      {
        test: /.(woff|woff2|svg|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader?limit=25'
      },
    ],
  },

  plugins: [
    // Take src/index.html as template, so build folder becomes disposable
    new HtmlWebpackPlugin({
      template: 'src/index.html',
      inject: false,
    }),
    new CopyWebpackPlugin([{
      from: './assets/images',
      to: 'assets/images',
    }]),
  ],
};
