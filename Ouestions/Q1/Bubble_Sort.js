function sortArray(array) {
    let swap;
    do {
        swap = false;
        for (let i = 0; i < array.length - 1; i++) {
            if (array[i] > array[i + 1]) {
                let temp = array[i];
                array[i] = array[i + 1];
                array[i + 1] = temp;
                swap = true;
            }
        }
    } while (swap);
    return array;
}
 
let studentAge = [22, 19, 16, 24, 15];
let sortedArray = sortArray(studentAge); 
console.log(sortedArray);