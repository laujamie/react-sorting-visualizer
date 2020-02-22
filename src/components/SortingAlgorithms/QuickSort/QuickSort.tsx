export const quickSortAnimations = (arr: number[]): number[][] => {
  if (arr.length <= 1) {
    return [];
  }
  const animations: number[][] = [];
  quickSortHelp(arr, 0, arr.length - 1, animations);
  console.log(arr);
  return animations;
};

const partition = (
  arr: number[],
  low: number,
  high: number,
  animations: number[][]
): number => {
  let pivot = arr[high];
  animations.push([high]); // Add pivot selection as an animation
  let last = low;
  for (let i = low; i < high; i++) {
    let swapped = false;
    let prev = [last, i];
    animations.push(prev); // Change color of last and element i
    if (arr[i] < pivot) {
      [arr[last], arr[i]] = [arr[i], arr[last]];
      last++;
      swapped = true;
    }
    let temp = swapped ? [i, last - 1] : [last, i];
    animations.push(temp); // Swapped or not
    animations.push(prev); // Reset colors
  }
  [arr[last], arr[high]] = [arr[high], arr[last]];
  animations.push([high]); // Reset color of the pivot after partitioning
  animations.push([last, high]); // change color of pivot
  animations.push([high, last]); // swap pivot with high
  animations.push([last, high]); // reset pivot color
  return last;
};

const quickSortHelp = (
  arr: number[],
  low: number,
  high: number,
  animations: number[][]
) => {
  if (low >= high) return;
  let p_index = partition(arr, low, high, animations);

  quickSortHelp(arr, low, p_index - 1, animations);
  quickSortHelp(arr, p_index + 1, high, animations);
};
