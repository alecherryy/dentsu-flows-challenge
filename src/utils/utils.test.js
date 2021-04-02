import { UTILS } from './utils';

/**
 * Test for findMax()
 */
test('finds max value', () => {
  // output: 128
  let array = [13, 2, 127, 0, 128, 10, 45, 37];
  expect(UTILS.findMax(array)).toBe(128);

  // output: 999
  array = [-999, 999];
  expect(UTILS.findMax(array)).toBe(999);

  // output: -10
  array = [-10, -5, -1];
  expect(UTILS.findMax(array)).toBe(-1);

  // output: 11
  array = [11, 11];
  expect(UTILS.findMax(array)).toBe(11);

  // output: 0
  array = [-19, 0];
  expect(UTILS.findMax(array)).toBe(0);

  // output: undefined
  array = [];
  expect(UTILS.findMax(array)).toBe(undefined);
})

/**
 * Test for findMin()
 */
test('finds min value', () => {
  // output: 0
  let array = [13, 2, 127, 0, 128, 10, 45, 37];
  expect(UTILS.findMin(array)).toBe(0);

  // output: 999
  array = [-999, 999];
  expect(UTILS.findMin(array)).toBe(-999);

  // output: -23
  array = [-23, 84];
  expect(UTILS.findMin(array)).toBe(-23);

  // output: 3
  array = [9, 3, 10, 48, 3, 8];
  expect(UTILS.findMin(array)).toBe(3);

  // output: undefined
  array = [];
  expect(UTILS.findMin(array)).toBe(undefined);
})