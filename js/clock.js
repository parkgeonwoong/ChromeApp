const clock = document.querySelector("h2.clock");

function getClock() {
    const date = new Date()     // 날짜를 나타내는 new Date()
    const hours = String(date.getHours()).padStart(2, "0")         // padStart(): String에 쓸 수 있는 function
    const minutes = String(date.getMinutes()).padStart(2, "0")     // "1".padStart(2, "0") -->"01"
    const seconds = String(date.getSeconds()).padStart(2, "0")

    clock.innerText = (`${hours}:${minutes}:${seconds}`);
}

// Website가 로드되자마자 getClock 실행
getClock()
 // 인자 2개 받는다. 1. function     2. function 간격을 몇 ms로 할지
setInterval(getClock, 1000) 

// setTimeout: 한번만 실행
// setTimeout(sayHello, 3000) 






