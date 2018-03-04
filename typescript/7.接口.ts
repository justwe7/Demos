interface conPerson{
    name: string;
    age: number;
}
class person {
    constructor(public config: conPerson ){

    }
}

var p = new person({name: "aaa",age:18});

interface conPerson2{
    fn();
}
class fj implements conPerson2{//接口的类必须实例接口的方法
    fn(){
        console.log(11);
    }
}