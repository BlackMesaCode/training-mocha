import {add} from "./index.js";
import {expect} from "../node_modules/chai/chai.js";


describe("array", function() {
    it("should have a length of 3 when it contains 3 elements", function(done) {
        expect([1,2,3].length).to.equal(3);
        done();
    })
});

describe("add", function() {
    it("should return 6 when i add 2 and 4", function(done) {
        expect(add(2,4)).to.equal(6);
        done();
    })
});

mocha.run();