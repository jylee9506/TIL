function solution(n) {
    let selfNum = 0;

    if(n < 100) {
        selfNum = n + parseInt(n/10) + n%10;
    } else if(n<1000) {
        selfNum = n + parseInt(n/100) + parseInt((n%100)/10) + (n%100)%10;
    } else {
        selfNum = n + parseInt(n/1000) + parseInt((n%1000)/100) +
            parseInt(((n%1000)%100)/10) + ((n%1000)%100)%10;
    }

    return selfNum;

}

let numbers = [];

for(let i =1; i <= 100; i++) {
    if(solution(i) <= 100) {
        numbers.push(solution(i));
    }


    if(numbers.indexOf(i) === -1) {
        console.log(i);
    }
}