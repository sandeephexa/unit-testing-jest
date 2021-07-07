const { expect } = require("@jest/globals");
const requireDirectory = require("require-directory");

const sum = require("./sum");

test("it should add two numbers", () => {
  expect(sum(1, 2)).toBe(3);
});
