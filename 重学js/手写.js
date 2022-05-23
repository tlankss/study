// 用法如下:
function fn1(x) {
    return x + 1;
  }
  function fn2(x) {
    return x + 2;
  }
  function fn3(x) {
    return x + 3;
  }
  function fn4(x) {
    return x + 4;
  }
  function compose(...fn){
    if(!fn.length) return
    if(fn.length === 1) return fn[0]
    return fn.reduce((pre,cur) => {
        return function(...args){
            pre(cur(...args))
        }
    })
  }
  const a = compose(fn1, fn2, fn3, fn4);

// setInterval\setTimeout 相互转换
function mysetTimeout(fn,time){
	let i = 0;
	let timer = setInterval(()=>{
		i++
		if(!i) return
		fn()
		clearInterval(timer)
	},time)
    return {
        cancel: ()=>{
            clearInterval(timer)
        }
    }
}

function mySetInterval(fn,time){
    let timer = null
    function interval(){
        fn()
        timer = setTimeout(interval, time);
    }
    interval()
    return {
        cancel: ()=>{
            clearTimeout(timer)
        }
    }
}
// var s = mySetInterval(()=>{console.log(1);},1000)
// var t = mysetTimeout(()=>{console.log(2);},2000)
// setTimeout(()=>{
//   s.cancel()
//   t.cancel()
// },1000)

// 扁平化数组
function flatArr(arr){
	return arr.reduce((pre,cur)=> Array.isArray(cur) ? [...pre,...flatArr(cur)] : [...pre,cur],[])
}
// console.log([1,[1,2,[1,2]]].flat(Infinity));
// console.log(flatArr([1,[1,2,[1,2]]]))
// 数组去重
function uniqueArr(arr){
	return [...new Set(arr)]
}
// console.log(uniqueArr([1,2,41,,1,1,3,1,4,2,5]));

