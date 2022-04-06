/**
 * stroage(贮存)： webStroage主要提供了一种机制，可以让浏览器提供一种比cookie更直观的key，value的存储方式
 *  localStroage：本地存储，提供一种永久性的存储方法，在关闭页面后依旧会保存
 *  sessionStroage： 会话存储，提供本次会话的存储，在关闭会话的时候就，存储的内容也会清除
 * 
 * 区别：
 *  1 关闭页面后重新打开，localStroage会保留，sessionStroage会被删除
 *  2 在页面内跳转 localStroage、sessionStroage都会保留
 *  3 在页面跳转到其它页面，localStroage会保留，sessionStroage不会被保留
 * 
 * 方法：
 *  setItem
 *  getItem
 *  removeItem
 *  delete
 *  key
 *  clear
 * 属性
 *  length
 */

// 使用class封装一个Stroage
sessionStorage.delete()
class lyCachc{
    constructor(status = true){
        this.stroage = status ? localStorage : sessionStorage
    }
    setItem(key,val) {
        stroage.setItem(key,JSON.stringify(val))
    } 
    getItem(key){
        let val = stroage.setItem(key)
        if(val){
            return JSON.parse(stroage.setItem(key))
        }
        return val
    }
    removeItem(key){
        stroage.removeItem(key,JSON.parse(val))
    }
    delete(key){
        this.stroage.delete(key)
    }
    clear(){
        this.stroage.clear()    
    }
    key(index){
        // 该方法接受一个数值 n 作为参数，并返回存储中的第 n 个键名。
        this.stroage.key(index)
    }
    getLeg(){
        return this.stroage.length
    }
}

let  loclCache = new lyCachc(),
    sesssionCache = new lyCachc();


export {
    loclCache,
    sesssionCache
}