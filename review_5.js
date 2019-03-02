let input;
const answer = ["晴れ", "くもり", "雨"];

function loop() {
  if (input !== undefined) {
    if (input === answer[0]) {
      alert("今日は気持ちの良い一日になりそうですね！");
      return;
    } else if (input === answer[1]) {
      alert("どんよりした天気ですが今日も一日がんばりましょう！");
      return;
    } else if (input === answer[2]) {
      alert("家でゆっくり過ごすのも良いと思いますよ！");
      return;
    } else {
      alert("晴れ・くもり・雨以外の文字列には対応していません。");
    }
  }
  input = prompt('今日の天気は？次の3つのうち、いずれかの文字列を入力してくささい。(晴れ or くもり or 雨)');
  loop(input);
}

loop();
