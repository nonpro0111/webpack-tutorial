// webpack ./entry.js main.js
document.write("It works from entry.js.<br>");
// 外部ファイルを読み込む
document.write(require("./content.js"));
