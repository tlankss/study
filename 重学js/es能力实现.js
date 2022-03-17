/**
 * set
 */


/**
 * flat
 */

// reduce 与 concat

// reduce + concat + isArray + recursivity

// forEach+isArray+push+recursivity

// 使用堆栈stack

/**
 * promise
 * 
 */

const PROMISE_PENDING = 'pending',
    PROMISE_FUIFILLED = 'fuifilled'
    PROMISE_REJECTED = 'rejected'
class myPromsie{
    constructor(executor){
        let status = PROMISE_PENDING,
            value = undefined,
            reason = undefined;
        const resolve = (value)=> {
            // 状态只有一次改变的机会,所以在函数resolve 和 reject 只能一次调用
            if(status === 'pending'){
                setTimeout(() => { // 使用setimerout 使该段代码在任务的最后执行
                    status = PROMISE_FUIFILLED
                    value = value
                    console.log('------------触发resolve',value);
                    this.onFuifilled()
                },0)　
            }
        },
        reject = (reason) => {
            if(status === 'pending'){
                setTimeout(() => {
                    status = PROMISE_REJECTED
                    reason = reason
                    console.log('------------触发reject',value);
                    this.onReject()
                },0)
            }
        };
        executor(resolve, reject)

    }
    then(onFuifilled,onReject){
        this.onFuifilled = onFuifilled
        this.onReject = onReject
    }

    
}

const promise =  new myPromsie((resolve,reject) => {
    resolve(111)
    reject(222)
})

promise.then(res => {
    console.log('执行fuifilled回调');
},err => {
    console.log('执行rejcet回调');
})