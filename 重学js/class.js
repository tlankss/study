/*
        class 是函数，视为一种定义构造器及其原型方法的语法糖
        通过class创建的函数存在[[IsConstructor]]: true

        可以赋值
            let Cls = class MyClass....
            new Cls()
    */
            class MyClass {
                static num=1
                name='kk'
                constructor(val = 1){ //初始化执行函数
                    this.val = val
                }
                add(){
                    this.val++
                }
                add1 = () =>{
                    this.val++
                }
                getNum(){
                    return name
                }
            }
            let cls = new MyClass(1)
            cls.add() // cls.val=2
            cls.getNum() // kk
            // this.val++ =>NaN, cal.val=2
            // this指向为引用执行上下文，所以this.val undefined
            setTimeout(cls.add,100) 
            setTimeout(cls.add1,100) // 正常执行 cls.val =2
            MyClass.num // 1
            cls.num // undefined
        
            /**
             * class 继承 extends
             * 类语法不仅允许指定一个类，在 extends 后可以指定任意表达式
            */
            class MyClsEx extends MyClass{
                decrement = () =>{
                    this.val--
                }
                add = () => {
                    this.val+=2  
                }
            }
            var cls1 = new MyClsEx()
            cls1.decrement() // cls1.val=0
            cls1.add() // cls1.val =2  add方法重写
            console.log(cls1.val)
        
        
        
        
        
            /**
             * 习题一
             *  class重写构造函数
             * 习题二 
             *  创建一个继承自 Clock 的新的类 ExtendedClock，并添加参数 precision — 每次 “ticks” 之间间隔的毫秒数，默认是 1000（1 秒）。创建一个继承自 Clock 的新的类 ExtendedClock，并添加参数 precision — 每次 “ticks” 之间间隔的毫秒数，默认是 1000（1 秒）。
             **/
            function Clock({ template }) {
                let timer;
            
                function render() {
                let date = new Date();
            
                let hours = date.getHours();
                if (hours < 10) hours = '0' + hours;
            
                let mins = date.getMinutes();
                if (mins < 10) mins = '0' + mins;
            
                let secs = date.getSeconds();
                if (secs < 10) secs = '0' + secs;
            
                let output = template
                    .replace('h', hours)
                    .replace('m', mins)
                    .replace('s', secs);
            
                console.log(output);
                }
            
                this.stop = function() {
                clearInterval(timer);
                };
            
                this.start = function() {
                render();
                timer = setInterval(render, 1000);
                };
            
            }
            class ClockCls {
                constructor({ template }){
                    this.template = template
                }
                render = () => {
                    let date = new Date();
                    let hours = date.getHours();
                    if (hours < 10) hours = '0' + hours;
                    let mins = date.getMinutes();
                    if (mins < 10) mins = '0' + mins;
                    let secs = date.getSeconds();
                    if (secs < 10) secs = '0' + secs;
                
                    let output = this.template
                        .replace('h', hours)
                        .replace('m', mins)
                        .replace('s', secs);
                
                    console.log(output);
                }
        
                stop = () => {
                    clearInterval(this.timer);
                }
        
                start = () => {
                    this.render();
                    this.timer = setInterval(this.render, 1000);
                }
            }
            class ExtendedClock extends ClockCls{
                constructor(options){
                    super(options)
                    this.precision = options.precision
                }
                start = () => {
                    this.render();
                    this.timer = setInterval(this.render, this.precision);
                }
            }
        //   let clock = new Clock({template: 'h:m:s'});
        //   clock.start();
          let extendedClock = new ExtendedClock({template: 'h:m:s',precision:5000})
          extendedClock.start()