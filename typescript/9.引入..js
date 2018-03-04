"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var FileAccess;
(function (FileAccess) {
    // constant members
    FileAccess[FileAccess["None"] = 0] = "None";
    FileAccess[FileAccess["Read"] = 1] = "Read";
    FileAccess[FileAccess["Write"] = 4] = "Write";
    FileAccess[FileAccess["ReadWrite"] = 5] = "ReadWrite";
    // computed member
    FileAccess[FileAccess["G"] = "123".length] = "G";
})(FileAccess || (FileAccess = {}));
var Enum;
(function (Enum) {
    Enum[Enum["A"] = 0] = "A";
    Enum[Enum["B"] = 1] = "B";
})(Enum || (Enum = {}));
var a = Enum.A;
var nameOfA = Enum[Enum.A]; // "A"
function extend(first, second) {
    var result = {};
    for (var id in first) {
        result[id] = first[id];
    }
    for (var id in second) {
        if (!result.hasOwnProperty(id)) {
            result[id] = second[id];
        }
    }
    return result;
}
var Person = (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var ConsoleLogger = (function () {
    function ConsoleLogger() {
    }
    ConsoleLogger.prototype.log = function () {
        // ...
    };
    return ConsoleLogger;
}());
var jim = extend(new ConsoleLogger(), new Person("Jim"));
var n = jim.name;
jim.log();
var Validation;
(function (Validation) {
    var lettersRegexp = /^[A-Za-z]+$/;
    var numberRegexp = /^[0-9]+$/;
    var LettersOnlyValidator = (function () {
        function LettersOnlyValidator() {
        }
        LettersOnlyValidator.prototype.isAcceptable = function (s) {
            return lettersRegexp.test(s);
        };
        return LettersOnlyValidator;
    }());
    Validation.LettersOnlyValidator = LettersOnlyValidator;
    var ZipCodeValidator = (function () {
        function ZipCodeValidator() {
        }
        ZipCodeValidator.prototype.isAcceptable = function (s) {
            return s.length === 5 && numberRegexp.test(s);
        };
        return ZipCodeValidator;
    }());
    Validation.ZipCodeValidator = ZipCodeValidator;
})(Validation || (Validation = {}));
// Some samples to try
var strings = ["Hello", "98052", "101"];
// Validators to use
var validators = {};
validators["ZIP code"] = new Validation.ZipCodeValidator();
validators["Letters only"] = new Validation.LettersOnlyValidator();
// Show whether each string passed each validator
for (var _i = 0, strings_1 = strings; _i < strings_1.length; _i++) {
    var s = strings_1[_i];
    for (var name_1 in validators) {
        console.log("\"" + s + "\" - " + (validators[name_1].isAcceptable(s) ? "matches" : "does not match") + " " + name_1);
    }
}
var A = (function () {
    function A() {
    }
    A.prototype.callback = function (i) {
        document.getElementById("result").innerHTML
            += i.toString() + "<br />\n";
    };
    A.prototype.foo = function () {
        var _this = this;
        var p = document.createElement("p");
        p.id = "result";
        document.body.appendChild(p);
        var array = [0, 1, 2, 3, 4, 5, 6, 7];
        array.filter(function (v, i, a) { return v % 2 == 0; }).forEach(function (v, i, a) { return _this.callback(v); });
    };
    return A;
}());
var button = document.createElement("button");
button.textContent = "call";
button.onclick = function () {
    var a = new A();
    a.foo();
};
document.body.appendChild(button);
var support;
function detectWebp(callback) {
    if (support === void 0) {
        var local = LS.get('supportWebp');
        support = local === 'true' ? true : local === 'false' ? false : void 0;
    }
    if (support !== void 0) {
        return callback(support);
    }
    var img = new Image();
    img.onload = function () {
        support = img.width > 0 && img.height > 0;
        LS.set('supportWebp', support);
        callback(support);
    };
    img.onerror = function () {
        support = false;
        LS.set('supportWebp', support);
        callback(support);
    };
    img.src = 'data:image/webp;base64,UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==';
}
exports.detectWebp = detectWebp;
