export const bubbleSortAnimations = (arr: number[]): number[][] => {
  let animations: number[][] = [];
  if (arr.length < 1) {
    return animations;
  }
  const tempArray = arr.slice();
  bubbleSortHelp(tempArray, animations);
  return animations;
};

const bubbleSortHelp = (arr: number[], animations: number[][]) => {
  let n = arr.length;
  for (let i = 0; i < n; i++) {
    let swapped = false;
    for (let j = 1; j < n - i; j++) {
      // push these two as the number we are comparing
      animations.push([j - 1, j]);
      if (arr[j - 1] > arr[j]) {
        [arr[j - 1], arr[j]] = [arr[j], arr[j - 1]];
        animations.push([j, j - 1]);
        swapped = true;
      } else {
        animations.push([j - 1, j]);
      }
      animations.push([j - 1, j]);
    }
    if (!swapped) break;
  }
};
