function solution(N) {
    const binary = N.toString(2);
    console.log(binary)

    const binaryGaps = binary.slice(binary.indexOf('1' + 1), binary.lastIndexOf('1'));
    console.log(binaryGaps)

    const zeroCounted = binaryGaps.split('1').map(zeros => zeros.length);
    console.log(zeroCounted)

    const zeroMax = Math.max(...zeroCounted);
    console.log(zeroMax)


    return zeroMax;

}

console.log(solution(6));


