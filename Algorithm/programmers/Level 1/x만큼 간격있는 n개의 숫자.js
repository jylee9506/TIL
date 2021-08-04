function solution(x, n){
    let answer=[];
    for(let i =1; i< n+1; i++){
        answer.push(x*i);
    }
    return answer;
}

console.log(solution(2,5));
// console.log(solution(4,3));


//<--------------------------------------------------------------->


function solution(x, n) {
    return Array(n).fill(x).map((v, i) => (i + 1) * v)
}
console.log(solution(4,3));
