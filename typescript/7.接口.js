var person = (function () {
    function person(config) {
        this.config = config;
    }
    return person;
}());
var p = new person({ name: "aaa", age: 18 });
var fj = (function () {
    function fj() {
    }
    fj.prototype.fn = function () {
        console.log(11);
    };
    return fj;
}());
