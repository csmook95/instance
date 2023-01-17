interface Array<T> { zip<U>(list: U[]): [T, U][] }

function tuple1<T extends unknown[]>(...ts: T): T {
    return ts
}

Array.prototype.zip = function <T, U>(
    this: T[],
    list: U[]
): [T, U][] { return this.map((v, k) => tuple1(v, list[k])) }

let array1 = [1, 2, 3]

console.log(
    array1
        .map(n => n * 2)
        .zip([`a`, `b`, `c`])
)
