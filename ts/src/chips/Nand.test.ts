import Nand from "./Nand";

describe("Nand", () => {
  it("exists", () => {
    expect(Nand).toBeDefined();
  });
  describe("given args, (false, false)", () => {
    it("returns true", () => {
      expect(Nand(false, false)).toBe(true);
    });
  });
  describe("given args, (false, true)", () => {
    it("returns true", () => {
      expect(Nand(false, true)).toBe(true);
    });
  });
  describe("given args, (true, false)", () => {
    it("returns true", () => {
      expect(Nand(true, false)).toBe(true);
    });
  });
  describe("given args, (true, true)", () => {
    it("returns false", () => {
      expect(Nand(true, true)).toBe(false);
    });
  });
});
