function fn1(...args) {//...args 传入任意数量的参数
    args.forEach((item) => {
        console.log(item)
    })
}
fn1(1,2,3,4);

function fn2(d1,d2,d3) {//...args 传入任意数量的参数
    console.log(d1);
    console.log(d2);
    console.log(d3);
}
let arr = [1,2,3];
// fn2(...arr);//暂时不支持es6的数组展开，但是可以正常编译

/*
function* fn3(){
    console.log('1');
    yield;
    console.log('2');
}
var fn = fn3();
fn.next();*/

let [,c,b,...other] = [0,1,2,3,4];//解构赋值
let {oa: oaa, ob} = {oa: 'aaa', ob: 'obbb'};
let {occ: occ, odd: {oda,odb}} = {occ: 'occ1', odd: {'oda':1,'odb':2}};

