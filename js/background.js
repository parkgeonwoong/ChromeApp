const images = [
    "0.jpg",
    "1.jpg",
    "2.jpg",
    "3.jpg"
]

const chosenImage = images[Math.floor(Math.random() * images.length)];

// 지금까지 HTML에서 만들고 JS를 사용하여 다뤄왔다.
// JS에서 만들고 HTML에 추가할 것 
const bgImage = document.createElement("img");  
bgImage.src = `img/${chosenImage}`
// console.log(bgImage)

// 이미지를 html에 씌우기
document.body.appendChild(bgImage) // body에 html을 추가
// document.body.prepend(bgImage) // body에 html을 추가

bgImage.classList.add("backgr");
console.log(bgImage)
