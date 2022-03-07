 /**
        继承可以帮助我们将重复的代码和逻辑抽取到父类中，子类通过直接继承过来使用
        继承 就是对原型链的适用

        重复利用另外一个对象的属性和方法


        原型链继承
        构造函数继承
        原型继承
        寄生式继承
        寄生组合继承
    */
    
    
    /*
        方式一  原型链继承   ----- start
    */
    // function Person(){
    //     this.name = 'person'
    // }
    // function Student(){
    //     this.age = 18
    //     this.name = 'student'
    // }
    // Person.prototype.getName = function(){
    //     console.log(`Person----getName${this.name}`)
    // }
    // const p = new Person()
    // Student.prototype = p
    // const s = new Student()
    // console.dir(s)
    // s.getName() // Person----getName student
    /*
        方式一  原型链继承   ----- end
    */


    /*
        方式二  构造函数继承   ----- start

        父类函数 会多 创建的name age 的参数
    */
    // function Person(name,age){
    //     this.name = name
    //     this.age = age
    //     this.getName = function(){
    //         console.log(`lx----${this.name}`)
    //     }
    // }
    // function Student(name,age){
    //     Person.call(this,name,age)
    //     this.name = 'student'
    // }
    // const s = new Student('lyw',18)
    // s.getName() // lx----student
    // console.dir(s)
    /*
        方式二  构造函数继承   ----- end
    */

    /*
        方式三  组合继承  ----- start

       组合继承无论在什么情况下，都会调用两次父类构造函数
        一次在创建子类原型
        一次在子类构造函数内部(创建子类实例的时候)
    */
    /*
        方式三  组合继承   ----- end
    */


    /*
        方式四  原型式继承函数  ----- start
    */
    
        function myObj(obj){
            function Fn(){}
            Fn = obj.prototype
            return new Fn()
        }
        function myObj(obj){
            var newObj = {}
            Object.setPrototypeOf(newObj,obj)
            return newObj
        }