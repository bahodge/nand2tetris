import { Bit } from "../Bit";

// Built in
// truth table
/**
 * 0, 0 => 1
 * 1, 0 => 1
 * 0, 1 => 1
 * 1, 1 => 0
 */

export default (a: Bit, b: Bit): Bit => +!(a && b) as Bit;
