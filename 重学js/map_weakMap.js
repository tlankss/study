/**
 * Map 对象保存键值对，并且能够记住键的原始插入顺序。任何值(对象或者原始值) 都可以作为一个键或一个值。
 * 
 * 实例集方法：get set delete entries forEach has keys values clear 
 */

let myMap  = new Map(),
    obj = {'sky':1},
    arr = [1,2,3,obj]
myMap.set(18, 'kk')
myMap.set(obj) //不可简写
myMap.set('arr', arr)

console.log(myMap.get(obj)) // undefined
myMap.delete(obj)
const mapEntries = myMap.entries()
console.log(myMap.entries()) // 返回一个iterator对象 
for(let [key,val] of mapEntries){
    // 18,kk => arr ,1,2,3,{..}]
    console.log(key,val);
}
myMap.forEach((val) =>{
    // kk [1,2,3,{..}]
    console.log(val);
})
console.dir(myMap);



/**
 * weakMap：WeakMap 对象是一组键/值对的集合，其中的键是弱引用的。其键必须是对象，而值可以是任意的。
 * 
 * 方法集合： get set delete  has
 * 
 */
