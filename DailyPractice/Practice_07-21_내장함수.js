// 배열 내장함수 forEach 알아보기
const superheroes = [
    '아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'
]

// 안에 있는 모든 원소를 출력하기 (표현1)///////////////////////////////////

for (let i = 0; i < superheroes.length; i++) {
    console.log(superheroes[i])
}

console.log()
// 배열의 내장함수를 이용해 위와 같은 값 출력 (표현2)////////////////////////

function print(hero) {
    console.log(hero);
}

superheroes.forEach(print);


console.log()
// 더 짧은 코드로 구현 (표현3)/////////////////////////////////////////////
superheroes.forEach(function(hero) {
    console.log(hero);
})

console.log()
// 화살표 함수 이용 (표현4)///////////////////////////////////////////////
superheroes.forEach(hero => {
    console.log(hero);
})


console.log()
//////////////////////////////////////////////////////////////////////////
console.log()



// 배열 내장함수 map/////////////////////////////////////////////////////
const array = [1, 2, 3, 4, 5, 6, 7, 8];

// 제곱 되서 새로운 배열에 넣어준 형태////////////////////////////////////
const squared = [];

for(let i = 0; i < array.length; i++ ) {
    squared.push(array[i] * array[i]);
}
console.log(squared);


console.log()
// forEach 사용하기///////////////////////////////////////////////////////
box = []

array.forEach(n => {
    box.push(n * n);
})
console.log(box);


console.log()
// map 사용하기 ( 기본 array 배열을 어떻게 변환을 해줄려고 할때 사용함)///////

const square = n => n * n;
const Squared = array.map(square);

console.log(Squared);


console.log()
// map 사용하기 (다른 형태)////////////////////////////////////////////////
const box2 = array.map( n => n * n);

console.log(box2);


console.log()
// EX 활용하기 ////////////////////////////////////////////////////////////

const items = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    }
];

//객체의 배열을 Text로만 이루어진 배열로 바꾸기////////////////////////////////
const texts = items.map(item => item.text)
console.log(texts);


console.log()
// EX 활용하기 (원하는 항복이 어딨는지 확인하기)///////////////////////////////
// indexOf 내장함수 사용하기 ( 내용이 없으면 -1 나옴)
const Superheroes = [
    '아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'
]
const index = Superheroes.indexOf('토르');
console.log(index);


console.log()
// 배열안의 값들이 객체이거나 특정 조건을 확인해야하는 경우 ////////////////////

const todo = [
    {
        id: 1,
        text: 'hello'
    },
    {
        id: 2,
        text: 'bye'
    },
    {
        id: 3,
        text: 'good'
    },
    {
        id: 4,
        text: 'bad'
    },
    {
        id: 5,
        text: 'hi'
    },
];

const Todo = todo.findIndex(todos => todos.id === 3 );

console.log(Todo);
// 그냥 find만 쓰면 그 안에 객체들 내용이 다 반환됨
// const Todo = todo.find(todos => todos.text === 'hi' );
// console.log(Todo);

// indexOf는 특정 값이랑 일치하는 거 찾을떄
// findindex는 내부에 함수를 넣어 특정 값을 조건으로 찾아 몇번째인지 알려줌
// find는 그렇게 찾은 값 자체를 반환

console.log()
console.log();

// filter 내장함수 사용하기//////////////////////////////////////////
const Ex1 = [
    {
        id: 1,
        text: 'hello',
        done: true
    },
    {
        id: 2,
        text: 'bye',
        done: true
    },
    {
        id: 3,
        text: 'good',
        done: true
    },
    {
        id: 4,
        text: 'bad',
        done: true
    },
    {
        id: 5,
        text: 'hi',
        done: false
    },
];

const useEx1 = Ex1.filter(Ex1 => Ex1.done === false);
console.log(useEx1);
// const useEx1 = Ex1.filter(Ex1 => !Ex1.done);  
// console.log(useEx1);
// 같은 구조이며 filter는 특정 원소들만 추출해 새로운 배열 만들 떄 좋음


console.log()
console.log()

//splice 사용하기///////////////////////////////////////////////
const numbers = [10, 20, 30, 40];
const number = numbers.indexOf(30); // 값 30 찾기
const spliced = numbers.splice(index, 1); // 30 지우기 (index, 2)를 넣으면 30부터 2개 지움
console.log(spliced);
console.log(numbers);

console.log()

// slice 사용하기////////////////////////////////////////////////
const numberss = [10, 20, 30, 40];
const sliced = numberss.slice(0, 2);
console.log(sliced);
console.log(numberss);
// slice 기존 배열을 건드리지 않고 splice는 기존 배열을 건드린다.


console.log()

// shift///////////////////////////////////////////////////////////////
const numbersss = [10, 20, 30, 40];
const value = numbersss.shift(); // shift는 맨 앞 원소를 하나씩 앞으로 꺼냄 (기존 배열을 수정함)
console.log(value);
console.log(numbersss);
// numbersss.unshift(5)는 맨 앞에 5를 추가함
// shift, unshift 가 한 쌍 ( 앞 쪽에 삭제, 추가)

console.log()


// pop//////////////////////////////////////////////////////////////////
const numberssss = [10, 20, 30, 40];
const values = numberssss.pop(); // pop 맨 뒤 원소를 하나씩 앞으로 꺼냄 (기존 배열을 수정함) 비어질 떄 까지 계속빠짐
console.log(values);
console.log(numberssss);
// pop 이랑 push는 한 쌍 (맨 뒤에 삭제, 추가)

console.log()


//concat 여러개의 배열을 하나의 배열로 합쳐줌///////////////////////////
const arr1 = [1, 2, 3];
const arr2 = [7, 8, 9];

const concated = arr1.concat(arr2); //두개의 배열을 합침
// const concated = [...arr1, ...arr2]; spread 연산자로 이렇게 표현 가능 (값은 답 나옴)

console.log(arr1)
console.log(arr2)
console.log(concated); // 기존의 배열을 건드리지 않음

console.log()

// join 함수///////////////////////////////////////////
const aarray = [1, 2, 3, 4, 5];
console.log(aarray.join()); // 1,2,3,4,5
console.log(aarray.join(' ')); // 1 2 3 4 5
console.log(aarray.join(', ')); // 1, 2, 3, 4, 5


console.log()
console.log()
console.log()
console.log()

// reduce 사용해보기 매우 중요////////////////////////////////////////

const numbers2 = [1, 2, 3, 4, 5];

let sum = 0;
numbers2.forEach(n => {
    sum += n; 
    //여기서 sum 을 계산하기 위해서 사전에 sum 을 선언하고, forEach 를 통하여 계속해서 덧셈을 해주었는데요,
});
console.log(sum);


console.log()/////////////////////////////////////////////////////////

//reduce로 변환
const numbers3 = [1, 2, 3, 4, 5];
const sum1 = numbers3.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum1);


console.log()///////////////////////////////////////////////////////////

// 첫번째 파라미터는 accumulator(누적값) 와 current(현재값) 를 파라미터로 가져와서 결과를 반환하는 콜백함수이구요, 두번째 파라미터는 reduce 함수에서 사용 할 초깃값입니다.

const numbers4 = [1, 2, 3, 4, 5];

let sum2 = numbers4.reduce((accumulator, current) => {
    console.log({ accumulator, current });
    return accumulator + current;
}, 0);

console.log(sum2);


console.log()///////////////////////////////////////////////////////////

//reduce활용하여 평균구하기

const numbers5 = [1, 2, 3, 4, 5];

let sum3 = numbers5.reduce((accumulator, current, index, array) => {
    if (index === array.length - 1) {
        return (accumulator + current) / array.length;
    }
    return accumulator + current;
    }, 0);

console.log(sum3);
// 위 코드의 reduce 에서 사용한 콜백함수에서는 추가 파라미터로 index 와 array 를 받아왔습니다. 
// index 는 현재 처리하고 있는 항목이 몇번째인지 가르키고, array 는 현재 처리하고 있는 배열 자신을 의미합니다.


console.log()///////////////////////////////////////////////////////////
console.log()///////////////////////////////////////////////////////////
console.log()///////////////////////////////////////////////////////////

const alphabets = ['a', 'b', 'a', 'b', 'b', 'c', 'd', 'a', 'e'];

const check = alphabets.reduce((accumulator, current) => {
    if (accumulator[current]) {
        accumulator[current] += 1;
    } else {
        accumulator[current] = 1;
    }
    return accumulator;
}, {})  
//accumulator 안에 current가 존재하는지 확인( aacumulator.a)
//{}은 빈 객체
console.log(check)


console.log()///////////////////////////////////////////////////////////
console.log()///////////////////////////////////////////////////////////
console.log()///////////////////////////////////////////////////////////



//Quiz
//숫자 배열이 주어졌을 때 10보다 큰 숫자의 갯수를 반환하는 함수를 만드세요.

function countBiggerThanTen(numbers12) {
    let countsss = 0
    numbers12.forEach(n => {
        if (n > 10) {
            countsss += 1;
        }
    });
    return countsss;
}

const countsss = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(countsss); // 5


console.log()///////////////////////////////////////////////////////////
console.log()///////////////////////////////////////////////////////////


function countBiggerThanTen(numbers123) {
    return numbers123.filter(n => n > 10).length;
}

const countssss = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(countssss); // 5


console.log()///////////////////////////////////////////////////////////
console.log()///////////////////////////////////////////////////////////



function countBiggerThanTen(numbersEx) {
    return numbersEx.reduce((accumulator, current) => {
        if (current > 10) {
            return accumulator += 1;
        } else {
            return accumulator;
        }
    }, 0);
}

const count11 = countBiggerThanTen([1, 2, 3, 5, 10, 20, 30, 40, 50, 60]);
console.log(count11); // 5
