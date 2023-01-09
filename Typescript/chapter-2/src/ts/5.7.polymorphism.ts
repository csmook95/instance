interface MyMap<K, V> {
    get(key: K): V
    set(key: K, value: V): void
}

class MyMap<K, V>{
    constructor(
        public initialKey: K,
        public initialValue: V) { }
    get(key: K): V { return this.initialValue; }
    set(key: K, value: V) { }
    merge<K1, V1>(map: MyMap<K1, V1>): MyMap<K | K1, V | V1> {
        return map;
    }
    static of<K, V>(k: K, v: V): MyMap<K, V> {
        return new MyMap(k, v);
    }
}

let a1 = new MyMap<string, number>(`k`, 1);
let b1 = new MyMap(`k`, true);

a1.get(`k`);
b1.set(`k`, false);