const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {

    const T = Number(input[0]);

    for (let i = 1; i <= T; i++) {
        let star = "*".repeat(i);
        console.log(star);
    }

    process.exit();
});



