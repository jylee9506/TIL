const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

const input = [];

rl.on('line', function (line) {
    input.push(line);
}).on('close', function () {
    let n = Number(input[0][0]);
    let X = Number(input[0][1]);
    let numbers = (input[1].split(' '));
    let answer = '';
    
    for (let i = 0; i < n; i++) {
        if(numbers[i]<X){
            answer+= numbers[i] + ' ';
        }
    }
    console.log(answer);
    process.exit();
});
