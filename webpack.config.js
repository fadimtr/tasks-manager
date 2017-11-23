module.exports = {
    entry: "./index.js",
    output: {
      filename: "bundle.js",
      publicPath: '/'
    }, 
    watch: true,
    module: {

        loaders: [
          {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
          },
          {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
          }
        ]
        
    },
    devtool: "#eval-source-map",
    devServer: {
      historyApiFallback: true,
    },
    resolve: {
        extensions: ['.js', '.jsx']
    }
  }