/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/js/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
 * Symbol
 */

/**
 * 1 什么是 Symbol ?
 *  Symbol，表示独一无二的值。它是 JS 中的第七种数据类型。
 */

// 基本的数据类型： Null Undefined Number Boolean String Symbol
// 引用数据类型：Object

let s1 = Symbol();

let s2 = Symbol();

// console.log(typeof s1); // 'symbol'
// 
// console.log(s1 === s2);
 

// Symbol 函数前不能使用 new 否则会报错，原因在于 Symbol 是一个原始类型的值，不是对象。

// let s3 = new Symbol();

// console.log(s1);
// console.log(s2);

// Symbol 函数接收一个字符串作为参数，表示对Symbol的描述，主要是为了在控制台显示，或者转为字符串的时候，比较容易区分

// let s3 = Symbol('miaov');
// let s4 = Symbol('leo');
// 
// console.log(s3, s4);
// 
// 
// console.log(Symbol('momo') === Symbol('momo'));

/**
 * 2 Symbol 数据类型的转换
 */

// console.log(String(Symbol('miaov'))); // Symbol(miaov)
// console.log(Symbol('leo').toString()); // Symbol(leo)
// 
// console.log(!!Symbol()); // true
// console.log(Number(Symbol()));

// console.log(Symbol('momo') + 'pangzi');
// console.log(Symbol('momo') * 100);  不能做任何运算。


/**
 * 3 作为对象的属性名
 */

// let yyy = Symbol('yyy');
// 
// const obj = {};
// 
// obj[yyy] = 'hello';
// 
// console.log(obj);
// 
// console.log(obj[yyy]);

// let ss = Symbol('ss');
// 
// const data = {
//   [ss]: 'miaov'
// };
// 
// console.log(data);
// 
// console.log(data[ss]);

const data = {
  [Symbol()]: 123,
  a: 1,
  b: 2
};

console.log(data);
console.log(data['Symbol()']);

// 不能被for...in循环遍，历虽然不能被遍历，但是也不是私有的属性，可以通过Object.getOwnPropertySymbols方法获得一个对象的所有的Symbol属性

for(let i in data){
  console.log(i);
}

console.log(Object.getOwnPropertySymbols(data)); // [Symbol()]

console.log(data[Object.getOwnPropertySymbols(data)[0]]);






































































// 4 Symbol.for() 和 Symbol.keyFor

























/***/ })
/******/ ]);