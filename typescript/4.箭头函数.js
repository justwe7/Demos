var a = function (a1, a2) { return a1 + a2; };
var arr = [1, 2, 3, 4, 5];
console.log(arr.filter(function (value) { return value % 2 === 0; }));
function fn1(str) {
    var _this = this;
    this.name = str;
    setTimeout(function () { return console.log(_this.name); }, 500);
}
fn1('啊啊啊');
