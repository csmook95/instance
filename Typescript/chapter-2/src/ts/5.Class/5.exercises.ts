
type RequestBuilder0 = RequestBuilder1 | RequestBuilder2

class RequestBuilder00 {
    constructor(
        protected method?: Method,
        protected url?: Url,
        protected data?: Data,
    ) { }
    protected type: string = ``

    setMethod(method?: Method): RequestBuilder0 {
        this.method = method
        return this.sendValid();
    }
    setURL(url?: Url) {
        this.url = url
        return this.sendValid();
    }
    setData(data?: Data) {
        this.data = data
        return this.sendValid();
    }
    protected sendValid(): RequestBuilder0 {
        return new RequestBuilder1();
    }
}

class RequestBuilder1 extends RequestBuilder00 {
    protected type = `RequestBuilder1`
    static ds() { }
    protected sendValid(): RequestBuilder0 {
        if (this.method && this.url) {
            return new RequestBuilder2(this.method, this.url, this.data)
        }
        return this
    }
}

class RequestBuilder2 extends RequestBuilder00 {
    protected type = `RequestBuilder2`
    send() { return `Happy` }
    protected sendValid(): RequestBuilder0 {
        if (this.method && this.url) return this
        return new RequestBuilder1(this.method, this.url, this.data)
    }
}
console.log(
    new RequestBuilder1()
        .setData({ name: `Seungmook` })
        .setMethod(`get`)
        .setURL(`dd`)
        .setURL()
)