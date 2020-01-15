const path = require('path')
const mode = (process.env.NODE_ENV === 'production') ? 'production' : 'development'

module.exports = {
  mode,
  devtool: 'source-map',
  entry: './src/js/index.js',
  module: {
    rules: [
      {
        test: /\.js$/,
        include: [
          path.resolve('src/js'),
        ],
        use: [
          {
            loader: 'babel-loader',
            options: {
              configFile: path.resolve('.babelrc')
            }
          }
        ]
      }
    ]
  },
  output: {
    library: 'beyond',
    libraryTarget: 'umd',
    filename: 'beyond.js',
    path: path.resolve(__dirname, '../dist')
  },
  devServer: {
    headers: {
      "Access-Control-Allow-Origin": "http://localhost:4000"
    }
  }
}
