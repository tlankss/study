/**
        定义：是把接收多个参数的函数，变成接受多个单一参数的函数，并且返回接受余下参数的函数，而且在参数全部接收后返回结果的函数技术
*/
    function fn(x,y,z){
        return x+y+z
    }
    
    function curryFn(x){
        return function(y){
            return function(z){
                return x+y+z
            }
        }
    }

    const curryFn1 = x => y => z =>{
        return x+y+z
    }
    // console.log(curryFn(1)(2)(3));
    // console.log(curryFn1(1)(2)(3));


    // 自动柯里化函数
    // 点1:判断参数的长度是否符合fn所需参数的长度
    // 点2:根据入参长短 控制返回的值 
    //     少则返回携带了上次传入参数的的fn函数
    //     多/等于 返回fn执行结果
    function myCurrying(fn){
        function curried(...arg){
            // fn多少的入参数就是 fn.length
            if(fn.length <= arg.length){
                // 入参吻合 返回结果
                return fn.apply(this,arg)
            }else{
                // 入参少于 需要返回还能接收剩下参数的函数
                return function(...arg2){
                    return curried.apply(this,arg.concat(arg2))
                }
            }
        }
        return curried
    }
    let fn1 = myCurrying(fn)
    let fn2 = fn1(1)
    console.dir(fn2(2,3,4));


