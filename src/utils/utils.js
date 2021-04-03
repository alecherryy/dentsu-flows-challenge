/**
 * Given an array, find the maximum value.
 *
 * @name findMax
 * @param {array} arr - The element fading out.
 * @return {integer} max value
 */
const findMax = (arr) => {
  let max = arr[0];

	arr.forEach((item) => {
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

	arr.forEach((item) => {
		if (item < min) {
      min = item
    }
  })

  return min;
};

/**
 * Format object to use correct value data type.
 *
 * @name formatObj
 * @param {number} index value
 * @param {object} obj to be formatted
 *
 * @return {object} formatted object
 */
const formatObj = (index, obj) => {
  const id = `${index}`;
  const source = `${obj.fromProcessId}`;
  const target = `${obj.toProcessId}`;
  const animated = true;

  const formatted = {
    id,
    source,
    target,
    animated
  };

  return formatted;
};

/**
 * Format object to use correct value data type.
 *
 * @name formatObj
 * @param {number} index value
 * @param {object} obj to be formatted
 *
 * @return {object} formatted object
 */
// const createNode = (process) => {
//   const id = `${index}`;
//   const source = `${obj.fromProcessId}`;
//   const target = `${obj.toProcessId}`;

//   const formatted = {
//     id,
//     source,
//     target,
//   };

//   return formatted;
// };

export const UTILS = {
  findMax, findMin, formatObj
}