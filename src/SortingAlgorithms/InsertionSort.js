export function insertionSort(array) {

  const PIVOT = 0;
  const COMP = 1;
  const DISPLACE = 2;
  const PIVOT_SWAP = 3;

  const animations = [];

  let value;
  let loop_index;
  for (let i = 1; i < array.length; i++) {
    animations.push({mode: PIVOT, indices:[i]});
    value = array[i];
    loop_index = i - 1;
    while (loop_index >= 0) {
      animations.push({mode: COMP, indices:[i, loop_index]});
      if (array[loop_index] <= value) {
        break;
      }
      animations.push({mode: DISPLACE, indices:[loop_index]});
      array[loop_index + 1] = array[loop_index];
      loop_index--;
    }
    animations.push({mode: PIVOT_SWAP, indices: [loop_index + 1, i]});
    array[loop_index + 1] = value;
  }

  return animations;
}