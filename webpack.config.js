const path = require('path');

module.exports = {
  target: 'node',
  entry: {
    extension: './src/extension.ts',
    main: './src/webview/main.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    libraryTarget: 'commonjs2',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  externals: {
    vscode: 'commonjs vscode',
  },
  devtool: 'source-map',
};
