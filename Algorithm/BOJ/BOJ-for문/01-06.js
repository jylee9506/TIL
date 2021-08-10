const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  let n = Number(line);
  let a ='';
  for (let i = n; i >=1; i--) {
    a += i +'\n';
  }
  console.log(a);
}).on('close', function () {

  process.exit();
});