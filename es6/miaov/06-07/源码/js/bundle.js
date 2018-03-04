/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
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
 * class 的继承等相关知识
 */

// extends、 static、 super

const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const w = canvas.width = 600;
const h = canvas.height = 400;

class Ball {
  constructor(x, y, r){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = `rgb(${~~Ball.rpFn([55, 255])}, ${~~Ball.rpFn([55, 255])}, ${~~Ball.rpFn([55, 255])})`;
    return this;
  }
  render(ctx){
    ctx.save();
    ctx.translate(this.x, this.y);
    ctx.fillStyle = this.color;
    ctx.beginPath();
    ctx.arc(0, 0, this.r, 0, 2*Math.PI);
    ctx.fill();
    ctx.restore();
    return this;
  }
  static rpFn(arr){ // Ball.rpFn([1, 10])
    let max = Math.max(...arr),
        min = Math.min(...arr);
    return Math.random() * (max - min) + min;
  }
}

// const ball1 = new Ball(100, 100, 30).render(ctx);

class SuperBall extends Ball {
  constructor(x, y, r){
    // Ball.call(this, x, y, r);
    // this.color = 'red';
    super(x, y, r);
    this.vy = SuperBall.rpFn([2, 4]);
    this.g = SuperBall.rpFn([0.2, 0.4]);
    this.a = 0;
    return this;
  }
  move(ctx){
    // super();  // 报错
    
    this.y += this.vy;
    this.vy += this.g;
    
    let current = this.vy * -0.75;
    
    if(this.y + this.r >= ctx.canvas.height){
      this.y = ctx.canvas.height - this.r;
      
      if(Math.abs(current - this.a) < 0.01) return false;
      
      this.a = this.vy *= -0.75; 
    }
    
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
    super.render(ctx);
    
    return true;
  }
};

// const ball1 = new SuperBall(100, 100, 30).render(ctx);

let ball, timer;

canvas.onclick = function (e){
  let x = e.offsetX, y = e.offsetY;
  
  let r = ~~Ball.rpFn([25, 55]);
  
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ball = new SuperBall(x, y, r).render(ctx);
  
  ballMove();
}

function ballMove(){
  timer = window.requestAnimationFrame(ballMove);
  
  if(!ball.move(ctx)){
    window.cancelAnimationFrame(timer);
  }
}














































/***/ })
/******/ ]);