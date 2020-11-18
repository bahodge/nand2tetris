// Built in
// truth table
/**
 * 0, 0 => 1
 * 1, 0 => 1
 * 0, 1 => 1
 * 1, 1 => 0
 */

export default (a: boolean, b: boolean): boolean => !(a && b);
