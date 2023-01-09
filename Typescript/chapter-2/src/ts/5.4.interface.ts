type Food = {
    calories: number
    tasty: boolean
}
type Sushi = Food & { salty: boolean }
type Cake = Food & { sweet: boolean }

interface Food2 {
    calories: number
    tasty: boolean
}
interface Sushi2 extends Food2 { salty: boolean }
interface Cake2 extends Food2 { sweet: boolean }

interface A1 {
    good(x: number): string
    bad(x: number): string
}
interface B1 extends A1 {
    good(x: string | number): string
    // bad(x: string): string
}

interface User { name: string }
interface User { age: number }
let a: User = {
    name: `Ashley`,
    age: 30
}

interface User1<Age extends number> { age: Age }
// interface User1<Age extends string> { age: Age }

interface Animal {
    readonly name: string
    eat(food: string): void
    sleep(hours: number): void
}

interface Faline { meow(): void }

class Cat implements Animal, Faline {
    name: string = `Mommy`
    eat(food: string): void { console.info(`Ate Some`, food) }
    sleep(hours: number): void { console.info(`Slept for`, hours, `hours`) }
    meow(): void { console.info(`Meow`) }
}

