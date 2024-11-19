const removeDuplicates = (arrayNum: number[]): number[] => {
  let uniqueArray: number[] = [];
  for (let i = 0; i < arrayNum.length; i++) {
    let duplicate : boolean = false;

    for (let j = 0; j < uniqueArray.length; j++) {
    //   console.log(uniqueArray[j], arrayNum[i]); 

      if (arrayNum[i] === uniqueArray[j]) {
        duplicate = true;
        break;
      }
    }

    if (duplicate == false) {
      uniqueArray.push(arrayNum[i]);
    }
  }
  return uniqueArray;
};

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
