/**
 * 生成器
 * generrator:  generrator可以理解为特殊的iterator
 *  定义：
 *      首先生成器函数需要在function之后加 * 标识符
 *      其次可以听过yield关键词来控制函数的执行流程
 *      最后需要返回值是一个生成器（Generator）
 * 
 */

let mygenerrator = function* (){
    console.log('第一个generrator');
    yield 1
    console.log('第一个generrator1');
    yield 2
    yield 3
    yield 4
}
let ger = mygenerrator()
console.log(ger.next())  //{done: false,value: 1}  
console.log(ger.next())  // {done: false,value: 2}
// console.log(ger.throw('lyw错误'))  // 输出错误 停止
// console.log(ger.return())  // {done: true,value: undefined}



/**
 * prototype方法
 *   next() 进入下一步
 *   return()返回给定的值并结束生成器 {done: true,value: undefined}
 *   throw() 跑出错误 终止运行
 */

// 无限生成器
let creatorGen = function* (){
    let ind = 0
    let inds = 0
    while (true) {
        console.log(ind,inds);
        inds = yield ++ind + inds

    }
}
let ger1 = creatorGen()
let ger1Res1 = ger1.next().value // 起
let ger1Res2 = ger1.next(ger1Res1).value 
let ger1Res3 = ger1.next(ger1Res2).value 
let ger1Res4 = ger1.next(ger1Res3).value 
let ger1Res5 = ger1.next(ger1Res4).value 

console.log(ger1Res1,ger1Res2,ger1Res3,ger1Res4); // 1 3 6 10

/**
 * 一些情况下生成器 替代迭代器
 */

const friend = ['zhangsan','lisi','wangwu']
function* mygenerrator1(arr){
    ind = yield* arr
}
let ger2 = mygenerrator1(friend)
console.log(ger2.next());
console.log(ger2.next());
console.log(ger2.next());
console.log(ger2.next());
console.log(ger2.next());

/**
 * 自定义类迭代
 *  在[Symbol.iterator]前加* / 
 */
class GerClass {
    constructor(students){
        this.students = students
    }
    addStudent(std){
        this.students.push(std)
    }
    *[Symbol.iterator](){
        yield* this.students
    }


}
let createrGerClass = new GerClass([1,2,3,4]),
createrGer = createrGerClass[Symbol.iterator]();
console.log(createrGer.next());
console.log(createrGer.next());
console.log(createrGer.next());
console.log(createrGer.next());
console.log(createrGer.next());
console.log(createrGer.next());

/**
 * generrator 解决异步请求问题
 *  可以写一个函数 自动执行（根据done值输出还是执行）
 * 
 */
