// Write your tests here!

const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution error handling", () => {
    it("should return false if the substitution alphabet is missing", () => {
        const message = "druid";
        const actual = substitution(message);

        expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet is not exactly 26 characters", () => {
        const message = "druid";
        const alphabet = "dice";
        const actual = substitution(message, alphabet);
        
        expect(actual).to.be.false;
    });

    it("should return false if the substitution alphabet does not contain unique characters", () => {
        const message = "druid";
        const alphabet = "tree";
        const actual = substitution(message, alphabet);
        
        expect(actual).to.be.false;
    });

})

describe("substitution encode", () => {
    it("should encode a message by using the given substitution alphabet", () => {
        const message = "gold";
        const alphabet = "poiuytrewqlkjhgfdsamnbvcxz";
        const actual = substitution(message, alphabet);
        const expected = "rgku"

        expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
        const message = "quest";
        const alphabet = "poiu!trewqlkjhgfdsamnbvcxz";
        const actual = substitution(message, alphabet);
        const expected = "dn!am"

        expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
        const message = "gold coin";
        const alphabet = "poiuytrewqlkjhgfdsamnbvcxz";
        const actual = substitution(message, alphabet);
        const expected = "rgku igwh"

        expect(actual).to.equal(expected);
    });
})

describe("substitution decode", () => {
    it("should decode a message by using the given substitution alphabet", () => {
        const message = "rgku";
        const alphabet = "poiuytrewqlkjhgfdsamnbvcxz";
        const actual = substitution(message, alphabet, false);
        const expected = "gold"

        expect(actual).to.equal(expected);
    });

    it("should work with any kind of key with unique characters", () => {
        const message = "dn!am";
        const alphabet = "poiu!trewqlkjhgfdsamnbvcxz";
        const actual = substitution(message, alphabet, false);
        const expected = "quest"

        expect(actual).to.equal(expected);
    });

    it("should preserve spaces", () => {
        const message = "rgku igwh";
        const alphabet = "poiuytrewqlkjhgfdsamnbvcxz";
        const actual = substitution(message, alphabet, false);
        const expected = "gold coin"

        expect(actual).to.equal(expected);
    });
})
