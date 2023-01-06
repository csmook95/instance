var app = document.querySelector("#app");
var p = document.createElement("p");
p.textContent = "Hello, World!";
app === null || app === void 0 ? void 0 : app.appendChild(p);
var promise = new Promise(function (resolve) { return resolve(4); });
promise.then(function (res) { return console.log(res * 44); });
var myEvent = {
    target: document.querySelector("#myButton"),
    type: "click"
};
