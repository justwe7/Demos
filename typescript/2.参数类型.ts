var str:string = "aaaaaa";
// str = 1;

let aa:any = 'xxx';
aa = 1;

function fn() : void{
    // return ""
}
function fn2(a:string) : string{
    return ""
}

// fn2( 1111 );

class person {
    name: string;
    age: number;
}
var user = new person();
user.name = '王思聪11';
user.age = 18;

// ? 可选参数，必须声明在必选的后面
function fn3(tp:string,str1?:number,str2 = '啊啊啊') {
    console.log(tp);
    console.log(str1);
    console.log(str2);
}
// fn3('1',2,'aa');
fn3('1');