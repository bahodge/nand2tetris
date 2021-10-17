import Nand from "./Nand"

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

// @ponicode
describe("Nand.default", () => {
    test("0", () => {
        let callFunction: any = () => {
            Nand.default(0, 0)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction: any = () => {
            Nand.default(0, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction: any = () => {
            Nand.default(1, 1)
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction: any = () => {
            Nand.default(1, 0)
        }
    
        expect(callFunction).not.toThrow()
    })
})
