/**
 *  const 在定义不会改变的常量使用，在定义饮用类型可以更改是因为存储的是内存地址
 *  不可重复命名
 *  let/const 存在暂时性死区问题，是因为生成了局部
 */

const a = 0 
let b = 0 // let

// const a = 2  Uncaught SyntaxError: Identifier 'a' has already been declared  不可重复命名
// a = 2 Uncaught TypeError: Assignment to constant variable


// 

