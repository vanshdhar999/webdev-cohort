// Asynchronous functions in js
// Async fns let you context switch between the functions, like if there is a heavy calculation we can move on
// to other tasks while it being completed

function iswasCalled() {
  console.log("I was called ");
}

function heavy() {
  let a = 0;
  for (let i = 0; i <= 10000000000; i++) {
    a++;
  }
  console.log("for loop ended");
}

iswasCalled();
setTimeout(iswasCalled, 3000);
console.log("I was printed");
heavy();
iswasCalled();

// concept of callbacks and event loop and web apis
// the async nature of functions calls the some sort of clock and runs for some duration
// after the duration is complete the function is sent to the callback queue and then event loop reads it is the
// thread is empty

// some example of async functions are setTimeout and fs.readfile which are in built async functions
// we can create our own async functions by building a wrapper on top out async function
//
