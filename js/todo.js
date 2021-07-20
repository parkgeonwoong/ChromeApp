const toDoForm = document.getElementById("todo-form")
const toDoList = document.querySelector("#todo-list")
const toDoInput = toDoForm.querySelector("input")

const TODOS_KEY = "todos";

const toDos = [];

// 4. Todo localStorage에 넣기
function saveToDos() {
    // 어느 것이든 string으로 바꿔주는 ==> json.stringify()
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

// 3. Todo 삭제 버튼
function deleteToDo(event) {                            // event: 클릭에 대한 정보
    const li = event.target.parentElement  //.innerText   // target:button, parentElement:li, innerText:a,b,c,...
    li.remove();
}

// 2. Todo 리스트 입력 값들
function paintToDo(newTodo) {
    const li = document.createElement("li");            // li 생성
    const span = document.createElement("span");        // span 생성
    span.innerText = newTodo;                           // 텍스트를 span 내부
    const button = document.createElement("button");    // button 생성
    button.innerText = "❌";                           // 텍스트를 button 내부에
    button.addEventListener("click", deleteToDo)        // 클릭되었다는것 확인 ==> 이벤트리스너
    li.appendChild(span);                               // li>span
    li.appendChild(button);                             // li>button
    toDoList.appendChild(li);                           // #todo-list 안에 li 추가
}



// 1. Todo 이벤트 입력
function handleToDoSubmit(event) {      
    event.preventDefault();                             // submit 이벤트 디폴트
    const newTodo = toDoInput.value                     // input value 값 할당
    toDoInput.value = ""                                // enter 누르면 입력값 사라지게 하는 것 
    toDos.push(newTodo);                                // 저장하기 위해 (배열 안에)
    paintToDo(newTodo);                                 // paintToDo 함수값으로 변수 전달
    saveToDos();
}


toDoForm.addEventListener("submit", handleToDoSubmit);
 
// 5. localStorage string => object 
const savedToDos = localStorage.getItem(TODOS_KEY);
console.log(savedToDos)
if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);
    console.log(parsedToDos)
}