import Nand from "./Nand";

describe("Nand", () => {
  it("exists", () => {
    expect(Nand).toBeDefined();
  });
  describe("given args, (0, 0)", () => {
    it("returns 1", () => {
      expect(Nand(0, 0)).toBe(1);
    });
  });
  describe("given args, (0, 1)", () => {
    it("returns 1", () => {
      expect(Nand(0, 1)).toBe(1);
    });
  });
  describe("given args, (1, 0)", () => {
    it("returns 1", () => {
      expect(Nand(1, 0)).toBe(1);
    });
  });
  describe("given args, (1, 1)", () => {
    it("returns 0", () => {
      expect(Nand(1, 1)).toBe(0);
    });
  });
});
