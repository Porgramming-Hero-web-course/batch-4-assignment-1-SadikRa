{
  /// Create a TypeScript function removeDuplicates that accepts an array of numbers and returns a new array with duplicates removed. Preserve the original order of elements.

  function removeDuplicates(numbers: number[]): number[] {
    const newArray: number[] = [];
    numbers.forEach((num) => {
      if (!newArray.includes(num)) {
        newArray.push(num);
      }
    });
    return newArray;
  }

  // take a look

  const WithDuplicatesArray = [1, 1, 22, 22, 3, 4, 3, 5, 6, 5, 6]

  const result = removeDuplicates(WithDuplicatesArray);
//   console.log(result)
  ///
}
