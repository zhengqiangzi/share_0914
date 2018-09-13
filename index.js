"use strict";
exports.__esModule = true;
var index_1 = require("./wm/index");
/* import * as faker from "faker";
faker.address */
exports.b = index_1.a;
exports.len = 1000;
function init(w_, h_) {
    var w = w_;
    var h = h_;
    return w * h;
}
exports.init = init;
function add(x, y) {
    var j = 0;
    window.prompt("asd");
    for (var i = 0; i < exports.len; i++) {
        j = j + i;
    }
    return j;
}
exports.add = add;
