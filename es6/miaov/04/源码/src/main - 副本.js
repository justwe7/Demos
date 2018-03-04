/**
 * 数据结构 Map
 */

// -----------------------------------------------------
/**
 * 字典：是用来存储不重复key的Hash结构。不同于集合的是，字典使用的是[键，值]的形式来储存数据的。
 * 
 * JavaScript 的对象（Object:{}）只能用字符串当作键。这给它的使用带来了很大的限制。
 *
 * 为了解决这个问题，ES6提供了Map数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。也就是说，Object结构提供了“字符串—值”的对应，Map结构提供了“值—值”的对应，是一种更完善的Hash结构实现。如果你需要“键值对”的数据结构，Map比Object更合适。。
 */

// const data1 = {};
// const data2 = {};
// 
// const obj = {};
// 
// obj[data1] = 1;
// obj[data2] = 2;
// 
// console.log(obj);

// -----------------------------------------------------
// 1 如何创建一个 Map
 
const map = new Map([
  ['a', 1],
  ['b', 2],
  [{a: 1}, 3],
  [{b: 2}, 4]
]);

console.log(map);

// -----------------------------------------------------
// 2 Map 类的属性 

console.log(map.size);

// -----------------------------------------------------
// 3 Map 类的方法

// 1 set(key, value) 设置键名key对应的键值为value，然后返回整个 Map 结构。如果key已经有值，则键值会被更新，否则就新生成该键。

map.set('miaov', 'hello').set('new', 'fq');

console.log(map);

// 2 get(key) get方法读取key对应的键值，如果找不到 key，返回undefined。

console.log(map.get('new'));
console.log(map.get({}));

// 3 delete(key) 删除某个键，返回true。如果删除失败，返回false。

console.log(map.delete('a'));
console.log(map);

console.log(map.delete('a'));

// 4 has(key) 方法返回一个布尔值，表示某个键是否在当前Map对象之中。

console.log(map.has('new'));
console.log(map.has('a'));

// 5 clear() 清除所有数据，没有返回值。

// map.clear();
// 
// console.log(map);

// 6 keys() 返回键名的遍历器

console.log(map.keys());

// 7 values() 返回键值的遍历器

console.log(map.values());

// 8 entries() 返回键值对的遍历器

console.log(map.entries());

// 9 forEach() 使用回调函数遍历每个成员

map.forEach(function (value, key, map){
  console.log(key + ':' + value);
});

// -----------------------------------------------------
// Map 在使用过程中的一些注意事项：

map.clear();

map.set({}, 1).set({}, 2);

console.log(map);

map.clear();

map.set(NaN, 1).set(NaN, 2);

console.log(map);

