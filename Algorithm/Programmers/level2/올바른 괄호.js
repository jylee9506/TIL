function solution(s){
    let answer = true;
    let stack = [];

    for( let x of s ){
        if( x === '(') {
            stack.push(x)
        }
        else {
            console.log(stack.length)
            if(stack.length === 0) return false
            stack.pop()
            console.log(stack)
            console.log(stack.length)
        }

    }

    if( stack.length > 0 ) return false


    return answer;
}

// OR

function solution(s){
    let stackCount = 0;
    for (let i = 0; i < s.length; i++) {
        stackCount += s[i] === '(' ? 1 : -1;
        if (stackCount < 0) return false;
    }
    return stackCount === 0 ? true : false;
}


console.log(solution("()()"))
console.log()
console.log(solution("(())()"))
console.log()
console.log(solution(")()("))
console.log()
console.log(solution("(()("))