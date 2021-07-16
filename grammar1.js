// 🔸const는 값이 바뀔수 없음  기본적으로 사용
// let은 값이 바뀜 필요할 떄만 사용
// var은 쓰지 말것 : var은 변수를 보호할 수 없음.

let a = 6;
let b = 2;
let myName = 'Woong';

console.log(a + b);
console.log(a * b);
console.log(a - b);
console.log(a / b);

console.log(myName + ' hello');


// 🔸boolean 
// false는 값이 있는 것, null 값이 아무것도 없다
// undefined : 변수는 존재하는데 정의되지 않음

const amIFat = null;
let something;

console.log(amIFat);
console.log(something);


// 🔸Array
const dayOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat", "sun"];

console.log(dayOfWeek[5]);

// 추가하기: .push()
dayOfWeek.push('week');

console.log(dayOfWeek);



//🔸 object
// 이러면 복잡하다.
const playerName = "woong";
const playerPoints = 121212;
const playerHandsome = true;
const playerFate = 'little bit';

// 배열로 하면 무슨 의미인지 알 수 가 없다.
const player = ["woong", 121212, true, "little bit"]

// object는 property를 가진 데이터를 저장해주며, { } 를 사용한다.
const player = {
    name: "woong",
    points: 10,
    fat: false
};

console.log(player);
// property를 불러오는 방법은 2가지가 있다.
console.log(player.name);
console.log(player['name']);

// 또한 property를 바꾸는 것은 가능하지만 선언된 object를 바꾸는 것은 불가능하다.
player.lastName = 'Photo';
console.log(player);



// 🔸 function
function sayHello() {
    const x = ['a', 'b', 'c', 'd']

    for (let i in x) {
        console.log("Hello My name is " + x[i]);
    }

    for (let k = 0; k < x.length; k++) {
        console.log("Hello My name is " + x[k]);
    }

}

sayHello()

function sayhi(a) {
    console.log("Hi your name " + a)
}

sayhi('welcome')

function plus(a, b) {
    console.log(a + b);
}

function divide(a, b) {
    console.log(a / b);
}
plus(10, 5)
divide(100, 10)

const player = {
    name: 'woong',
    sayName: function () {
        console.log("My name is " + this.name);
    },
};

console.log(player.name);
player.sayName();


const cal = {
    plus: function (a, b) {
        console.log(a + b);
    },
    minus: function (a, b) {
        console.log(a - b);
    },
    mul: function (a, b) {
        console.log(a ** b);
    },
    div: function (a, b) {
        console.log(a / b)
    },
};

cal.plus(5, 7);
cal.minus(10, 3)
cal.mul(4, 5);
cal.div(100, 2)


// 🔸Returns
// return 앞에 기타작업이 있다면 이 작업은 수행된다.
// 즉, return"까지만" 수행된다!
const age = 96;
function calculateKr(ageOfForeigner) {
    return ageOfForeigner + 2;
    // return "Hello World"
}

const krAge = calculateKr(age)
console.log(krAge);


const practice = { 
    test: function(a, b) {
        return a + b;
    },
};

const whatIsThat = practice.test(5, 6);
console.log(whatIsThat);



// 🔸Conditionals
const age = prompt("How old are you? ");

parseInt()                  // type Int로 바꿈

console.log(typeof age, typeof parseInt(age));    // type 보는 방법 

const age = parseInt(prompt("How old are you?"));

console.log(isNaN(age));


// ||: OR, &&: AND, ===: equal
if (isNaN(age) || age < 0) {
    console.log("Please Write a number");
} else if (age < 18) {
    console.log("You are too young");
} else if (age >= 18 && age < 50) {
    console.log("You can drink");
} else {
    console.log("You can't drink");
}

