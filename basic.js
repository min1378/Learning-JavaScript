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

var list = document.querySelectorAll("li");
//for (var i = 0; i < list.length; i++) { // i 값이 변경(var라서)되면서 4값을 공유하기 때문에 문제가 발생한다.
for (let i = 0; i < list.length; i++) { // let으로 수정.
    list[i].addEventListener("click", function() {
        console.log(i + "번째 리스트 입니다.") // 무엇을 누르던지 4번째 리스트입니다. 가 출력된다. 그 이유는 closure 때문
            // function이 갖고 있는 i는 콜백 바깥에 있는 변수를 참조하면서 기억하고 있다. i값은 클로져 변수라 할 수 있다.

    });
}