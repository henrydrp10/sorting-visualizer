const MAIN_PIVOT = 0;
const LEFT_PIVOT = 1;
const RIGHT_PIVOT = 2;
const SWAP = 3;
const SORTED = 4;

let animations = [];

export function quickSortCall(array) {
  array = quickSort(array, 0, array.length - 1);
  return animations;
}

function quickSort(array, start, end) {
  if (start < end) {
    let partition_index = partition(array, start, end);
    array = quickSort(array, start, partition_index - 1);
    array = quickSort(array, partition_index + 1, end);
  }
  return array;
} 

function partition(array, start, end) {
  animations.push({mode: MAIN_PIVOT, indices:[end]});
  let pivot = array[end];
  let smallest_index = start - 1;

  for (let index = start; index < end; index++) {
    animations.push({mode: RIGHT_PIVOT, indices:[index]});
    if (array[index] < pivot) {
      animations.push({mode: LEFT_PIVOT, indices:[smallest_index + 1]});
      smallest_index++;
      animations.push({mode: SWAP, indices:[smallest_index, index]});
      [array[smallest_index], array[index]] = [array[index], array[smallest_index]];
    }
  }
  animations.push({mode: SORTED, indices:[smallest_index + 1, end]});
  [array[smallest_index + 1], array[end]] = [array[end], array[smallest_index + 1]];
  return smallest_index + 1;
}