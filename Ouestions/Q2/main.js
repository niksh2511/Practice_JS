function SearchBinary(array, target) {
  let left = 0;
  let right = array.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    if (array[mid] === target) {
      return array[mid];
    }

    if (array[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return -1;
}

let studentsAge = [89, 67, 18, 23, 90];
let search = 89;
console.log(SearchBinary(studentsAge, search));

