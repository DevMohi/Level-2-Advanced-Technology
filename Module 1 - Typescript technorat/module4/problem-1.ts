const sumArray = (numberArray: number[]): number => {
  let sum: number = 0;
  for (let numbers of numberArray) {
    sum += numbers;
  }
  return sum;
};

console.log(sumArray([1, 2, 3, 4, 5]));
