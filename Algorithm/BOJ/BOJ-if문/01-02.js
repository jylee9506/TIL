const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
  /*
  예시)
  < 입력 >       < 입력을 받은 line 배열 >
    2	      [ '2', [ '3 4' ], [ '4 5' ] ]
    3 4
    4 5
  */
}).on('close', function () {
  let count = Number(input[0]);	// 테스트 케이스의 개수
  let numbers = [];

  // 테스트 케이스 개수만큼 각 케이스 배열 생성 후 numbers 배열에 할당
  for (let i = 1; i <= count; i++) {
    numbers.push(input[i].split(' '));
  }
  /*
        < numbers 배열 >
  [ [ '3', '4' ], [ '4', '5' ] ]
  */

  /* 테스트 케이스 개수만큼 
  number 배열 안의, 각 케이스 배열 안 요소를 인덱스로 접근하여 합한다.*/
  for (let i = 0; i < count; i++) {
    num1 = Number(numbers[i][0]);
    num2 = Number(numbers[i][1]);

    console.log(num1 + num2);
  }
	
  process.exit();
});