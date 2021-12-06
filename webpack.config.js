
const HtmlWebpackPlugin = require('html-webpack-plugin');

const htmlPageNames = ['charactersTable'];
const htmlPages = htmlPageNames.map(name => {
  return new HtmlWebpackPlugin({
    template: `./public/${name}.html`,
  })
})


module.exports = {  
    mode: 'development',
    entry: {
      charactersTable: './src/script/characterTable.js',
      createCharacter: './src/index.js'
    },
    output: {
      filename: '[name].js',
      path: __dirname + '/dist',
    },
    module: {
      rules: [
        {
          test: /\.m?js$/,
          exclude: /node_modules/,
          use: {
            loader: "babel-loader",
            options: {
              presets: ['@babel/preset-env']
            }
          }
        },

        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"],
        },

        
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        filename: 'createCharacter.html',
        template: './public/index.html',
        chunks: ['createCharacter'],
      }),
      new HtmlWebpackPlugin({
        filename: 'charactersTable.html',        
        template: './public/charactersTable.html',
        chunks: ['charactersTable'],
      }),
    ]
}