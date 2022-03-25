const { readBookMiddleware } = require("../utilities");

describe("Testing the request middileware", () => {
  test("Should retrieve all books", () => {
    expect(Array.isArray(readBookMiddleware())).toBe(false);
  });
});
