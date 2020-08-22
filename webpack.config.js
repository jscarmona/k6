const path = require('path');
const fs = require('fs');

module.exports = {
  mode: 'development',
  context: path.join(__dirname, 'src', 'tests'),
  entry: fs.readdirSync(path.join(__dirname, 'src', 'tests')).reduce((acc, filename) => {
    const extension = path.extname(filename);
    const entry = path.basename(filename, extension);

    return Object.assign({}, acc, { [entry]: `./${filename}` });
  }, {}),
  output: {
    path: path.join(__dirname, 'dist'),
    libraryTarget: 'commonjs',
    filename: '[name].js',
  },
  resolve: {
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'babel-loader',
      },
    ],
  },
  target: 'web',
  externals: /k6(\/.*)?/,
  stats: {
    colors: true,
  },
};
