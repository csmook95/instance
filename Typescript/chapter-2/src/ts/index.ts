const app = document.querySelector(`#app`);

const p = document.createElement("p");

p.textContent = "Hello, World!";

app?.appendChild(p);

interface Array<T> {
    filter(callbackfn: (value: T, index: number, array: T[]) => any, thisArg?: any): T[]
    map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[]
}

let promise = new Promise<number>(resolve => resolve(4))
promise.then(res => console.log(res * 44))

type MyEvent<T> = {
    target: T
    type: string
}

type ButtonEvent = MyEvent<HTMLButtonElement>

let myEvent: MyEvent<HTMLButtonElement | null> = {
    target: document.querySelector(`#myButton`),
    type: `click`
}

type TimedEvent<T> = {
    event: MyEvent<T>
    from: Date
    to: Date
}