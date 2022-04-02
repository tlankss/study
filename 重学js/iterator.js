/**
 * 迭代器： 帮助我们对某个数据结构遍历的对象
 * 
 * js中，迭代器也是一个具体的对象，这个对象符合迭代器协议(iterator protocol)
 *  迭代器定义定义产生了一系列的值的标准方式
 *  在js中这个标准就是一个特定的next方法
 *      next {done:true,value:val}
 *      done 布尔值
 *      value在done为true可不返回 默认undefined
 * 
 */

const friend = ['zhangsan','lisi','wangwu']
// 迭代器 版本一
    let ind = 0,
    myiterator = {
        next: function(){
            if(ind >= friend.length){
                return {done: true, value: undefined}
            }else{  
                return {done: false, value: friend[ind++]}
            }
        }
    }
console.log(myiterator.next());
console.log(myiterator.next()); 
console.log(myiterator.next()); 
console.log(myiterator.next()); 
console.log(myiterator.next()); 

// 迭代器 函数版本
let createIterator = function(arr){
    let index = 0
    return {
        ind1: 0,
        next: () => {
            if(index >= arr.length){
                return {done: true, value: undefined}
            }else{  
                return {done: false, value: arr[index++]}
            }
        }
    }
}
let iterator1 = createIterator(friend)
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());
console.log(iterator1.next());

/**
 * 迭代器 版本三 使对象变为可迭代对象
 *  可迭代对象 
 *      1.当一个对象实现了iterator protocal协议，它就是一个可迭代对象
 *      2.这个对象必须实现了@@iterator方法，在js中我们使用[Symbol.iterator]访问
 *  */ 

 let createriteratorObj =  {
    friend: ['zhangsan1','lisi1','wangwu1'],
    [Symbol.iterator]: function(){
        let index = 0
        return {
            next: () => {
                if(index >= this.friend.length){
                    return {done: true, value: undefined}
                }else{  
                    return {done: false, value: this.friend[index++]}
                }
            }
        }
    }
}
let iteratorObj2 = createriteratorObj[Symbol.iterator]()
console.log(iteratorObj2.next());
console.log(iteratorObj2.next());
console.log(iteratorObj2.next());
console.log(iteratorObj2.next());

for (const iterator of createriteratorObj) {
    console.log(iterator);
}


// 迭代器 版本4 class
class ClassIterator {
    constructor(students){
        this.students = students
    }
    addStudent(std){
        this.students.push(std)
    }
    [Symbol.iterator](){
        let ind = 0
        return {
            next: () => {
                if(ind < this.students.length){
                    return {done: false, value: this.students[ind++]}
                }else{
                    return {done: true, value: undefined}
                }
            }
        }
    }
}
let classIterator1 = new ClassIterator(friend)
let classIterator2 = classIterator1[Symbol.iterator]()
console.log(classIterator2.next());
console.log(classIterator2.next());
console.log(classIterator2.next());
console.log(classIterator2.next());

classIterator1.addStudent('maliu1')
for (const iterator of classIterator1) {
    console.log(iterator);
}