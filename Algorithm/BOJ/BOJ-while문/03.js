const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (input) {
    let inputNumber = +input;

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