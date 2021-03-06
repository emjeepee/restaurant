const path = require('path');

module.exports = {
    mode: 'production',
    
    entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
        rules: [
          { // css files:
            test: /\.css$/i,
            use: ['style-loader', 'css-loader'],
          },
          { // images:
            test: /\.(png|svg|jpg|jpeg|gif)$/i,
            type: 'asset/resource',
          },
          { // fonts:
                    test: /\.(woff|woff2|eot|ttf|otf)$/i,
                    type: 'asset/resource',
          },
               ],
          },

                };

