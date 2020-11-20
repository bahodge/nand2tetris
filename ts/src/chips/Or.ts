import type { Bit } from "../Bit";
import Not from "./Not";
import And from "./And";

/**
 * Or gate:
 * out = 1 if (a == 1 or b == 1)
 *       0 otherwise
 */

export default (a: Bit, b: Bit): Bit => {
  const nota = Not(a);
  const notb = Not(b);
  const notab = And(nota, notb);
  return Not(notab);
};
