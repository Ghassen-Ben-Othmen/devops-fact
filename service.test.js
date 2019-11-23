const fact = require("./service");

test("test fact(0)", () => {
  expect(fact(0)).toBe(1);
});

test("test fact(1)", () => {
  expect(fact(1)).toBe(1);
});

test("test fact(2)", () => {
  expect(fact(2)).toBe(2);
});

test("test fact(5)", () => {
  expect(fact(5)).toBe(120);
});
