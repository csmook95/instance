type O = {
    a: { b: { c: string } },
    d: number
}
type P = { a: { b: { c: string } } }

type zz = O[`a`][`b`]
type yy = P

let dd: O[`a`][`b`] = { c: `C` }

type Exclusive<T, U> = Exclude<T, U> | Exclude<U, T>
// type Exclusive<T, U> = (T extends U ? never : T) | (U extends T ? never : U)
type Exclusive1 = Exclusive<1 | 2, 2 | 4>







function fetchUser1() {
    return globalCache.get('userId')
}
let globalCache = {
    get(key: string) {
        return 'user'
    }
}
let userId2 = fetchUser1()
userId2.toUpperCase()
