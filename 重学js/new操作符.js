/*
    new: 
        mdn:运算符创建一个用户定义的对象类型的实例x或具有构造函数的内置对象的实例。

        在函数中return 非基本数据类型 会覆盖输出的值，基本数据类型不会破坏值
    操作：
        1.创建一个空的简单JavaScript对象（即{}）；
        2.为步骤1新创建的对象添加属性__proto__，将该属性链接至构造函数的原型对象 ；
        3.将步骤1新创建的对象作为this的上下文 ；
        4.如果该函数没有返回对象，则返回this。

*/
    function Test(name,age) {
        this.name = name
        this.age = age

        // return 1
        // return true
        // return null
        // return ''
        // return []
        // return {}
    }
    Test.prototype.hobby = 'bicycle'
    Test.prototype.sayName = function () {
        console.log(this.name)
    }
    // 正常输出
    var a = new Test('a',18)
    console.log(a);
    console.log(a.name);
    console.log(a.age);
    console.log(a.hobby);
    a.sayName()
    /*
        new做了什么事情
        1.new操作符返回一个对象，所以需要一个对象
        2.这个对象，也就是构造函数中的 this，可以访问到挂载在 this 上的任意属性
        3.这个对象可以访问到构造函数原型上的属性，所以需要将对象与构造函数链接起来
        4.返回原始值需要忽略，返回对象需要正常处理


        补充 
        1.Object.setPrototypeOf()，为现有对象设置原型，返回一个新对象接收两个参数：第一个是现有对象，第二是原型对象。
    **/
    function myNew(Con, ...args) { // Con传入的构造函数
        if(typeof Con !== 'function'){
            throw 'Con must be a function'
        }
        // 创建一个空对象
        var obj = {}
        // 将创建的对象的隐性原型指向传入的函数原型prototype
        obj.__proto__ = Con.prototype
        // 改变上下文到创建的对象，this指向
        const res = Con.apply(obj,[...args])
        console.log(res);
        return obj
    }
    function myNew1(Con,...arg){
        var obj = {}
        obj.__proto__ = Con.prototype
        Con.myApply(obj,[...arg])
        return obj
    }
    // 正常输出
    var b = myNew(Test,'a',18)
    console.log( b );
    console.log(b.name);
    console.log(b.age);
    console.log(b.hobby);
    b.sayName()
