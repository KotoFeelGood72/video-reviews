const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
  configureWebpack: {
    plugins: [
      new CopyPlugin({
        patterns: [
          {
            from: path.resolve(__dirname, 'src/modules'),
            to: path.resolve(__dirname, 'dist/modules'),
            globOptions: {
              ignore: ['.*'],
            },
          },
        ],
      }),
    ],
  },
};
