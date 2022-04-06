/**
 * JSON javaScript Object Notation(javaScript对象符号)
 *  JSON是一种重要的数据格式，并不是编程语言，它的作用是在服务器和客户端之间传输数据使用的(多种语言可使用)，在js早期是有XML用来传输，但是XML
 *  这种格式在解析、传输等方面都弱于JSON，所以目前很少使用。  而Protobuf是一种新的传输格式，使用的人越来越多，但是前端使用的较少，其只在2021年才出版本兼容js
 * 
 * 场景：
 *  1 网络数据的的传输JSON
 *  2 项目的某些配置文件 比如小程序app.json
 *  3 非关系型数据库将json做为存储格式 
 * 
 *顶层支持三种类型值
 *  1 简单值 number、string（不支持单引号）、null、boolean，不支持undefined
 *  2 对象值 由于key vlaue组成，key必须用双引号包裹，value可以是简单值、数组、对象值
 *  3 数组值 数组的值可以为 简单值、数组值、对象值
 *  
 * 注：在最后一个数据，不能有逗号
 * 
 * 反序列化和序列化也可作为前端深拷贝的方式(需要数据无函数、特殊的对象Date等)，因为JSON只支持数组、对象、字符串、数字等类型
 */

/**
 * JSON的  序列化/反序列化
 */
let obj = {
    name: 'kk',
    age: 18,
    Hobby: ['骑车','羽毛球']
}

let obj2 = {
    name: 'kk',
    age: 18,
    Hobby: ['骑车','羽毛球'],
    toJSON:function(){
        return 'xh'
    }
}

/**
 * stringify 序列化
 *  parmase
 *      value: 需json的数据
 *      replacer: 
 *          数组 value中需要JOSN转换的name名
 *          函数 key,value  输出
 *      space JSON按照space空格格式，如2 就是空2个空格格式化
 * 注意：如果传入的value有toJSON方法，获优先执行
 */
let strObj = JSON.stringify(obj) // {"name":"kk","age":18,"Hobby":["骑车","羽毛球"]}
let strObj1 = JSON.stringify(obj,['name','Hobby']) //{"name":"kk","Hobby":["骑车","羽毛球"]}
let strObj2 = JSON.stringify(obj,(key,value) => {
    if(key === 'name'){
        return 'tlanks'
    }
    return value
})  // {"name":"tlanks","age":18,"Hobby":["骑车","羽毛球"]}
let strObj3 = JSON.stringify(obj,null,2)
// strObj3输出
// {
//     "name": "kk",
//     "age": 18,
//     "Hobby": [
//       "骑车",
//       "羽毛球"
//     ]
//  }
let strObjTo = JSON.stringify(obj2) // xh

/**
 * parse 反序列化
 */
let parseObj = JSON.parse(strObj)
let parseObj2 = JSON.parse(strObj,(key,val) => {
    if(key === 'Hobby'){
        return ['无']
    }
    return val
})
// {
//     name: 'kk',
//     age: 18,
//     Hobby: ['无']
// }


