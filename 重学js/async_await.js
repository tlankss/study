/**
 * async 异步
 *  在函数前加async 在其内不使用关键词 await，
 */

async function add(){
    console.log(2);
}
console.log(1);
add()
console.log(3)
// 1 2 3
