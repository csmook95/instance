"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
(0, fs_1.readFile)("/var/log/apache2/access_log", { encoding: "utf8" }, function (error, data) {
    if (error) {
        console.error("error reading!", error);
        return;
    }
    console.info("success reading!", data);
});
