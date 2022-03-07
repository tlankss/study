/**
 * set 允许存储任何类型的唯一值
 */
let myset = new Set()

/**
 * 实例方法集 add delelet has forEach entries clear 
 */
const obj = {name: 'why'}
const arr = [1,2,3,4,5]
myset.add('name','kk')
myset.add(18,'kk18')
myset.add('age',obj)
myset.add('role','码农')
myset.add(obj,1)
myset.add(arr,2)
console.log(myset.entries()); // 返回一个可迭代对象 类似 [value, value] 形式的数组

myset.forEach((key,val,item) => {
    /**
     * key 元素的值
     * val 元素的索引 但是由于集合对象中没有索引(keys)，所以前两个参数都是Set中元素的值(values)，之所以这样设计回调函数是为了和Map 以及Array的 forEach 函数用法保持一致。
     * item正在遍历的集合对象
     */
    console.log(key,val,item);
})

// 检验是否存在
console.log(myset.has({})); //false
console.log(myset.has(obj)); // true


/**
 * values() 方法按照元素插入顺序返回一个具有 Set 对象每个元素值的全新 Iterator 对象
 * 而keys 是values的别名 返回的东西是一致
 */
console.log(myset.keys());  // 返回具有迭代行的对象
console.log(myset.values()); // 返回具有迭代行的对象
console.log(myset.keys() === myset.values()); // false
myset.delete('role')
myset.clear() // 清楚所有
console.log(myset);





/**
 * weakSet对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
 * 无法使用基本数据类型作为键， 只能是 Object 类型
 * 
 * 实例方法集 add has delete 
 * 
 *  避免循环引用
 * WeakMap 持有的是每个键对象的“弱引用”，这意味着在没有其他引用存在时垃圾回收能正确进行
 */

let myWeakSet = new WeakSet()


// myWeakSet.add(18,'18') //Uncaught TypeError: Invalid value used in weak set