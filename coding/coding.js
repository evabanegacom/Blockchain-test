const myArray = [1, 2, 3, 4];

const anArray =
  "An array is a data structure consisting of a collection of elements, each item identified by their index position";

console.log(myArray[0]);
// outputs 1

// sorts listed in my example
const bubblesort = (array) =>{
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let prev = array[j];
				array[j] = array[j + 1];
				array[j + 1] = prev;
			}
		}
	}
	return array;
}

// Quick sort

const quickSort = 'I am not sure how to implement this but i know it involves using the .sort()';
