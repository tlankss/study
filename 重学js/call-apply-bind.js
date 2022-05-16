/*
≥定义：apply、call、bind是改变函数this指向的方法
apply、call是直接绑定且执行，它们的区别在于传递参数上一个是数组(apply)一个是多参(call)
bind是只绑定不执行,传递参数(数组)
*/
var name = 'window'
function fn(name1,name2){
    console.log(this.name,name1,name2)
}
let obj = {
    name: 'obj'
}

Function.prototype.myCall1 = function(thisBind,...arg){
    var thisBind = thisBind ? Object(thisBind) : window
    // 将原函数的一切赋值给fn
    thisBind.fn = this
    // 由传入的thisBind去调用
    var res = thisBind.fn(...arg)
    delete thisBind.fn
    return res
}
Function.prototype.myApply1 = function(thisBind,[...arrLike]){
    thisBind = thisBind ? Object(thisBind) : window
    thisBind.fn = this
    const res = thisBind.fn(...arrLike)
    delete thisBind.fn 
    return res
}
Function.prototype.myBind1 = function(thisBind,...arg){
    thisBind = thisBind ? Object(thisBind) : window
    thisBind.fn = this
    return function(...arg1){
        var args = [...arg,...arg1]
        thisBind.fn(...args)
    }
}
/*
    parmes
        thisBind 需要修改的指向地址
        arg入参（剩余参数） es6之前使用arguments
    return 需要输出执行的fn函数
*/
Function.prototype.myCall = function(thisBind,...arg){
    /**
        首先需要判断thisbind的值 在非对象的值的情况下，
        如string 可以使用Object方式将其转为对象 
        在无参或者bull等等环境下 使用this默认的全局对象
    */
    thisBind = thisBind ? Object(thisBind) : window

    /**
        因为myCall是给函数调用，则因为this隐式绑定，所以this就是 调用的函数
    */
    thisBind.fn = this
    let result = thisBind.fn(...arg) //执行的结果
    // 避免内存泄漏
    delete thisBind.fn
    return result
} 
Function.prototype.myApply = function(thisBind,arrlike){
    thisBind = thisBind ? Object(thisBind) : window
    // 第二个参数非数组抛出错误
    if(!Array.isArray(arrlike)){
        throw SyntaxError('Illegal newline after throw')
    }
    // 进入执行阶段
    thisBind.fn = this
    const result  = thisBind.fn(...arrlike)
    delete thisBind.fn
    return result
    
}
// bind的区别在于不执行 返回函数
Function.prototype.mybind = function(thisBind,...bindArg){
    thisBind = thisBind ? Object(thisBind) : window
    thisBind.fn = this
    // 在于需要对 传入的参数不断添加 返回给原来的函数
    return function(...newArg){
        let arg = [...bindArg,...newArg]
        return thisBind.fn(...arg)
    }
}
fn()
fn.call(obj,1,2,3)
fn.apply(obj,[2,3,4])
let fn1 = fn.bind(obj,1,2,3)
fn1()
fn.myCall1(obj,1,2,3)
fn.myApply1(obj,[2,3,4])
let fn2 = fn.myBind1(obj,1,2,3)
let fn3 = fn.myBind1(obj,1,)
fn2()
fn3(3)