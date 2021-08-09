const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input = line.split(' ');

  let num1 = Number(input[0]);

  if (num1 >= 90) {
    console.log('A');
  } else if (num1 >=80) {
    console.log('B');
  } else if (num1 >=70) {
    console.log('C');
  } else if (num1 >=60) {
    console.log('D');
  } else {
    console.log('F');
  }

}).on('close', function () {
  process.exit();
});