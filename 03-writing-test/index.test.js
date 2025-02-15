import test from "node:test";
import assert from "node:assert";
import { sum } from "./index.js";

test("sum should return the correct sum of two numbers", () => {
  assert.strictEqual(sum(2, 3), 5, "sum(2, 3) should return 5");
  assert.strictEqual(sum(-1, 1), 0, "sum(-1, 1) should return 0");
  assert.strictEqual(sum(0, 0), 0, "sum(0, 0) should return 0");
  assert.strictEqual(sum(10, 20), 30, "sum(10, 20) should return 30");
});
