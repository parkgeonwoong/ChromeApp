const toDoForm = document.getElementById("todo-form")
const toDoList = document.querySelector("#todo-list")
const toDoInput = toDoForm.querySelector("input")

const TODOS_KEY = "todos";

let toDos = [];

// 4. Todo localStorage에 넣기
function saveToDos() {
    // 어느 것이든 string으로 바꿔주는 ==> json.stringify()
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos))
}

// 3. Todo 삭제 버튼, 8. localStorage에서 삭제
function deleteToDo(event) {                            // event: 클릭에 대한 정보
    const li = event.target.parentElement  //.innerText   // target:button, parentElement:li, innerText:a,b,c,...
    li.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id))    // 클릭한 li.id와 다른 toDo는 남겨두고 싶다.
    saveToDos();
}

// 2. Todo 리스트 입력 값들
function paintToDo(newTodo) {
    const li = document.createElement("li");            // li 생성
    li.id = newTodo.id                                  // html에 id만듬 li id = Data.now()
    const span = document.createElement("span");        // span 생성
    span.innerText = newTodo.text;                           // 텍스트를 span 내부
    const button = document.createElement("button");    // button 생성
    button.innerText = "❌";                           // 텍스트를 button 내부에
    button.addEventListener("click", deleteToDo)        // 클릭되었다는것 확인 ==> 이벤트리스너
    li.appendChild(span);                               // li>span
    li.appendChild(button);                             // li>button
    toDoList.appendChild(li);                           // #todo-list 안에 li 추가
}



// 1. Todo 이벤트 입력, 6.Todo --> object
function handleToDoSubmit(event) {      
    event.preventDefault();                             // submit 이벤트 디폴트
    const newTodo = toDoInput.value                     // input value 값 할당
    toDoInput.value = ""                                // enter 누르면 입력값 사라지게 하는 것 
    const newTodoObj = {                                // object로 todo 만듬
        text: newTodo,
        id: Date.now(),
    }
    toDos.push(newTodoObj);                                // 저장하기 위해 (배열 안에)
    paintToDo(newTodoObj);                                 // paintToDo 함수값으로 변수 전달
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);
 

// 5. localStorage string => object 
const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos !== null) {
    const parsedToDos = JSON.parse(savedToDos);         // JSON.parse(): object Array로 바꿔준다. pasrsedToDos = Array
    // console.log(parsedToDos)
    // parsedToDos.forEach((item) =>                    // forEach는 array의 각 item에 대해 function을 실행
    // console.log("This is the turn of", item));       // arrow function 
    toDos = parsedToDos;                                // toDos 옛것도 포함 새로덮어씌우는게 아니게 함
    parsedToDos.forEach(paintToDo);                     // Storage에 있는 것 (array)을 하나씩 꺼내와서 paintTodo
}

// 7. Filter()
// const num = [1234, 5434, 3215, 12, 45, 332]
// function sexyFunction(data) { return data <= 1000 }
// console.log(num.filter(sexyFunction))

// const arr = [1, 2, 3, 4]
// arr.filter(item => item > 2)
// const newarr = arr.filter(item => item > 2)
// console.log(arr)
// console.log(newarr)
