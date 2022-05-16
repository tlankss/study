/**
 * js是单线程，但是也可能存在处理大量数据的操作，所以还会有用到其它线程做一些任务，这些任务一一添加进任务队列，然后在js线程中执行
 *      而js线程-> 其它线程 -> 任务队列 ->js线程 这个的一个闭环叫做事件循环(浏览器)
 * 
 * 在任务队列中有宏微任务之分，在执行宏任务之前 必须要微任务已清空，如果不为空优先执行微任务队列中的任务
 *      宏任务队列：setTimeOut、 setInerval、ajax、DOM监听、UI Rendering等
 *      微任务队列：Promise的then回调、Mutation Observer API、 queueMicrotask等
 */


function interview1(){
    setTimeout(function () {
        console.log("setTimeout1");
        new Promise(function (resolve) {
          resolve();
        }).then(function () {
          new Promise(function (resolve) {
            resolve();
          }).then(function () {
            console.log("then4");
          });
          console.log("then2");
        });
    });
      
    new Promise(function (resolve) {
        console.log("promise1");
        resolve();
    }).then(function () {
        console.log("then1");
    });
      
    setTimeout(function () {
        console.log("setTimeout2");
    });
    
    console.log(2);
    
    queueMicrotask(() => {
        console.log("queueMicrotask1")
    });
    
    new Promise(function (resolve) {
        resolve();
    }).then(function () {
        console.log("then3");
    });
}
function interview2(){
    /**
     * async在不使用await关键词 是跟正常函数是一样的执行过程，使用await 就是添加了微任务 promise的then
     *  await 后的韩式还是会执行，只是后面的操作会添加微任务
     *  
     */
    async function async1 () {
        console.log('async1 start')
        await async2();
        console.log('async1 end')
    }
      
    async function async2 () {
        console.log('async2')
    }
      
    console.log('script start')
      
    setTimeout(function () {
        console.log('setTimeout')
    }, 0)
       
    async1();
       
    new Promise (function (resolve) {
        console.log('promise1')
        resolve();
    }).then (function () {
        console.log('promise2')
    })
      
}

function interview3(){
    Promise.resolve().then(() => {
        console.log(0);
        // 1.直接return一个值 相当于resolve(4)
        // return 4
      
        // 2.return thenable的值
        // return {
        //   then: function(resolve) {
        //     // 大量的计算
        //     resolve(4)
        //   }
        // }
      
        // 3.return Promise
        // 不是普通的值, 多加一次微任务
        // Promise.resolve(4), 多加一次微任务
        // 一共多加两次微任务
        return Promise.reject(4)
    }).catch((res) => {
        console.log(res)
    })
      
    Promise.resolve().then(() => {
        console.log(1);
    }).then(() => {
        console.log(2);
    }).then(() => {
        console.log(3);
    }).then(() => {
        console.log(5);
    }).then(() =>{
        console.log(6);
    })
}
interview3()
// 直接return一个值
// 0
// 1
// 4
// 2
// 3
// 5
// 6
// 2.return thenable的值
// 0
// 1
// 2
// 4
// 3
// 5
// 6
// return Promise
// 0
// 1
// 2
// 3
// 4
// 5
// 6

// interview2()
// script start
// async1 start/
// async2
// promise1
// async1 end
// promise2
// setTimeout

// interview1()
// promise1
// 2
// then1
// queueMicrotask1
// then3
// setTimeout1
// then2
// then4
// setTimeout2





