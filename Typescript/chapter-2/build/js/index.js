var is = function () {
    var para = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        para[_i] = arguments[_i];
    }
    var returnValue = true;
    para
        .slice(0)
        .reduce(function (pre, cur, i, arr) {
        if (pre !== cur) {
            returnValue = false;
            arr.splice(1);
        }
        return cur;
    });
    return returnValue;
};
console.log(is("string", "string"));
console.log(is(true, false));
console.log(is(42, 42));
console.log(is(10, 10, 10, 10));
