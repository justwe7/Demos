var str = "aaaaaa";
// str = 1;
var aa = 'xxx';
aa = 1;
function fn() {
    // return ""
}
function fn2(a) {
    return "";
}
// fn2( 1111 );
var person = (function () {
    function person() {
    }
    return person;
}());
var user = new person();
user.name = '王思聪11';
user.age = 18;
// ? 可选参数，必须声明在必选的后面
function fn3(tp, str1, str2) {
    if (str2 === void 0) { str2 = '啊啊啊'; }
    console.log(tp);
    console.log(str1);
    console.log(str2);
}
// fn3('1',2,'aa');
fn3('1');
