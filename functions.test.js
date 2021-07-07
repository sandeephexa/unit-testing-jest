const { expect, beforeAll } = require("@jest/globals");
const { beforeEach, afterEach } = require("jest-circus");

const functions = require("./functions.js");

beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const initDatabase = () => console.log("Database initialized");

const closeDatabase = () => console.log("Database Closed");

test("add num1 and num2", () => {
  expect(functions.add(2, 2)).toBe(4);
});

test("should check null values", () => {
  expect(functions.isNull()).toBeNull();
});

test("should check actual value", () => {
  let x = 5;
  expect(functions.checkValue(x)).toBe(x);
});

test("should check falsy values", () => {
  let x = 5;
  expect(functions.checkValue(null)).toBeFalsy();
});

test("should create and match the user", () => {
  expect(functions.createUser()).toEqual({
    firstName: "John",
    lastName: "Doe",
  });
});

test("should check less than", () => {
  const load1 = 5;
  const load2 = 10;
  expect(load1 + load2).toBeLessThan(16);
});

//RegEx
test("should not have I in team", () => {
  expect("team").not.toMatch(/I/i);
});

test("should have admin in usernames", () => {
  usernames = ["john", "admin", "lilly"];
  expect(usernames).toContain("admin");
});

// async calls with promise
test("should fetch user with name: Leanne Graham", () => {
  expect.assertions(1);
  return functions.fetchUser().then((data) => {
    expect(data.name).toBe("Leanne Graham");
  });
});

// async-await
test("should fetch user with name: Leanne Graham", async () => {
  expect.assertions(1);
  const data = await functions.fetchUser();
  expect(data.name).toBe("Leanne Graham");
});
