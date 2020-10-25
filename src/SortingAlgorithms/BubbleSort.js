export function bubbleSort(array) {

  const COMP = 0;
  const SWAP = 1;

  const animations = [];

  let sorted = false;
  while (!sorted) {
    let swap_count = 0;
    for (let index = 0; index < array.length - 1; index++) {
      // Push a comparison object to the animations array.
      animations.push({mode: COMP, indices:[index, index + 1]});
      if (array[index] > array[index + 1]) {
        // Push a swap object to the animations array.
        animations.push({mode: SWAP, indices: [index, index + 1]});
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        swap_count++;
      }
    }
    if (swap_count === 0) sorted = true;
  }

  return animations;

}