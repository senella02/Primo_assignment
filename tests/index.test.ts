import { merge } from '../src/index'; 

describe('merge function', () => {
  test('Merges 2 ascending and 1 descending sorted arrays', () => {
    const c1 = [1, 3, 5];
    const c2 = [2, 4, 6];
    const c3 = [9, 7, 0];

    const result = merge(c1, c2, c3);

    expect(result).toEqual([0, 1, 2, 3, 4, 5, 6, 7, 9]);
  });

  test('Merge empty arrays', () => {
    expect(merge([], [], [])).toEqual([]);
    expect(merge([1], [], [3, 2, 1])).toEqual([1, 1, 2, 3]);
  });

  test('Merge duplicates arrays', () => {
    const c1 = [1, 2];
    const c2 = [2, 3];
    const c3 = [3, 2, 1];

    expect(merge(c1, c2, c3)).toEqual([1, 1, 2, 2, 2, 3, 3]);
  });
});
