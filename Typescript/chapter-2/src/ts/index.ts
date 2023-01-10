type BuildableRequest = {
    data?: Data
    method: Method
    url: Url
}

class RequestBuilder2 {
    data?: Data
    method?: Method
    url?: Url

    setData(data: object): this & Pick<BuildableRequest, `data`> {
        return Object.assign(this, { data })
    }

    setMethod(method: `get` | `post`): this & Pick<BuildableRequest, `method`> {
        return Object.assign(this, { method })
    }

    setURL(url: string): this & Pick<BuildableRequest, `url`> {
        return Object.assign(this, { url })
    }

    build(this: BuildableRequest) {
        return this
    }
}

console.log(
    new RequestBuilder2()
        .setData({})
        .setMethod('post') // Try removing me!
        .setURL('bar') // Try removing me!
        .build()
        .method
)