var RequestBuilder2 = /** @class */ (function () {
    function RequestBuilder2() {
    }
    RequestBuilder2.prototype.setData = function (data) {
        return Object.assign(this, { data: data });
    };
    RequestBuilder2.prototype.setMethod = function (method) {
        return Object.assign(this, { method: method });
    };
    RequestBuilder2.prototype.setURL = function (url) {
        return Object.assign(this, { url: url });
    };
    RequestBuilder2.prototype.build = function () {
        return this;
    };
    return RequestBuilder2;
}());
console.log(new RequestBuilder2()
    .setData({})
    .setMethod('post') // Try removing me!
    .setURL('bar') // Try removing me!
    .build()
    .method);
