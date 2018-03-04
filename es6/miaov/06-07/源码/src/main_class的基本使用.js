/**
 * class 语法
 */

// -------------------------------------------------------
/**
 * JS语言的传统方法是通过构造函数，定义并生成新对象，是一种基于原型的面向对象系统。这种写法跟传统的面向对象语言（比如C++和Java）差异很大，很容易让新学习这门语言的人感到困惑。所以，在ES6中新增加了类的概念，可以使用 class 关键字声明一个类，之后以这个类来实例化对象。
 */

// const Miaov = function (a, b){
//   this.a = a;
//   this.b = b;
//   return this;
// };
// 
// Miaov.prototype = {
//   constructor: Miaov,
//   print: function (){
//     console.log(this.a + ' ' + this.b);
//   }
// };
// 
// 
// const miaov = new Miaov('hello', 'world').print();

class Miaov {
  constructor(a, b){
    this.a = a;
    this.b = b;
    return this;
  }
  print(){
    console.log(this.a + ' ' + this.b);
  }
};

const miaov = new Miaov('hello', 'world').print();

console.log(typeof Miaov);


// 1 Miaov中的constructor方法是构造方法，this关键字则代表实例对象。也就是说，ES5的构造函数Miaov，对应ES6的Miaov这个类的构造方法。

// 2 Miaov这个类除了构造方法，还定义了一个print方法。注意，定义“类”的方法的时候，前面不需要加上function这个关键字，直接把函数定义放进去了就可以了。另外，方法之间不需要逗号分隔，加了会报错。

// 3 构造函数的prototype属性，在ES6的“类”上面继续存在。而且类的所有方法都定义在类的prototype属性上面。

console.log(Miaov.prototype);

// 4 定义在类中的方法都是不可以枚举的。

console.log(Object.keys(Miaov.prototype));

// 5 constructor方法是类的默认方法，通过new命令生成对象实例时，自动调用该方法。一个类必须有constructor方法，如果没有显式定义，一个空的constructor方法会被默认添加。

class P {};

const p = new P();

console.log(p);

// 6 生成类的实例对象的写法，与ES5完全一样，也是使用new命令。如果忘记加上new，像函数那样调用Class，将会报错。

P();

























