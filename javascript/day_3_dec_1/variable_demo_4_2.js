var a = 10;
let b = 20;
const c = 30;
console.log(`Global : a is ${a} , b is ${b} , c is ${c}`); // global 

function test1() {
    var a = 100;
    let b = 200;
    const c = 300;
    console.log(`Function : a is ${a} , b is ${b} , c is ${c}`); // Function 

    if (true) {
        var a = 1000;
        let b = 2000;
        const c = 3000;
        console.log(`Block : a is ${a} , b is ${b} , c is ${c}`); // Function 
    }
}
test1();

var a = 'hello';
// let b = 'hiiii';
