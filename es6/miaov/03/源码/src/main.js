/**
 * 数据结构 Set
 */

// -----------------------------------------------------
/**
 * 集合的基本概念：集合是由一组无序且唯一（即不能重复）的项组成的。这个数据结构使用了与有限集合相同的数学概念，应用在计算机的数据结构中。
 * 特点：key 和 value 相同，没有重复的 value。
 *
 * ES6 提供了数据结构 Set。它类似于数组，但是成员的值都是唯一的，没有重复的值。
 */
// -----------------------------------------------------
// 1 如何创建一个 Set

const s = new Set([1, 2, 3]);

console.log(s); 


// -----------------------------------------------------
// 2 Set 类的属性 

console.log(s.size); // 3


// -----------------------------------------------------
// 3 Set 类的方法

// 1 set.add(value) 添加一个数据，返回Set结构本身。

s.add('a').add('b').add('c');

console.log(s);


// 2 set.delete(value) 删除指定数据，返回一个布尔值，表示删除是否成功。

console.log(s.delete('a'));
console.log(s);

console.log(s.delete('a'));

// 3 set.has(value) 判断该值是否为Set的成员，反回一个布尔值。

console.log(s.has('a')); // false
console.log(s.has(1)); // true

// 4 set.clear() 清除所有数据，没有返回值。

// s.clear();
// 
// console.log(s);

// 5 keys() 返回键名的遍历器

console.log(s.keys());

// 6 values() 返回键值的遍历器

console.log(s.values());

// 7 entries() 返回键值对的遍历器

console.log(s.entries());

// 8 forEach() 使用回调函数遍历每个成员

s.forEach(function (value, key, set){
  console.log(value + ' miaov');
});

console.log(s);

// -----------------------------------------------------

s.add(1);

console.log(s);

