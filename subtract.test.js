const subtract = require("./subtractValues");

test("it should subtract two numbers", () => {
  expect(subtract(2, 1)).toBe(1);
});
