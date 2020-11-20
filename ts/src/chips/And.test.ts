import And from "./And";

describe("And", () => {
  it("exists", () => {
    expect(And).toBeDefined();
  });
  describe("given args, (0, 0)", () => {
    it("returns 0", () => {
      expect(And(0, 0)).toBe(0);
    });
  });
  describe("given args, (0, 1)", () => {
    it("returns 0", () => {
      expect(And(0, 1)).toBe(0);
    });
  });
  describe("given args, (1, 0)", () => {
    it("returns 0", () => {
      expect(And(1, 0)).toBe(0);
    });
  });
  describe("given args, (1, 1)", () => {
    it("returns 1", () => {
      expect(And(1, 1)).toBe(1);
    });
  });
});
