import Mux from "./Mux";

describe("Mux", () => {
  it("exists", () => {
    expect(Mux).toBeDefined();
  });
  describe("given args, (0, 0, 0)", () => {
    it("returns 0", () => {
      expect(Mux(0, 0, 0)).toBe(0);
    });
  });
  describe("given args, (1, 1, 1)", () => {
    it("returns 1", () => {
      expect(Mux(1, 1, 1)).toBe(1);
    });
  });
  describe("given args, (1, 0, 0)", () => {
    it("returns 0", () => {
      expect(Mux(1, 0, 0)).toBe(0);
    });
  });
  describe("given args, (1, 1, 0)", () => {
    it("returns 0", () => {
      expect(Mux(1, 1, 0)).toBe(0);
    });
  });
  describe("given args, (0, 1, 1)", () => {
    it("returns 1", () => {
      expect(Mux(0, 1, 1)).toBe(1);
    });
  });
  describe("given args, (0, 0, 1)", () => {
    it("returns 1", () => {
      expect(Mux(0, 0, 1)).toBe(0);
    });
  });
  describe("given args, (1, 0, 1)", () => {
    it("returns 1", () => {
      expect(Mux(1, 0, 1)).toBe(0);
    });
  });
  describe("given args, (0, 0, 1)", () => {
    it("returns 0", () => {
      expect(Mux(0, 0, 1)).toBe(0);
    });
  });
});
