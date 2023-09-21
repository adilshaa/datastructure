// function mergeSort(arr) {
//   if (arr.length < 2) {
//     return arr;
//   }

//   let mid = Math.floor(arr.length / 2);

//   let leftarray = arr.slice(0, mid);
//   let rightarray = arr.slice(mid);
//   return merge(mergeSort(leftarray), mergeSort(rightarray));
// }
// function merge(leftarray, rightarray) {
//   let sort = [];
//   while (leftarray.length && rightarray.length) {
//     if (leftarray[0] <= rightarray[0]) {
//       sort.push(leftarray.shift());
//     } else {
//       sort.push(rightarray.shift());
//     }
//   }
//   return [...sort, ...leftarray, ...rightarray];
// }

// arr = [1, 2, 4, 5];
// console.log(mergeSort(arr));


function qucik(arr) {
  if (arr.length < 2) {
    return arr;
  }
  let right = [];
  let left = [];
  let pviot = arr[arr.length - 1];
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i] < pviot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return [...qucik(left), pviot, ...qucik(right)];
}
let arr = [2, 3, 4, 5, 6, 1, 3, 5];
qucik(arr);
console.log(qucik(arr));