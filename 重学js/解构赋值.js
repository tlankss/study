/**
 * 严格地说，解构赋值只能解构 可遍历的结构（Iterator）
 * 应用场景
 *  1.交换变量的值
 *  2.从函数返回多个值
 *  3.函数参数的定义
 *  4.提取JSON数据
 *  5.函数参数的默认值
 *  6.遍历Map结构
 *  7.输入模块的指定方法
 */
// 事实上，只要某种数据结构具有Iterator接口，都可以采用数组形式的解构赋值。
function* fibs() {
    var a = 0;
    var b = 1;
    while (true) {
      yield a;
      [a, b] = [b, a + b];
    }
}
var [first, second, third, fourth, fifth, sixth, c , d] = fibs();
// 0 1 1 2 3 5
console.log(first, second, third, fourth, fifth, sixth);

function f() {
    console.log('aaa');
}
  
let [x = f()] = []; // aaa 只有解构的值为undefined 才会取默认值，所以这里执行了f()


var x1;
// 下面代码的写法会报错，因为JavaScript引擎会将{x}理解成一个代码块，从而发生语法错误。只有不将大括号写在行首，避免JavaScript将其解释为代码块，才能解决这个问题。
// {x:x1} = {x: 1}
({x:x1} = {x: 1})

// 解构赋值 不乱使用（），因为解构赋值虽然很方便，但是解析起来并不容易。对于编译器来说，一个式子到底是模式，还是表达式，没有办法从一开始就知道，必须解析到（或解析不到）等号才能知道