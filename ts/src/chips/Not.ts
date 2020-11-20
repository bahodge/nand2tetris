import type { Bit } from "../Bit";

import Nand from "./Nand";

/**
 * Not gate:
 * out = not in
 */

export default (a: Bit): Bit => Nand(a, a);
