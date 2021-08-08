const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
let input = '';
rl.on('line', line => {
    input += line;  
    rl.close();     
}).on("close", () => {

    const a = input.split(' ')[0] - 0;
    const b = input.split(' ')[1] - 0;
    const c = input.split(' ')[2] - 0;


    console.log((a + b)%c);  
    console.log(a - b);  
    console.log(a * b);  
    console.log(Math.floor(a / b));  
    console.log(a % b);  




    process.exit();
});