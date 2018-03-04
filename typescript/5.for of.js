var arr = [1, 2, 3, 4];
// arr.add = 'addnum';
for (var obj in arr) {
    console.log(obj, arr[obj]);
}
for (var _i = 0, arr_1 = arr; _i < arr_1.length; _i++) {
    var obj = arr_1[_i];
    console.log(obj, arr[obj]);
}
