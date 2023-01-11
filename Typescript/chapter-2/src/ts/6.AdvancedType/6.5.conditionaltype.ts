type IsString<T> = T extends string ? true : false
let A1: IsString<`exam`>
let B1: IsString<1>

type ToArray<T> = T[]
type A2 = ToArray<number>
type B2 = ToArray<number | string>[]

type ToArray2<T> = T extends unknown ? T[] : T[]
type A3 = ToArray2<number>
type B3 = ToArray2<number | string>

type Without<T, U> = T extends U ? never : T
type A4 = Without<boolean | number | string, boolean>

type ElementType<T> = T extends unknown[] ? T[number] : T
type A5 = ElementType<(number | string)[]>
type ElementType2<T> = T extends (infer U)[] ? U : T
type B5 = ElementType2<(number | boolean)[]>
type SecondArg<F> = F extends (a: any, b: infer B) => any ? B : never
type F = typeof Array[`prototype`][`slice`]
type A6 = SecondArg<F>

