// var $ = require("https://cdn.bootcss.com/jquery/3.2.1/jquery.min.js");
declare var $: (string) => any;
enum FileAccess {
    // constant members
    None,
    Read,
    Write   = 1 << 2,
    ReadWrite  = Read | Write,
// computed member
    G = "123".length
}


enum Enum {
    A,
    B
}
let a = Enum.A;
let nameOfA = Enum[Enum.A]; // "A"


function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};
    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }
    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }
    return result;
}

class Person {
    constructor(public name: string) { }
}
interface Loggable {
    log(): void;
}
class ConsoleLogger implements Loggable {
    log() {
        // ...
    }
}
var jim = extend(new ConsoleLogger(),new Person("Jim"));
var n = jim.name;
jim.log();

namespace Validation {
    export interface StringValidator {
        isAcceptable(s: string): boolean;
    }

    const lettersRegexp = /^[A-Za-z]+$/;
    const numberRegexp = /^[0-9]+$/;

    export class LettersOnlyValidator implements StringValidator {
        isAcceptable(s: string) {
            return lettersRegexp.test(s);
        }
    }

    export class ZipCodeValidator implements StringValidator {
        isAcceptable(s: string) {
            return s.length === 5 && numberRegexp.test(s);
        }
    }
}

// Some samples to try
let strings = ["Hello", "98052", "101"];

// Validators to use
let validators: { [s: string]: Validation.StringValidator; } = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();

// Show whether each string passed each validator
for (let s of strings) {
    for (let name in validators) {
        console.log(`"${ s }" - ${ validators[name].isAcceptable(s) ? "matches" : "does not match" } ${ name }`);
    }
}


class A
{
    private callback(i : number) : void
    {
        document.getElementById("result").innerHTML
            += i.toString() + "<br />\n";
    }

    foo() : void
    {
        var p = document.createElement("p");
        p.id = "result";
        document.body.appendChild(p);
        var array = [ 0, 1, 2, 3, 4, 5, 6, 7 ];
        array.filter((v, i, a) => v % 2 == 0).forEach((v, i, a) => this.callback(v));
    }
}

var button = document.createElement("button");
button.textContent = "call";

button.onclick = () => {
    var a = new A();
    a.foo();
};

document.body.appendChild(button);


let support: boolean;

export function detectWebp(callback: (result: boolean) => void): void {

    if (support === void 0) {
        const local = LS.get('supportWebp');
        support = local === 'true' ? true : local === 'false' ? false : void 0;
    }

    if (support !== void 0) {
        return callback(support);
    }

    const img = new Image();
    img.onload = () => {
        support = img.width > 0 && img.height > 0;
        LS.set('supportWebp', support);
        callback(support);
    };
    img.onerror = () => {
        support = false;
        LS.set('supportWebp', support);
        callback(support);
    };
    img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
}