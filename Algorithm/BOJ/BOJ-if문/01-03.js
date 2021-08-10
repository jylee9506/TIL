const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');

  let num1 = Number(input[0]);
  let num2 = Number(input[0]);

  if (num1 % 4 === 0 && (num1%100 !==0 || num1%400 ===0)) {
    console.log('1');
  } else {
    console.log('0');
  }

}).on('close', function () {
  process.exit();
});