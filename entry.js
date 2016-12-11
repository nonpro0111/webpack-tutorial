// webpack ./entry.js main.js
require("!style!css!./style.css");
document.write("It works from entry.js.<br>");
// 外部ファイルを読み込む
document.write(require("./content.js"));
