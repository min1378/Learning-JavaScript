// var name = "global";

// function home() {
//     var homevar = "homevar";
//     //for (var i = 0; i < 100; i++) {} 
//     //console.log(i); // 100
//     for (let i = 0; i < 100; i++) {}
//     // console.log(i); // ReferenceError: i is not defined 블록 스코프이기 때문에..
//     if (true) {
//         let myif = "myif";
//     }
//     console.log(myif); // ReferenceError: myif is not defined

// }

// home();

// var list = document.querySelectorAll("li");
// //for (var i = 0; i < list.length; i++) { // i 값이 변경(var라서)되면서 4값을 공유하기 때문에 문제가 발생한다.
// for (let i = 0; i < list.length; i++) { // let으로 수정.
//     list[i].addEventListener("click", function() {
//         console.log(i + "번째 리스트 입니다.") // 무엇을 누르던지 4번째 리스트입니다. 가 출력된다. 그 이유는 closure 때문
//             // function이 갖고 있는 i는 콜백 바깥에 있는 변수를 참조하면서 기억하고 있다. i값은 클로져 변수라 할 수 있다.

//     });
// }

// function home() {
//     var homename = 'my house';
//     console.log(homename) // my house
//     homename = "your house";
//     console.log(homename) // your house
//     const homename2 = 'my house';
//     console.log(homename2) // my house
//         // homename2 = "your house"; // TypeError: Assignment to constant variable. const형엔 대입 불가.


//     const homename3 = [1, 2, 3, 3];
//     homename3 = ["1", "2"] // TypeError: Assignment to constant variable.
//     console.log(homename3)
//         // const를 기본으로 사용한다.
//         // 그런데 변경이 될 수 있는 변수는 let을 사용한다.
//         // var는 사용하지 않는다.
// }
// home();

function home() {
    const list = ["apple", "orange", "watermelon"];
    // const 재할당은 안되지만 추가하거나 삭제는 가능하다.
    list.push("banana");
    console.log(list);
}
home();
// immutable array를 어떻게 만들까?
const list = ["apple", "orange", "watermelon"];
list2 = [].concat(list, "banana");
console.log(list);
console.log(list2);
console.log(list === list2);