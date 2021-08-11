const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (input) {
    // 입력받은 String을 Number로
    let inputNumber = +input;

    // 왼쪽 숫자에 입력받은 숫자 ex) 26 / 오른쪽 숫자와 사이클의 길이는 0으로 초기화
    let lt = inputNumber;
    let newNumber = 0;
    let cnt = 0;

    for (let i = 0; ; i++) {
        let rt = Math.floor(lt / 10) + (lt % 10);

        newNumber = (lt % 10) * 10 + (rt % 10);

        lt = newNumber;

        cnt++;

        if (inputNumber === newNumber) {
            break;
        }
    }

    console.log(cycle);

    rl.close();
}).on('close', function () {
    process.exit();
});