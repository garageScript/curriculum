/* globals describe expect it */
const solution = require("../5").solution

describe("call function in 2nd object (if possible) using the corresponding values in 1st object as function params, return new object", () => {
	it("should return {} if object is empty ", () => {
		const result = solution({}, {})
		expect(result).toEqual({})
	})

	it("should return {} when obj1 is empty even if obj2 contains entries", () => {
		const result = solution(
			{},
			{
				white: () => {
					return "walkers"
				},
			}
		)
		expect(result).toEqual({})
	})

	it("should return unmodified object if obj1 and obj2 do not match", () => {
		const result = solution(
			{
				codename: "Wall-E",
				friends: ["Mr. Roach", "Eva"],
				job: "Save the planet",
				strength: "He smol but he saved the planet",
			},
			{
				timeline: (e) => e + " (Future)",
				workHours: (e) => 12 + e,
			}
		)

		expect(result).toEqual({
			codename: "Wall-E",
			friends: ["Mr. Roach", "Eva"],
			job: "Save the planet",
			strength: "He smol but he saved the planet",
		})
	})

	it("should return new object with modified values (strings and numbers must be valid)", () => {
		const result = solution(
			{ name: "khaleesi", age: 25, power: "mother of dragons", weakness: "john snow" },
			{
				power: (e) => `${e}, burns cities`,
				weakness: (e) => `${e}, he's fire proof`,
				age: (e) => e + 5,
			}
		)
		expect(result).toEqual({
			name: "khaleesi",
			age: 30,
			power: "mother of dragons, burns cities",
			weakness: "john snow, he's fire proof",
		})
	})
})
