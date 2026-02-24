import { describe, it } from "node:test";
import assert from "node:assert";
import createObjectIdFromDate from "./index.js"; // Imagine this is your package logic

describe("ObjectId creation", () => {
  it("Should create a string with 24 characters from Date", () => {
    const result = createObjectIdFromDate(new Date());

    assert.strictEqual(result.length, 24);
  });

  it("Should create a string with 24 characters from ISOString", () => {
    const result = createObjectIdFromDate("1990-01-01");

    assert.strictEqual(result.length, 24);
  });
});

describe("ObjectId validation", () => {
  it("Should not allow invalid dates", () => {
    assert.throws(() => createObjectIdFromDate(123456789098765432), {
      name: "Error",
      message: "Invalid Date",
    });
    assert.throws(() => createObjectIdFromDate("1990-13-01"), {
      name: "Error",
      message: "Invalid Date",
    });
  });

  it("Should not allow dates before July 5. 1978", () => {
    assert.throws(() => createObjectIdFromDate(123), {
      name: "Error",
      message: "Date must be after July 5. 1978",
    });
    assert.throws(() => createObjectIdFromDate("1970-01-01"), {
      name: "Error",
      message: "Date must be after July 5. 1978",
    });
  });
});
