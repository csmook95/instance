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
type Method = `get` | `post`
type Url = string
type Data = object

class RequestBuilder {
    private method?: Method
    private url?: Url
    private data?: Data

    setMethod(method?: Method): this {
        this.method = method
        return this
    }
    setURL(url?: Url): this {
        this.url = url
        return this
    }
    setData(data?: Data): this {
        this.data = data
        return this
    }
    send() { }
}

console.log(
    new RequestBuilder()
        .setURL(`/users`)
        .setData()
        .setMethod(`get`)
) 