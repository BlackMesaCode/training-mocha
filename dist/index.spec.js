"use strict";

var _index = require("./index.js");

var _chai = require("../node_modules/chai/chai.js");

describe("array", function () {
    it("should have a length of 3 when it contains 3 elements", function (done) {
        (0, _chai.expect)([1, 2, 3].length).to.equal(3);
        done();
    });
});

describe("add", function () {
    it("should return 6 when i add 2 and 4", function (done) {
        (0, _chai.expect)((0, _index.add)(2, 4)).to.equal(6);
        done();
    });
});

mocha.run();