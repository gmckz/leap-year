const leapYear = require("./leapYear");

describe("leapYear", () => {
	it("returns true when given a year divisible by 400", () => {
		expect(leapYear(2000)).toBe(true);
	});
	it("returns false when given a year divisible by 100 but not 400", () => {
		expect(leapYear(1700)).toBe(false);
		expect(leapYear(1900)).toBe(false);
		expect(leapYear(1800)).toBe(false);
	});
	it("returns true when given a year divisible by 4 but not 100", () => {
		expect(leapYear(2004)).toBe(true);
		expect(leapYear(2008)).toBe(true);
		expect(leapYear(2012)).toBe(true);
	});
	it("returns false when given a year not divisible by 4", () => {
		expect(leapYear(2009)).toBe(false);
		expect(leapYear(2010)).toBe(false);
		expect(leapYear(2011)).toBe(false);
	});
	it("returns expected acceptance criteria", () => {
		expect(leapYear(2000)).toBe(true);
		expect(leapYear(1970)).toBe(false);
		expect(leapYear(1900)).toBe(false);
		expect(leapYear(1988)).toBe(true);
		expect(leapYear(1500)).toBe(false);
	});
});
