/**
 * Filters out falsy values (null, undefined, false, 0, etc.) from an array
 * @param arr - The array to filter
 * @returns A new array with falsy values removed
 */
export const removeFalsyValues = <T>(arr: T[]): T[] => {
  return arr.filter(Boolean);
};

/**
 * Sorts an array of numbers in ascending order
 * @param arr - The array to sort
 * @returns A sorted array
 */
export const sortArrayAscending = (arr: number[]): number[] => {
  return [...arr].sort((a, b) => a - b);
};

/**
 * Finds the maximum value in an array
 * @param arr - The array of numbers
 * @returns The maximum number in the array
 */
export const findMaxValue = (arr: number[]): number => {
  return Math.max(...arr);
};
