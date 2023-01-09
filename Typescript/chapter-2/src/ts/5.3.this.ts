
class Set1 {
    constructor() { }
    has(value: number): boolean { return true; }
    add(value: number): this { return this; }
}

let set = new Set1();
set.add(1).add(2).add(3)
set.has(2)
set.has(4)

class MutableSet extends Set1 {
    delete(value: number): boolean { return true }
}

const mutableSet = new MutableSet();
