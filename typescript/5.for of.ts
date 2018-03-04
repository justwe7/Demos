let arr = [1,2,3,4];
// arr.add = 'addnum';
for (let obj in arr) {
    console.log(obj,arr[obj]);
}
for (let obj of arr) {
    console.log(obj,arr[obj]);
}