import Or from "./Or";

describe("Or", () => {
  it("exists", () => {
    expect(Or).toBeDefined();
  });
  describe("given args, (0, 0)", () => {
    it("returns 0", () => {
      expect(Or(0, 0)).toBe(0);
    });
  });
  describe("given args, (0, 1)", () => {
    it("returns 1", () => {
      expect(Or(0, 1)).toBe(1);
    });
  });
  describe("given args, (1, 0)", () => {
    it("returns 1", () => {
      expect(Or(1, 0)).toBe(1);
    });
  });
  describe("given args, (1, 1)", () => {
    it("returns 1", () => {
      expect(Or(1, 1)).toBe(1);
    });
  });
});
