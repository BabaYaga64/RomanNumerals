describe('romanNumerals', function() {
    it("if input is a value of 1, return I", function() {
        expect(romanNumerals(1)).to.equal("I");
    });
    it("if input is a value of 2, return II", function() {
        expect(romanNumerals(2)).to.equal("II");
    });

    it("if the input is 5, return V", function() {
        expect(romanNumerals(5)).to.equal("V");
    });

    it("if the input is 6, return VI", function() {
        expect(romanNumerals(6)).to.equal("VI");
    });

    it("if the input is 4, return IV", function() {
        expect(romanNumerals(4)).to.equal("IV");
    });

});
