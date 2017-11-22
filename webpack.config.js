module.exports = {
    entry: "./index.js",
    output: {
      filename: "bundle.js"
    }, 
    watch: true,
    module: {

        loaders: [
          {
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
              presets: ['react', 'es2015'] 
            }
          },
          {
            test: /\.scss$/,
            loader: 'style-loader!css-loader!sass-loader'
        }
        ]
        
    },
    resolve: {
        extensions: ['.js', '.es6']
    }
  }