//컨테이너 자료형
/*1. 컨테이너 자료형이란?
컨테이너(Container) 자료형이란 여러 개의 데이터를 하나의 변수에 담아 관리할 수 있는 자료형을 말합니다.
즉, 하나의 값이 아닌 값들의 집합(묶음)을 표현할 수 있습니다.

JavaScript의 대표적인 컨테이너 자료형은 다음과 같습니다.
배열(Array): 순서가 있는 데이터의 집합(by index)
객체(object): 이름(키)과 값(value)의 구성으로 이루어진 데이터의 집합
*/

//배열(array) = python list
//-대괄호[]로 묶어 표현하며, 순서(index)를 기반으로 하여 각 요소에 접근한다
//-index = 0 부터 시작한다.

// let fruits = ['사과', '바나나', '포도']
// console.log('fruits: ', fruits);
// console.log('fruits[0]: ', fruits[0])
// console.log('fruits[1]: ', fruits[1])
// for (let i = 0; i< fruits.length; i++) {
//     console.log(fruits[i]);
// }

// for (let fruit of fruits) {
//     console.log(fruit);
// }

//마지막 값 구하기
// let lastData = fruits[fruits.length-1]
// console.log(lastData);

// console.log(fruits[10]); //error - undefined 원래는 index out of range가 떠야함

//객체(object) --> dic
// let man = {
//     'name':'홍길동',
//     'age' : 20,
//     'mail': 'gildong@gmail.com',
//     'hobby' : ['축구', '농구', '배구'],
//     'fun' : function() {
//         console.log('멍멍')
//     }
    
// }

// console.log('man: ', man);
// console.log('man name: ', man['name']);
// console.log('man hobby: ', man['hobby']);
// console.log('man hobby: 마지막 데이터', man['hobby'][man['hobby'].length-1]);

// man['fun']();

//함수(function)
//특정기능 정의 , 재사용

//1. function 함수 이름(매개변수, ....) {
//     함수 실행구문
//    }

//함수 선언부
function intro() {
    alert('안녕하세요')
}
                               //많이 쓰임
intro(); //함수 호출부

//2. 함수 표현식(function expression)
/*
const 함수이름 = function(매개변수, ....) {
    함수 실행부
}
*/

const intro1 = function() {    //익명함수를 만들어 변수에 할당한다.
    alert('안녕하세요');
}

intro1();

//3. 화살표 함수(arrow function) at es6
/*
const 함수이름 = (매개변수, ......) => {
        함수 실행부
    }
*/

const intro2 = () => {
    alert('안녕하세요')  //가장 진보된 형태
}

intro2();

const add = (nl, n2) => {
    return n1 + n2;
}

// const add = (nl, n2) => n1 + n2; 위의 경우인 경우 이렇게 되는 것이 가능

let result = add(10, 20)
console.log('result: ', result);

// const intro2 = () => alert('안녕하세요') //이것도 됨
