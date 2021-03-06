var path = require("path"),
    webpack = require('webpack');

module.exports = {
  entry: {
    app: [
      './src/index.js'
    ]
  },

  output: {
    path: path.resolve(__dirname + '/dist'),
    filename: 'app.js',
  },

  module: {
    loaders: [
      {
        test:    /\.html$/,
        include: /src/,
        loader:  'file?name=[name].[ext]',
      },
      {
        test:    /\.elm$/,
        include: /src/,
        loader:  'elm-hot!elm-webpack?warn=true',
      }
    ],
    noParse: /\.elm$/,
  },

  plugins: [
    new webpack.EnvironmentPlugin(["BACKEND_URL"])
  ],

  devServer: {
    inline: true,
    stats: 'errors-only',
    historyApiFallback: true
  },
};
