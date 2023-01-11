function tuple1() {
    var ts = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        ts[_i] = arguments[_i];
    }
    return ts;
}
Array.prototype.zip = function (list) { return this.map(function (v, k) { return tuple1(v, list[k]); }); };
var array1 = [1, 2, 3];
console.log(array1
    .map(function (n) { return n * 2; })
    .zip(["a", "b", "c"]));
