export const insertionSortAnimations = (arr: number[]): number[][] => {
  let animations: number[][] = [];
  for (let i = 1; i < arr.length; i++) {
    let temp = arr[i];
    let j = i - 1;
    while (j >= 0 && temp < arr[j]) {
      animations.push([j, j + 1]); // highlight the two bars
      animations.push([j + 1, j]); // swap
      animations.push([j, j + 1]); // reset
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = temp;
  }
  return animations;
};
