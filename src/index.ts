function mergeAA(asc1: number[], asc2: number[]): number[] {
  const result: number[] = [];
  let i = 0, j = 0;

  while (i < asc1.length && j < asc2.length) {
    if (asc1[i] <= asc2[j]) {
      result.push(asc1[i++]);
    } else {
      result.push(asc2[j++]);
    }
  }

  while (i < asc1.length) result.push(asc1[i++]);
  while (j < asc2.length) result.push(asc2[j++]);

  return result;
}

function mergeAD(asc: number[], des: number[]): number[] {
  const result: number[] = [];
  let i = 0;
  let j = des.length - 1; 

  while (i < asc.length && j >= 0) {
    if (asc[i] <= des[j]) {
      result.push(asc[i++]);
    } else {
      result.push(des[j--]);
    }
  }

  while (i < asc.length) result.push(asc[i++]);
  while (j >= 0) result.push(des[j--]);

  return result;
}

export function merge(
  collection_1: number[],
  collection_2: number[],
  collection_3: number[]
): number[] {
  const aa = mergeAA(collection_1, collection_2); //Merge 2 ascending first
  return mergeAD(aa, collection_3);
}
