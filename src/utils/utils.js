/**
 * Given an array, find the maximum value.
 *
 * @name findMax
 * @param {array} arr - The element fading out.
 * @return {integer} max value
 */
const findMax = (arr) => {
  let max = arr[0];

	arr.map((item) => {
		if (item > max) {
      max = item
    }
  })

  return max;
};

/**
 * Given an array, find the minimum value.
 *
 * @name findMax
 * @param {array} arr - The element fading out.
 * @return {integer} max value
 */
const findMin = (arr) => {
  let min = arr[0];

	arr.map((item) => {
		if (item < min) {
      min = item
    }
  })

  return min;
};

export const UTILS = {
  findMax, findMin
}