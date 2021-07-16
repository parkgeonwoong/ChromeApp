document.h1 = "Hello! From JS!";

const title = document.getElementById("title");
console.log(title);

title.innerText = "Got you!";

// classname 요소를 찾아주는 것
const hellos = document.getElementsByClassName("hello");
console.log(hellos);


// element 을 검색 할 수 있게 하는 querySelector: CSS selector를 사용해 검색
// 첫번째 것만 가지고 옴 
const title = document.querySelector(".hello:nth-child(2) h1");

console.log(title);
console.dir(title);

title.style.color ="#327FE3";


// event listener
const h1 = document.querySelector(".hello:nth-child(2) h1");

function handleTileClick() {
    h1.style.color ="#327FE3";
    console.log("Title was click!");
}

function handleMouseEnter() {
    h1.style.color = "pink";
    h1.innerText = "What is Mouse?";
}

function handleMouseLeave() {
    h1.innerText = "Mouse is Gone!";
}

function handleWindowResize() {
    document.body.style.backgroundColor = "gray";
}

function handleWindowCopy() {
    alert("Copier");
}

function handleWindowOffline() {
    alert("SOS no Wifi")
}

function handleWindowOnline() {
    alert("all Good");
}

// h1.onclick = handleTileClick;
h1.addEventListener("click", handleTileClick);
h1.addEventListener("mouseenter", handleMouseEnter)
h1.addEventListener("mouseleave", handleMouseLeave)

window.addEventListener("resize", handleWindowResize);
window.addEventListener("copy", handleWindowCopy);
window.addEventListener("offline", handleWindowOffline);
window.addEventListener("online", handleWindowOnline);

// 1. element를 찾아라
// 2. event를 listen 해라
// 3. event에 반응해라
const h1 = document.querySelector(".hello:nth-child(2) h1");

function handleTitleClick() {
    const currentColor = h1.style.color;
    let newColor;

    if(currentColor === "blue") {
        newColor = "tomato";
    } else {
        newColor = "blue";
    }

    h1.style.color = newColor;
}

h1.addEventListener("click", handleTitleClick);


// html, css, js 이용하여 js에서 바꾸는 기능
// 변수명 = document.querySelector("CSS 구조 ")
const h1 = document.querySelector(".hello:nth-child(2) h1");

// 함수를 이용한 className 변경
function handleTitleClick() {
    const activeClass ="active";

    if(h1.className === "activeClass") {
        h1.className = '';
    } else {
        h1.className = "activeClass";
    }
}

// addEventLister("이벤트", 함수이름)
h1.addEventListener("click", handleTitleClick);


// classList를 이용하여 다른 class가 있을경우 포함시키기
const h1 = document.querySelector(".hello:nth-child(2) h1");

function handleTitleClick() {
    const activeClass ="active";

    if(h1.classList.contains(activeClass)) {
        h1.classList.remove(activeClass);
    } else {
        h1.classList.add(activeClass);
    }
}

h1.addEventListener("click", handleTitleClick);


// toggle을 사용해 위의 복잡한 과정 생략
// toggle은 classList에 active가 있으면 삭제, 없으면 생성
const h1 = document.querySelector(".hello:nth-child(2) h1");

function handleTitleClick() {
    h1.classList.toggle("active");
}

h1.addEventListener("click", handleTitleClick);