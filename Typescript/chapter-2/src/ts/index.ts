
class RequestBuilder1 {
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

new RequestBuilder1()
    .setURL(`/users`)
    .setMethod(`get`)
    .setData({ firstName: `Anna` })
    .send()