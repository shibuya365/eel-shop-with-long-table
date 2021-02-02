const { format } = require('path');

const lines = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

let line = lines[0].split(' ');
// n=座席数
let n = line[0];
// m=グループ数
let m = line[1];

// テーブルのNumberの配列
let tables = new Array();

// グループの数だけ繰り返す
for (let i = 1; i <= m; i++) {
  let line = lines[i].split(' ');

  // 最初の座席、ただし配列が０から始まるので１少なくする
  const start = line[1] - 1;

  // 座席の終わり、同じく１少なくして
  const end = Number(line[1]) + Number(line[0]) - 1;

  // 全員チェックして空いているかどうか判断する変数
  isSpace = true;

  // 座席の最初から最後まで繰り返し席が空いてるかチェック
  for (let j = start; j < end; j++) {
    ta = j;

    // もし座席が存在する席より大きかったらnを引いて存在する座席にする
    if (j >= n) {
      ta -= n;
    }

    // 座席が空いているかチェック
    if (tables[ta] === 1) {
      isSpace = false;
      break;
    }
  }

  // もし座席が空いていたら、座席に１を入れる
  if (isSpace) {
    for (let j = start; j < end; j++) {
      ta = j;
      if (j >= n) {
        ta -= n;
      }
      tables[ta] = 1;
    }
  }
}

// 埋まっている座席の合計を集計する
ans = tables.reduce((prev, current) => prev + current);
console.log(ans);
