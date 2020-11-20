import type { Bit } from "../Bit";
import Nand from "./Nand";
import Not from "./Not";

/**
 * And gate:
 * out = 1 if (a == 1 and b == 1)
 *       0 otherwise
 */

export default (a: Bit, b: Bit): Bit => {
  const nandAB = Nand(a, b);
  return Not(nandAB);
};
