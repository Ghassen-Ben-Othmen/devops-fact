const { factIter } = require("./service");

test("test fact(0)", () => {
  expect(factIter(0)).toBe(1);
});

test("test fact(1)", () => {
  expect(factIter(1)).toBe(1);
});

test("test fact(2)", () => {
  expect(factIter(2)).toBe(2);
});

test("test fact(5)", () => {
  expect(factIter(5)).toBe(120);
});
