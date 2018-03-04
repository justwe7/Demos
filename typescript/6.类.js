var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Me = (function () {
    // public name; //可以在内部外都可访问  默认
    // private name=221;//只在内部访问
    // protected name = 222;//内部和子类访问
    function Me(name) {
        this.name = name;
        console.log(name);
    }
    Me.prototype.do = function () {
        console.log(1, name);
    };
    return Me;
}());
/*var p1 = new Me();
p1.name = 1111;
console.log(p1);*/
var p2 = new Me('啊啊啊');
console.log(p2);
var He = (function (_super) {
    __extends(He, _super);
    function He(name) {
        return _super.call(this, name) || this;
    }
    He.prototype.eat = function () {
        _super.prototype.do.call(this); //访问继承的属性
        console.log('eat');
    };
    return He;
}(Me));
var ax = new He('嘻嘻嘻');
ax.eat();
var arr2 = []; //指定泛型，必须是he构造函数
arr2[0] = new He('aaa');
// arr2[1] = new Me('aaa');
