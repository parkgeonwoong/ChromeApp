// // html에서 가져오는 방법1
// const loginForm = document.getElementById("login-form");
// const loginInput = loginForm.querySelector("input");
// const loginButton = loginForm.querySelector("button");


// html에서 가져오는 방법2
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 변수 중복 고정
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// Log in 버튼 클릭 시 작동하는 함수
function onLoginSubmit(event) {
    event.preventDefault();                         // event의 기본행동을 발생되지 않도록 막는 것

    loginForm.classList.add(HIDDEN_CLASSNAME);      // loginForm에 hidden class 추가
    const username = loginInput.value;              // loginInput의 값을 변수에 저장

    localStorage.setItem(USERNAME_KEY, username);     // value에 유저이름 저장하기 --> localStorage (API)

    // greeting.innerText = "Hello " + username;
    // greeting.innerText = `Hello ${username}`;       // h1 greeting에 텍스트를 넣어줌
    // greeting.classList.remove(HIDDEN_CLASSNAME);    // h1에서 hidden class 삭제
    paintGreetings(username);
}

// greeting 중복 사용으로 함수화
function paintGreetings(username) {
    greeting.innerText = `Hello ${username}`
    greeting.classList.remove(HIDDEN_CLASSNAME);
}


// 유저 정보 유무 확인
const savedUsername = localStorage.getItem(USERNAME_KEY)

if(savedUsername === null) {
    // show the form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);        // 이벤트리스너에 의해 onLoginSubmit 함수 호출
} else {
    // show the greeting
    paintGreetings(savedUsername);

}