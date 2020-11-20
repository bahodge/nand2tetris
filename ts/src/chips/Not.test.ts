import Not from "./Not";

describe("Nand", () => {
  it("exists", () => {
    expect(Not).toBeDefined();
  });
  describe("given args, (0)", () => {
    it("returns 1", () => {
      expect(Not(0)).toBe(1);
    });
  });
  describe("given args, (1)", () => {
    it("returns 1", () => {
      expect(Not(1)).toBe(0);
    });
  });
});
