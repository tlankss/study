 /**
 * 前端声明 var let const
 *    区别：
    1.var声明的变量会挂到window上，而let和const不会
    2.var声明的变量存在变量提升，而let和const不会
    3.let和const声明形成块作用域，只能在块作用域里访问，不能跨块访问，也不能跨函数访问
    4.同一作用域下let和const不能声明同名变量，而var可以
    5.暂时性死区，let和const声明的变量不能在声明前被使用
    babel在转换的过程中只会实现2，3，5
*/
/**
在es5环境中实现let
    将变量名转换（babel）
    IIFE（自执行函数）
*/
    for (var index = 0; index < 10; index++) {
        console.log(index)
    }
    console.log(index) // 10
    // babel转换 ===>
    for (var _ind = 0; _ind < 10; _ind++) {
        console.log(_ind)
    }
    // console.log(ind) // Uncaught ReferenceError: ind is not defined
    function _let(){ 
        (function(){

        })()
    }

    /**
        在es5环境中实现const
            借用object的Object.definepropert去控制修改
            Object.defineProperty(obj, prop, desc)
                obj	要在其上定义属性的对象
                prop	要定义或修改的属性的名称
                descriptor	将被定义或修改的属性描述符

            属性描述符   说明   默认值
                value
                该属性对应的值。可以是任何有效的 JavaScript 值（数值，对象，函数等）。默认为 undefined 
                undefined

                get
                一个给属性提供 getter 的方法，如果没有 getter 则为 undefined
                undefined

                set
                一个给属性提供 setter 的方法，如果没有 setter 则为 undefined。当属性值修改时，触发执行该方法
                undefined

                writable
                当且仅当该属性的writable为true时，value才能被赋值运算符改变。默认为 false
                false

                enumerable
                enumerable定义了对象的属性是否可以在 for...in 循环和 Object.keys() 中被枚举
                false

                Configurable
                configurable特性表示对象的属性是否可以被删除，以及除value和writable特性外的其他特性是否可以被修改
                false
    */
    function _const(key,value){
        const desc = {
            value,
            writable: false
        }
        // 或者通过在set func的时候全部return错误 throw new TypeError('Assignment to constant variable.')
        return Object.defineProperty(window,key,desc)
    }
    var kk = _const('kk',99)
    kk = 20
    console.log(kk) // 99