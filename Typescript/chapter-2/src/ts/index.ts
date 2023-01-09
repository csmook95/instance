
type Is = <T extends unknown[]>(...a: T) => boolean

let is: Is = (...para) => {
    let returnValue = true
    para
        .slice(0)
        .reduce((pre, cur, i, arr) => {
            if (pre !== cur) {
                returnValue = false
                arr.splice(1);
            }
            return cur;
        });
    return returnValue;
}

console.log(is(`string`, `string`));
console.log(is(true, false));
console.log(is(42, 42));
console.log(is(10, 10, 10, 10));