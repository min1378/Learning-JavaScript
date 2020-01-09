var name = "global";

function home() {
    var homevar = "homevar";
    //for (var i = 0; i < 100; i++) {} 
    //console.log(i); // 100
    for (let i = 0; i < 100; i++) {}
    // console.log(i); // ReferenceError: i is not defined 블록 스코프이기 때문에..
    if (true) {
        let myif = "myif";
    }
    console.log(myif); // ReferenceError: myif is not defined

}

home();