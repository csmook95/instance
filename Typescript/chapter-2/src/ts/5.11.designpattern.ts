// 팩토리 패턴
type Shoe = { purpose: string }
class BalletFlat implements Shoe { purpose = `dancing` }
class Boot implements Shoe { purpose = `woodcutting` }
class Sneaker implements Shoe { purpose: string = `walking` }

let Shoe = {
    create(type: `balletFlat` | `boot` | `sneaker`): Shoe {
        switch (type) {
            case `balletFlat`: return new BalletFlat
            case `boot`: return new Boot
            case `sneaker`: return new Sneaker
        }
    }
}

Shoe.create(`boot`)

// 빌더 패턴
type Method = `get` | `post` | null
type Url = string | null
type Data = object | null

class RequestBuilder {
    private method: Method = null
    private url: Url = null
    private data: Data = null

    setMethod(method: Method): this {
        this.method = method
        return this
    }
    setURL(url: Url): this {
        this.url = url
        return this
    }
    setData(data: Data): this {
        this.data = data
        return this
    }
    send() { }
}

new RequestBuilder()
    .setURL(`/users`)
    .setMethod(`get`)
    .setData({ firstName: `Anna` })
    .send()