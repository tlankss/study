var a = 0;
// 根据

let obj = {
    a: 0,
    add1() {
        console.log(this);
        this.a++;
    },
    add2: () => {
        console.log(this);
        this.a++;
    },
    addFn: {
        a: 0,
        add3() {
            console.log(this);
            this.a++;
        },
        add4: () => {
            console.log(this);
            this.a++;
        },
        addChildFn: {
            a: 0,
            add5: () => {
                console.log(this);
                this.a++;
            },
        },
    },
};
// obj.add1();
// console.log(a, obj.a); //                0 1
// let myadd1 = obj.add1;
// myadd1();
// console.log(a, obj.a); //                1 1  如果使用let => 0 1,因为this是window，但是let声明的值a不会在a上 ，所以a不变

// obj.add2();
// console.log(a, obj.a); //                1 0
// let myadd2 = obj.add2;
// myadd2();
// console.log(a, obj.a); //                2 0

// obj.addFn.add3();
// console.log(a, obj.a, obj.addFn.a); //   0 0 1 add3的时候是不会显示的 this是addFn
// obj.add3 = obj.addFn.add3;
// obj.add3();
// console.log(a, obj.a, obj.addFn.a); //   0 1 1
// let myadd3 = obj.addFn.add3;
// myadd3();
// console.log(a, obj.a, obj.addFn.a); //   1 0 1 因为this的指向myadd3 只是函数的指针，是独立函数调用，所以在调用的时候this就是window

// obj.addFn.add4();
// console.log(a, obj.a, obj.addFn.a); //      1 0 0
// obj.add4 = obj.addFn.add4;
// obj.add4();
// console.log(a, obj.a, obj.addFn.a); //      2 0 0
// let add4 = obj.addFn.add4;
// add4();
// console.log(a, obj.a, obj.addFn.a); //      3 0 0

// obj.addFn.addChildFn.add5();
// console.log(a, obj.a, obj.addFn.a, obj.addFn.addChildFn.a); //      1 0 0 0
// obj.addFn.add5 = obj.addFn.addChildFn.add5;
// obj.addFn.add5();
// console.log(a, obj.a, obj.addFn.a, obj.addFn.addChildFn.a); //      2 0 0 0
// let add5 = obj.addFn.addChildFn.add5;
// add5();
// console.log(a, obj.a, obj.addFn.a, obj.addFn.addChildFn.a); //      3 0 0 0
