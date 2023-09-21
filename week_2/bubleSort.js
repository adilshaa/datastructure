function bubbleSort(arr) {
  const n = arr.length;
  let swapped;

  do {
    swapped = false;

    for (let i = 0; i < n - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // Swap arr[i] and arr[i+1] if they are in the wrong order
        const temp = arr[i];
        arr[i] = arr[i + 1];
        arr[i + 1] = temp;
        swapped = true;
      }
    }
  } while (swapped);

  return arr;
}

let arr = [1, 101, 1, 1, 2, 122, 3];
bubbleSort(arr);
console.log(arr);

console.log(arr);

// function bubbleSortWithDelay(arr, delay) {
//   let swapped;
//   let i = 0;

//   function nextStep() {
//     if (i >= arr.length - 1) {
//       // If no swaps were made in the previous pass, the array is sorted
//       if (!swapped) {
//         console.log("Sorting complete.");
//         return;
//       }

//       // If swaps were made, reset swapped and start a new pass
//       swapped = false;
//       i = 0;
//     }

//     // Compare and swap if needed
//     if (arr[i] > arr[i + 1]) {
//       let temp = arr[i];
//       arr[i] = arr[i + 1];
//       arr[i + 1] = temp;
//       swapped = true;
//     }

//     i++;
//     // Display the current state of the array
//     console.log(arr);

//     // Schedule the next step with a delay
//     setTimeout(nextStep, delay);
//   }

//   // Start the sorting process
//   nextStep();
// }

// // Example usage with a delay of 1000 milliseconds (1 second)
// const arr = [1,2,3,4];
// bubbleSortWithDelay(arr, 1000);

