var a = (a1,a2) => a1+ a2;

var arr = [1,2,3,4,5];
console.log(arr.filter(value => value%2 === 0));

function fn1(str:string){
    this.name = str;
    setTimeout(()=>console.log(this.name),500);
}
fn1('啊啊啊');
