/**
 * 变量的解构赋值
 */

// -------------------------------------------------------------------
/**
 * 基本概念：
 *    本质上就是一种匹配模式，只要等号两边的模式相同，那么左边的变量就可以
 *    被赋予对应的值。
 * 结构赋值主要分为：
 *    1 数组的解构赋值
 *    2 对象的结构赋值
 *    3 基本类型的解构赋值
 */
// let a = 1;
// let b = 2;
// let c = 3;

// let [a, b, c] = [1, 2, 3];
// 
// console.log(a, b, c);

// -------------------------------------------------------------------
// 1 数组的解构赋值

// let [a, [[b], c]] = [1, [[2], 3]];
// 
// console.log(a, b, c);  // 1, 2, 3

// let [, , c] = [1, 2, 3];
// 
// console.log(c); // 3

// let [x] = [];
// 
// console.log(x);  // let x; undefined

// let [y = 1] = [];
// 
// console.log(y); // 1



// -------------------------------------------------------------------
// 2 对象的解构赋值
// let {a, b} = {b: 'bbb', a: 'aaa'};
// 
// console.log(a, b);

// let {a: b} = {a: 1};
// 
// console.log(b);
// console.log(a);


// -------------------------------------------------------------------
//3 基本类型的解构赋值

// let [a, b, c, d] = '1234';
// 
// console.log(a, b, c, d);

// let {length: len} = 'miaov';
// 
// console.log(len);

// let {toString: ts} = 1;
// let {toString: bs} = true;
// 
// console.log(ts === Number.prototype.toString);
// console.log(bs === Boolean.prototype.toString);

// null 和 undefined 不能进行解构赋值

// let [a] = null;




