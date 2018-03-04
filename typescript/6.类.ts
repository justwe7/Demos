class Me{
    // public name; //可以在内部外都可访问  默认
    // private name=221;//只在内部访问
    // protected name = 222;//内部和子类访问
    constructor(public name: string) {//只可在内部访问 ，必须实例化传入的参数
        console.log(name);
    }
    do() {
        console.log(1,name);
    }
}
/*var p1 = new Me();
p1.name = 1111;
console.log(p1);*/

var p2 = new Me('啊啊啊');
console.log(p2);

class He extends Me{//类的继承
    constructor(name) {
        super(name);
    }
    eat() {
        super.do();//访问继承的属性
        console.log('eat');
    }
}
var ax = new He('嘻嘻嘻');
ax.eat();

let arr2:Array<He> = [];//指定泛型，必须是he构造函数
arr2[0] = new He('aaa');
// arr2[1] = new Me('aaa');
