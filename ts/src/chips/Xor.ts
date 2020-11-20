import type { Bit } from "../Bit";
import And from "./And";
import Nand from "./Nand";
import Or from "./Or";

/**
 * Exclusive-or gate:
 * out = not (a == b)
 */

export default (a: Bit, b: Bit): Bit => {
  // 1, 1 => 1
  const aorb = Or(a, b);
  // 1, 1 => 0
  const anandb = Nand(a, b);
  // 1, 0 => 0
  return And(aorb, anandb);
};
