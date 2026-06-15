//제어문 - 조건문(if문, switch~case문)
/*
if문
if (조건식){
    실행문
}
*/
let age = 20;
if (age >= 18) {
    console.log('성인 입니다.')
}

/*
if ~ else문 -> 양자택일
*/
let isLogin = false;
if (isLogin) {
    console.log('로그인 되어있다.')
} else {
    console.log('로그인 되어있지 않다.')
}

/*
if ~ else if ~ else if............ -> 다중
*/
let score = 85;
if (score >= 90) {
    console.log('A학점');

} else if (score >= 80) {
    console.log('B학점');

} else if (score >= 70) {
    console.log('C학점');

} else if (score >= 60) {
    console.log('D학점');

} else
    console.log('F학점');

// switch문 --> 콕 집어서 실행->꼭 순서대로일 필요는 없지만 순차적으로 맞추는 것이 좋음
let day = 3 //-->지정값과 같은 값을 실행한다.
            // 꼭 break를 넣어 원하는 값만 실행되도록 한다.
switch (day) {
    case 1: //항상 상수여야 하는데 숫자인 상수를 literal 상수라고 한다.
        console.log('월요일')
        break;

    case 2:
        console.log('화요일')
        break;

    case 3:
        console.log('수요일')
        break;

    case 4:
        console.log('목요일')
        break;
        
    default :
        console.log('모름') //위치상 어디에든 있을 수 있다. 하지만 맨 뒤에 있는것이 관례, 아무값도 없으면 기본으로 출력되는 값.
        break; //있어도 되고 없어도 됨
}

// 제어문 반복문(for문(횟수), while문(조건))
//for문 -> 횟수에 의한 반복실행
/*
1부터 10까지의 정수의 합 --->1이 초기식, 10까지가 조건식, 증가하는것이 증감식에 들어감

for (초기식; 조건식; 증감식){
    반복 실행문
}
*/

// let sum = 0;
// for (let n = 1; n < 11; n++) { //1부터 10까지 1씩 증가해라
//     console.log('n:', n);

// }

// let sum = 0;
// for (let n = 1; n < 11; n++) { //1부터 10까지 1씩 증가해라
//     sum += n;
// }
// console.log('sum:', sum);  //55

// let sum = 0;
// let n = 1;
// for (; n < 11; n++){
//     sum += n;
// }
// console.log('sum: ', sum)

// for (i=10, j=0; i>0,  j < 10; i--, j++) {
//     console.log('i: ', i)
//     console.log('j: ', j)
// }

//while문-> 조건에 의한 반복실행
/*
while (조건식){
    실행문
}
*/

// let k = 3;
// while (k < 10) {
//     console.log('k:', k);
//     k++;
// }

// let k = 3;
// while (k < 10) {
//     console.log('k:', k);
//     if (k > 7)break
//     k++;
// }

// do ~ while문
let count = 5;
do {
    console.log('count:', count);  //5 4 3 2 1
    count--;        //조건식을 실행하기 전 무조건 한 번은 실행한다. 그리고 그 이후에는 조건에 따라 값을 출력한다.
}while(count > 10);

let pt = promt("이름을 입력하라") //----> 잘 안씀
console.log('pt: ', pt);