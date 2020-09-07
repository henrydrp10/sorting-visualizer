export function quickSort(array, start, end) {
  if (start < end) {
    let partition_index = partition(array, start, end);
    array = quickSort(array, start, partition_index - 1);
    array = quickSort(array, partition_index + 1, end);
  }
  return array;
} 

function partition(array, start, end) {
  let pivot = array[end];
  let smallest_index = start - 1;

  for (let index = start; index < end; index++) {
    if (array[index] < pivot) {
      smallest_index++;
      [array[smallest_index], array[index]] = [array[index], array[smallest_index]];
    }
  }
  [array[smallest_index + 1], array[end]] = [array[end], array[smallest_index + 1]];
  return smallest_index + 1;
}