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












































