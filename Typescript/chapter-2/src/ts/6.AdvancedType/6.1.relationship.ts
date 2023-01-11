class Animal { }
class Bird extends Animal { chirp() { } }
class Crow extends Bird { caw() { } }

function chirp(bird: Bird): Bird {
    bird.chirp()
    return bird
}
// chirp(new Animal)
chirp(new Bird)
chirp(new Crow)

function clone(f: (b: Bird) => Bird): void {
    let parent = new Bird
    let babyBird = f(parent)
    babyBird.chirp()
}
function birdToBird(b: Bird): Bird { return b }
clone(birdToBird)
function birdToAnimal(b: Bird): Animal { return new Animal }
// clone(birdToAnimal)
function animalToBird(a: Animal): Bird { return new Bird }
clone(animalToBird)
function crowToBird(c: Crow): Bird {
    c.caw()
    return new Bird
}
// clone(crowToBird)

let a2 = { x: 3 }
let b2 = { x: 3 }
let c2 = { x: 3 } as const
let d2 = [1, { x: 2 }]
let e2 = [1, { x: 2 }] as const

type Options = {
    baseURl: string
    cacheSize?: number
    tier?: `prod` | `dev`
}

class API {
    constructor(private option: Options) { }
}

new API({
    baseURl: `https://api.mysite.com`,
    tier: `prod`
})

new API({
    baseURl: `https://api.mysite.com`,
    // badtier: `prod`
})

new API({
    baseURl: `https://api.mysite.com`,
    badtier: `prod`
} as Options)

let badOptions = {
    baseURl: `https://api.mysite.com`,
    badtier: `prod`
}
new API(badOptions)

let option: Options = {
    baseURl: `https://api.mysite.com`,
    // badtier: `prod`
}
new API(option)


type Unit = `cm` | `px` | `%`
let units: Unit[] = [`cm`, `px`, `%`]

function parseUnit(value: string): Unit | undefined {
    return units.find(v => { if (value.endsWith(v)) return v })
}

console.log(parseUnit(`ss`));

type Width = {
    unit: Unit
    value: number
}

function parseWidth(width: number | string | null | undefined): Width | null {
    if (width == null) return null
    if (typeof width === `number`) return { unit: `px`, value: width }
    let unit = parseUnit(width)
    if (unit) return { unit, value: parseFloat(width) }
    return null
}

console.log(parseWidth(1));

type UserTextEvent = {
    type: `TextEvent`
    value: string
    target: HTMLInputElement
}
type UserMouseEvent = {
    type: `MouseEvent`
    value: [number, number]
    target: HTMLElement
}
type UserEvent = UserTextEvent | UserMouseEvent

function handle(event: UserEvent) {
    if (event.type === `TextEvent`) {
        event.value
        event.target
        return event
    }
    event.value
    event.target
    return event
}

let userMouseEvent:UserMouseEvent={
    type: `MouseEvent`,
    value: [1,2],
    target: document.createElement(`div`)
}

handle(userMouseEvent)