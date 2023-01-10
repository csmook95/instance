var RequestBuilder1 = /** @class */ (function () {
    function RequestBuilder1() {
        this.method = null;
        this.url = null;
        this.data = null;
    }
    RequestBuilder1.prototype.setMethod = function (method) {
        this.method = method;
        return this;
    };
    RequestBuilder1.prototype.setURL = function (url) {
        this.url = url;
        return this;
    };
    RequestBuilder1.prototype.setData = function (data) {
        this.data = data;
        return this;
    };
    RequestBuilder1.prototype.send = function () { };
    return RequestBuilder1;
}());
new RequestBuilder1()
    .setURL("/users")
    .setMethod("get")
    .setData({ firstName: "Anna" })
    .send();
