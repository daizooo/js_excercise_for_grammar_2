const input = prompt(`今日の天気は？次の3つのうち、いずれかの文字列を入力してくささい。(晴れ or くもり or 雨)`);

if (input === "晴れ") {
  alert("今日は気持ちの良い一日になりそうですね！");
} else if (input === "くもり") {
  alert("どんよりした天気ですが今日も一日がんばりましょう！");
} else if (input === "雨") {
  alert("家でゆっくり過ごすのも良いと思いますよ！");
} else {
  alert("晴れ・くもり・雨以外の文字列には対応していません。");
}
