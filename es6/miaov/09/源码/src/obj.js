/**
 * 对象的扩展
 */

// 对象的简洁表示法

let a = 1;

// const obj = {
//   a: a
// };

// const obj = {a}
// 
// console.log(obj);

// const obj = {
//   fn: function (){
//     console.log(1);
//   },
//   fn2(){
//     console.log(2);
//   }
// }
// 
// obj.fn();
// obj.fn2();




// Object.is()

// console.log(Object.is(NaN, NaN));
// 
// console.log(Object.is(+0, -0));  //false



// Object.assign() 
// 用于对象的合并，将源对象的所有可枚举属性，复制到目标对象。

let obj1 = {a: 1};
let obj2 = {a: 2, b: 3};
let obj3 = {c: 'abc'};

Object.assign(obj1, obj2, obj3);

console.log(obj1);















