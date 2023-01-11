type Payload = string

function serializable<T extends ClassConstructor<{ getValue(): Payload }>>(Constructor: T) {
    return class extends Constructor {
        serialize() { return this.getValue().toString(); }
    }
}

class APIPayload {
    getValue(): Payload { return `aaa` }
}

let DecoratedAPIPayload = serializable(APIPayload)
let payload = new DecoratedAPIPayload
console.log(payload.serialize()) 
