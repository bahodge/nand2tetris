import Not from "./Not";
import And from "./And";
import Or from "./Or";
import { Bit } from "../Bit";

/**
 * Multiplexor:
 * out = a if sel == 0
 *       b otherwise
 */

export default (a: Bit, b: Bit, sel: Bit): Bit => {
  const notsel = Not(a);
  const selanda = And(notsel, b);
  const selandb = And(sel, b);
  return Or(selanda, selandb);
};
