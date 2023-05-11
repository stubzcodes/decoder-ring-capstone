// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius encode", () => {
    it("should encode a message by translating each letter to number pairs", () => {
        const message = "rogue";
        const actual = polybius(message);
        const expected = "2443225451";

        expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42 ", () => {
        const message = "jitter";
        const actual = polybius(message);
        const expected = "424244445124";

        expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
        const message = "health potion";
        const actual = polybius(message);
        const expected = "325111134432 534344424333";

        expect(actual).to.equal(expected);
    });
})

describe("polybius decode", () =>{
    it("should decode a message by translating each pair of numbers into a letter", () =>{
        const message = "2443225451";
        const actual = polybius(message, false);
        const expected = "rogue";

        expect(actual).to.equal(expected);
    });

    it("should translate both 'i' and 'j' to 42 ", () => {
        const message = "424244445124";
        const actual = polybius(message, false);
        const expected = "(i/j)(i/j)tter";

        expect(actual).to.equal(expected);
    });

    it("should leave spaces as is", () => {
        const message = "325111134432 534344424333";
        const actual = polybius(message, false);
        const expected = "health pot(i/j)on";

        expect(actual).to.equal(expected);
    });

    it("should return false if the length of all numbers is odd", () => {
        const message = "25271";
        const actual = polybius(message, false);
        const expected = false;

        expect(actual).to.equal(expected);
    });
})