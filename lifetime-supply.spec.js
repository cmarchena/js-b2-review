const { daysToEndOfYear, getDayInYear, isLeapYear, potatoCalculator,totalPotatoSupply, weeksToEndOfLife } = require("./lifetimeSupply.js")
describe('Test isLeapYear function', () => {
    it('should return true for leap year', () => {
        expect(isLeapYear(2024)).toBe(true);
    })
    it('should return false for non leap year', () => {
        expect(isLeapYear(2023)).toBe(false);
    })
    it('should return false for year 2100', () => {
        expect(isLeapYear(2100)).toBe(false);
    })
    it('should return true for year 2000', () => {
        expect(isLeapYear(2000)).toBe(true);
    })
})
describe('Test getDayInYear function', () => {
    it('should return 1 for January 1, 2023 (Sunday)', () => {
        const currentDate = new Date(2023, 0, 1); // January 1, 2023
        const dayInYear = getDayInYear(currentDate);
        expect(dayInYear).toEqual(1);
    })
    it('should return 366 for December 31, 2024', () => {
        const currentDate = new Date(2024, 11, 31); // January 1, 2024
        const dayInYear = getDayInYear(currentDate);
        expect(dayInYear).toEqual(366);
    });
});
describe('Test daysToEndOfYear function', () => {
    it('should return 365 for December 31, 2024 ', () => {
        const currentDate = new Date(2024, 0, 1); // January 1, 2024
        const daysToEnd = daysToEndOfYear(currentDate);
        expect(daysToEnd).toEqual(365);
    });
    it('should return 0 for December 31, 2023 (Sunday)', () => {
        const currentDate = new Date(2023, 11, 31); // January 1, 2024
        const daysToEnd = daysToEndOfYear(currentDate);
        expect(daysToEnd).toEqual(0);
    });
});
describe('Test weeksToEndOfLife function', () => {
    it('should return 2870 for December 31, 2023 (Sunday)', () => {
        const currentDate = new Date(2023, 11, 31);
        const age = 45
        const maxLife = 100
        const weeksToEnd = weeksToEndOfLife(age, maxLife, currentDate);
        expect(weeksToEnd).toEqual(2870);
    });
    it('should return 2916 for February 14, 2024 (Wednesday)', () => {
        const currentDate = new Date(2024, 1, 14);
        const age = 45
        const maxLife = 100
        const weeksToEnd = weeksToEndOfLife(age, maxLife, currentDate);
        expect(weeksToEnd).toEqual(2916);
    });
});
describe('Test totalPotatoSupply function', () => {
    it('should return 5740 for December 31, 2023 (Sunday)', () => {
        const currentDate = new Date(2023, 11, 31);
        const age = 45
        const maxLife = 100
        const potatoQuantity = 2
        const totalPotato = totalPotatoSupply(age, maxLife, potatoQuantity, currentDate);
        expect(totalPotato).toEqual(5740);
    });
    it('should return 5832 for February 14, 2024 (Wednesday)', () => {
        const currentDate = new Date(2024, 1, 14);
        const age = 45
        const maxLife = 100
        const potatoQuantity = 2
        const totalPotato = totalPotatoSupply(age, maxLife, potatoQuantity, currentDate);
        expect(totalPotato).toEqual(5832);
    });
})
describe('Test potatoCalculator function', () => {
    it('should return "JOHN has 45 years and will eat 17006112 potatoes until age of 100"', () => {
        const currentDate = new Date(2024,1,14);
        const name = 'john'
        const age = 45
        const maxLife = 100
        const potatoQuantity = 2
        const totalPotato = totalPotatoSupply(age, maxLife, potatoQuantity, currentDate);
        jest.spyOn(Date, 'now').mockImplementation(() => currentDate);
        const result = potatoCalculator(name, age, maxLife, totalPotato);
        expect(result).toEqual("JOHN has 45 years and will eat 17006112 potatoes until age of 100");
    });

})
