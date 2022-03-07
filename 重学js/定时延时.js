

function mySetInterval(fn,time){
    let flag = {
        status:true
    }
    function foo(){
        if(flag.status){
            fn()
            setTimeout(foo,time)
            console.log(flag);
        }
        
    }
    foo()
    return flag
}
let flag = mySetInterval(function(){
    console.log(1)
},1000)
console.log(flag);
setTimeout(function(){
    console.log(flag.status);
    flag.status = false
},3000)