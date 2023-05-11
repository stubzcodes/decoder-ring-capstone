// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar")

describe("caesar error handling",() => {
    it("should return false if the shift value is 0", () => {
        const shift = 0
        const message = "thinkful"
        const actual = caesar(message, shift)

        expect(actual).to.be.false;
    });

    it("should return false if the shift value is above 25", () => {
        const shift = 26
        const message = "thinkful"
        const actual = caesar(message, shift)

        expect(actual).to.be.false;
    });

    it("should return false if the shift value is below -25", () => {
        const shift = -26
        const message = "thinkful"
        const actual = caesar(message, shift)

        expect(actual).to.be.false;
    });

})

describe("caesar encode", () =>{
    it("should encode a message by shifting the letters", () => {
        const shift = 4
        const message = "kraken"
        const actual = caesar(message, shift)
        const expected = "oveoir"

        expect(actual).to.equal(expected);
    });

    it("should encode a message by shifting the letters", () => {
        const shift = 4
        const message = "kraken dice!"
        const actual = caesar(message, shift)
        const expected = "oveoir hmgi!"

        expect(actual).to.equal(expected);
    });
    it("should ignore capital letters", () => {
        const shift = 4
        const message = "Kraken"
        const actual = caesar(message, shift)
        const expected = "oveoir"

        expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
        const shift = 4
        const message = "zebra"
        const actual = caesar(message, shift)
        const expected = "difve"

        expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
        const shift = -4
        const message = "kraken"
        const actual = caesar(message, shift)
        const expected = "gnwgaj"

        expect(actual).to.equal(expected);
    });
})

describe("caesar decode", () => {
    it("should decode a message by shifting letters in the opposite direction", () => {
        const shift = 4
        const message = "oveoir"
        const actual = caesar(message, shift, false)
        const expected = "kraken"

        expect(actual).to.equal(expected);
    });

    it("should leaves spaces and other symbols as is", () => {
        const shift = 4
        const message = "oveoir hmgi!"
        const actual = caesar(message, shift, false)
        const expected = "kraken dice!"

        expect(actual).to.equal(expected);
    });

    it("should ignore capital letters", () => {
        const shift = 4
        const message = "Oveoir"
        const actual = caesar(message, shift, false)
        const expected = "kraken"

        expect(actual).to.equal(expected);
    });

    it("should appropriately handle letters at the end of the alphabet", () => {
        const shift = 4
        const message = "difve"
        const actual = caesar(message, shift, false)
        const expected = "zebra"

        expect(actual).to.equal(expected);
    });

    it("should allow for a negative shift that will shift to the left", () => {
        const shift = -4
        const message = "gnwgaj"
        const actual = caesar(message, shift, false)
        const expected = "kraken"

        expect(actual).to.equal(expected);
    });
})