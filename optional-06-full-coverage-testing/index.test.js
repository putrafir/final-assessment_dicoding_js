import test from "node:test";
import assert from "node:assert";
import sum from "./index.js";

// Uji penjumlahan dua bilangan positif
test("Menjumlahkan dua bilangan positif", () => {
  assert.strictEqual(sum(3, 5), 8);
  assert.strictEqual(sum(10, 20), 30);
});

// Uji jika salah satu atau kedua bilangan negatif
test("Menjumlahkan dengan bilangan negatif", () => {
  assert.strictEqual(sum(-2, 5), 0);
  assert.strictEqual(sum(7, -3), 0);
  assert.strictEqual(sum(-4, -6), 0);
});

// Uji jika input bukan angka (string, array, object, null, undefined)
test("Menjumlahkan dengan input bukan angka", () => {
  assert.strictEqual(sum("3", 5), 0);
  assert.strictEqual(sum(5, "7"), 0);
  assert.strictEqual(sum([1, 2], 3), 0);
  assert.strictEqual(sum(3, null), 0);
  assert.strictEqual(sum(undefined, 5), 0);
  assert.strictEqual(sum({}, 3), 0);
});

// Uji jika salah satu angka nol
test("Menjumlahkan dengan nol", () => {
  assert.strictEqual(sum(0, 5), 5);
  assert.strictEqual(sum(5, 0), 5);
  assert.strictEqual(sum(0, 0), 0);
});

// Uji dengan bilangan desimal positif
test("Menjumlahkan bilangan desimal", () => {
  const tolerance = 1e-10; // Toleransi lebih besar dari Number.EPSILON
  assert.ok(Math.abs(sum(1.1, 2.2) - 3.3) < tolerance);
  assert.ok(Math.abs(sum(2.5, 3.5) - 6.0) < tolerance);
});

// Uji dengan angka besar
test("Menjumlahkan angka besar", () => {
  assert.strictEqual(sum(1000000, 2000000), 3000000);
});
