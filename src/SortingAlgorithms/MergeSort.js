const animations = [];
const AUX_ARRAYS = 0;
const COMP = 1;
const SORT_PLACE = 2;

export function mergeSort(array, start, end) {
  if (end > start) {
    let mid = Math.floor((start + end) / 2);
    mergeSort(array, start, mid);
    mergeSort(array, mid + 1, end);
    merge(array, start, mid, end);
  }
  return animations;
}


function merge(array, start, mid, end) {
  animations.push({mode: AUX_ARRAYS, indices:[start, end]});
  let lower_size = (mid + 1) - start;
  let upper_size = (end - mid);

  let lower_array = [];
  let upper_array = [];

  for (let index = 0; index < lower_size; index++) {
    lower_array.push(array[start + index]);
  }
  for (let index = 0; index < upper_size; index++) {
    upper_array.push(array[(mid + 1) + index]);
  }

  let lower_index = 0;
  let upper_index = 0;
  let merged_index = start;

  while (lower_index < lower_size && upper_index < upper_size) {
    animations.push({mode: COMP, indices:[start + lower_index, (mid + 1) + upper_index]});
    if (lower_array[lower_index] <= upper_array[upper_index]) {
      animations.push({mode: SORT_PLACE, indices:[merged_index, start + lower_index]});
      array[merged_index] = lower_array[lower_index];
      lower_index++;
    } else {
      animations.push({mode: SORT_PLACE, indices:[merged_index, (mid + 1) + upper_index]});
      array[merged_index] = upper_array[upper_index];
      upper_index++;
    }
    merged_index++;
  }

  while (lower_index < lower_size) {
    animations.push({mode: SORT_PLACE, indices:[merged_index, start + lower_index]});
    array[merged_index] = lower_array[lower_index];
    lower_index++;
    merged_index++;
  }

  while (upper_index < upper_size) {
    animations.push({mode: SORT_PLACE, indices:[merged_index, (mid + 1) + upper_index]});
    array[merged_index] = upper_array[upper_index];
    upper_index++;
    merged_index++;
  }

}

