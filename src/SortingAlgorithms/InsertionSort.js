export function insertionSort(array) {

  let value;
  let loop_index;
  for (let i = 1; i < array.length; i++) {
    value = array[i];
    loop_index = i - 1;
    while (loop_index >= 0 && array[loop_index] > value) {
      array[loop_index + 1] = array[loop_index];
      loop_index--;
    }
    array[loop_index + 1] = value;
  }

  return array;
}