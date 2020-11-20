import Xor from "./Xor";

describe("Xor", () => {
  it("exists", () => {
    expect(Xor).toBeDefined();
  });
  describe("given args, (0, 0)", () => {
    it("returns 0", () => {
      expect(Xor(0, 0)).toBe(0);
    });
  });
  describe("given args, (0, 1)", () => {
    it("returns 1", () => {
      expect(Xor(0, 1)).toBe(1);
    });
  });
  describe("given args, (1, 0)", () => {
    it("returns 1", () => {
      expect(Xor(1, 0)).toBe(1);
    });
  });
  describe("given args, (1, 1)", () => {
    it("returns 0", () => {
      expect(Xor(1, 1)).toBe(0);
    });
  });
});
