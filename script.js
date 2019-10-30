// function multiply(a, b) {
//     return a * b
// }

// console.log(multiply(2,3));

function greet(greeting='Hello') {
 console.log(greeting);
}

// greet();

let args = [1,2,3];

function test() {
    console.log(args);
}

test(...args);