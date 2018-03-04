function fn1() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    args.forEach(function (item) {
        console.log(item);
    });
}
fn1(1, 2, 3, 4);
function fn2(d1, d2, d3) {
    console.log(d1);
    console.log(d2);
    console.log(d3);
}
var arr = [1, 2, 3];
// fn2(...arr);//暂时不支持es6的数组展开，但是可以正常编译
/*
function* fn3(){
    console.log('1');
    yield;
    console.log('2');
}
var fn = fn3();
fn.next();*/
var _a = [0, 1, 2, 3, 4], c = _a[1], b = _a[2], other = _a.slice(3); //解构赋值
var _b = { oa: 'aaa', ob: 'obbb' }, oaa = _b.oa, ob = _b.ob;
var _c = { occ: 'occ1', odd: { 'oda': 1, 'odb': 2 } }, occ = _c.occ, _d = _c.odd, oda = _d.oda, odb = _d.odb;
