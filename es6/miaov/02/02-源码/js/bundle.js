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

let {length: len} = 'miaov';

console.log(len);


 




/***/ })
/******/ ]);