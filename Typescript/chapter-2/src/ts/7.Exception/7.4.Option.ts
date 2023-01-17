function ask1() {
    return prompt(`When is your birthday?`)
}

function isValid1(date: Date) {
    return Object.prototype.toString.call(date) === `[object Date]` && !Number.isNaN(date.getTime())
}

function parse2(birthday: string | null): Date[] {
    if (!birthday) return []
    let date = new Date(birthday)
    if (!isValid1(date)) return []
    return [date]
}

// let date = parse2(ask1())
// date.map(_ => _.toISOString())
//     .forEach(_ => console.info(`Date is`, _));

function ask2() {
    let result = prompt(`When os your birthday?`)
    if (result === null) return []
    return [result]
}

function flatten<T>(array: T[][]): T[] {
    return Array.prototype.concat.apply([], array)
}

// flatten(ask2().map(parse2))
//     .map(date => date.toISOString())
//     .forEach(date => console.info(`Date is`, date))


interface Option<T> {
    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Option<U>): Option<U>
    getOrElse(value: T): T
}
class Some<T> implements Option<T> {
    constructor(private value: T) { }
    flatMap<U>(f: (value: T) => None): None
    flatMap<U>(f: (value: T) => Some<U>): Some<U>
    flatMap<U>(f: (value: T) => Option<U>): Option<U> { return f(this.value) }
    getOrElse(value: T): T { return this.value }
}
class None implements Option<never> {
    flatMap(): None { return this }
    getOrElse<U>(value: U): U { return value }
}

function option1<T>(value: null | undefined): None
function option1<T>(value: T): Some<T>
function option1<T>(value: T): Option<T> {
    if (value === null) return new None
    return new Some(value)
}

let result1 = option1(6)
    .flatMap(n => option1(n * 3))
    .flatMap(n => new None)
    .flatMap()
    .getOrElse(7)

