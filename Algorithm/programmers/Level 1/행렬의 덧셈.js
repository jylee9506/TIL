function solution(arr1, arr2) {
    let answer = [[]];
    let arr3 = Array.from(Array(arr1.length), ()=> Array())
    for(let i = 0; i<arr1.length; i++){
        console.log(arr1.length)
        for(let j = 0; j<arr1[i].length; j++){
            console.log(arr1.length)
            arr3[i][j] = arr1[i][j] + arr2[i][j];
            

        }
    }
    answer = arr3;
    return answer;
}
console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]))
console.log(solution([[1,2]],[[3,4]]))


//<--------------------------------------------------------------->



function solution(A, B) {
    return A.map((a,i) => a.map((b, j) => b + B[i][j]));
}
console.log(solution([[1,2],[2,3]],[[3,4],[5,6]]))
console.log(solution([[1,2]],[[3,4]]))
