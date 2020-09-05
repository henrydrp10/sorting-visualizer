export function bubbleSort(array) {

  let sorted = false;
  while (!sorted) {
    let swap_count = 0;
    for (let index = 0; index < array.length - 1; index++) {
      if (array[index] > array[index + 1]) {
        [array[index], array[index + 1]] = [array[index + 1], array[index]];
        swap_count++;
      }
    }
    if (swap_count === 0) sorted = true;
  }

  return array;

}