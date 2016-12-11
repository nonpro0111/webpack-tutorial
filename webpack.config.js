module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname, // 現在実行中のソースコードが格納されているディレクトリパス
    filename: "main.js"
  },

  module: {
    loaders: [
      { test: /\.css$/, loader: "style!css" }
    ]
  }
};
