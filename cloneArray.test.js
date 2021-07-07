const { expect } = require("@jest/globals");
const clone = require("./cloneArray");

test("it should clone the array", () => {
  let array = [1, 2, 3];
  expect(clone(array)).toEqual(array);
  expect(clone(array)).not.toBe(array);
});
