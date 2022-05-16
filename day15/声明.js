/**
 * 暂时性死区
 */
var tmp = 123;

if (true) {
//   tmp = 'abc'; // ReferenceError
//   let tmp;
}

/**
 * 为什么需要块级作用域
 */ 
var tmp = new Date();

function f() {
  console.log(tmp);
  if (false) {
    // var tmp = "hello world"; // undefinde
    let tmp = "hello world"; //new Date
  }
}
f()

// Object.freeze 只会冻结第一层，想要多层冻结需要递归

const foo = Object.freeze({prop: 2,a: { a1: 1}});

// 常规模式时，下面一行不起作用；
// 严格模式时，该行会报错
foo.prop = 123;
foo.a.a1 = 2
console.log(foo);