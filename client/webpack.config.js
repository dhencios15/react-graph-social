const path = require('path');
module.exports = {
  devServer: {
    contentBase: path.resolve(__dirname, './src'),
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, './src/index.js'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      '#root': path.resolve(__dirname, 'src/'),
      '#gql': path.resolve(__dirname, 'src/graphql/'),
    },
  },
  output: {
    filename: 'bundle.js',
  },
  devtool: 'eval-source-map',
};
