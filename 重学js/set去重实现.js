// var arrData =[
    //    {age:18,name:'kk'},
    //    {age:18,name:'kk'},
    //    {age:18,name:'kk'},
    //    {age:18,name:'kk'},
    //    {age:18,name:'kk'},
    //    {age:18,name:'kk'},
    //    {age:17,name:'kk'},
    // ]
    // console.log(('age' in arrData[0]))
    // var ages=[]
    // for(var i=0; i<arrData.length;i++){
    //     if(ages[0] !== arrData[i].age){
    //         ages.push(arrData[i].age)
    //     } 
    // }

    // function Set1(arr) {
    //     var items = {};
    //     // 构造函数
    //     this.constructor = function(){
    //         console.log(999)
    //     }
    //     this.has = function(value){
    //         return items.hasOwnProperty(value);
    //     },
    //     this.add = function(value){
    //         if (!this.has(value)) {
    //             items[value] = value;
    //             return true;
    //         }
    //         return false;
    //     },
    //     this.remove = function(value){
    //         if (this.has(value)) {
    //             delete value;
    //             return true;
    //         }
    //         return false;
    //     },
    //     this.clear = function(){
    //         items={};
    //     },
    //     this.size = function(){
    //         var count = 0;
    //         for(var prop in items){
    //             if (items.hasOwnProperty(prop)) {
    //                 ++count;
    //             }
    //         }
    //         return count;
    //     },
    //     this.values= function(){
    //         var values = [];
    //         for(var value in items){
    //             if (items.hasOwnProperty(value)) {
    //                 values.push(value);
    //             }
    //         }
    //         return values;
    //     },
    //     this.union = function(otherSet){
    //         var unionSet = new Set();
    //         var values = this.values();
    //         for (var i = 0; i < values.length; i++) {
    //             unionSet.add(values[i]);
    //         }

    //         values = otherSet.values();
    //         for (var i = 0; i < values.length; i++) {
    //             unionSet.add(values[i]);
    //         }

    //         return unionSet;
    //     },
    //     this.intersection = function(otherSet){
    //         var intersection = new Set();
    //         var values = this.values();
    //         for (var i = 0; i < values.length; i++) {
    //             if (otherSet.has(values[i])) {
    //                 intersection.add(values[i]);
    //             }
    //         }
    //         return intersection;
    //     },
    //     this.difference = function(otherSet){
    //         var difference = new Set();
    //         var values = this.values();
    //         for (var i = 0; i < values.length; i++) {
    //             if (!otherSet.has(values[i])) {
    //                 difference.add(values[i]);
    //             }
    //         }
    //         return difference;
    //     },
    //     this.subset = function(otherSet){
    //         var values = this.values();
    //         if (this.size() > otherSet.size()) {
    //             return false;
    //         }
    //         else{
    //             for (var i = 0; i < values.length; i++) {
    //                 if (!otherSet.has(values[i])) {
    //                     return false;
    //                 }
    //             }
    //             return true;
    //         }
    //     }
    // }

    // const assert = (condition, msg) => { //主要用来对某些条件进行判断，抛出错误。
    //     if (!condition) throw new Error(msg)
    // }
    // const isDef = (value) => { // 过滤掉null和undefined
    //     return value != void 0
    // }
    // const isIterable = (value) => { // 简单判断value是否是迭代器对象.
    //     return isDef(value) && typeof value[ Symbol.iterator ] === 'function'
    // }
    // assert(false,'错误错误')
    // isDef(0)
    function createIterator(items) {
        var i = 0;
        return { // 返回一个迭代器对象
            next: function () { // 迭代器对象一定有个next()方法
                console.log('调用到了createIterator next()')
                var done = (i >= items.length);
                var value = !done ? items[i++] : undefined;
                return { // next()方法返回结果对象
                    value: value,
                    done: done
                };
            }
        };
    }
    var colors = ["red", "green", "blue"];
    var iterator = createIterator(colors);
    while (!iterator.next().done) {
        console.log(iterator.next().value);
    }