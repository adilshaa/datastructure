class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  isEmpty() {
    return this.size == 0;
  }
  add(val) {
    let node = new Node(val);
    if (this.isEmpty()) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
    this.size++;
  }
  delete(value) {
    let curr = this.head;
    if (curr.value == value) {
      return (this.head = curr.next);
    }
    while (curr.next) {
      if (curr.next.value == value) {
        return (curr.next = curr.next.next);
      }
      curr = curr.next;
    }

    this.size = this.size - 1;
  }
  removeByIndex(index) {
    if (index < 0 && index > this.size) return false;
    let prev = this.head;

    if (index === 0) {
      return (this.head = this.head.next);
    } else {
      for (let i = 0; i < index - 1; i++) {
        prev = prev.next;
      }
      prev.next = prev.next.next;
    }
    this.size -= 1;
    return prev.next;
  }
  duplication() {
    let prev = this.head;
    while (prev.next) {
      if (prev.value == prev.next.value) {
        return (prev.next = prev.next.next);
      }
      prev = prev.next;
    }
  }

  print() {
    let curr = this.head;
    let sum = "";
    while (curr) {
      sum += `${curr.value} `;
      curr = curr.next;
    }
    return console.log(sum);
  }
}

let list = new LinkedList();
list.add(40);
list.add(50);
list.add(70);
list.add(90);
list.add(90);
list.duplication();
list.print();

console.log(list);

// bubleSort

// let arr = [1, 2, 1, 4, 4, 2, 4 , 5]
// let swapped
// do {
//     swapped= false;

//     for (let i = 0; i < arr.length; i++){
//         if (arr[i] > arr[i + 1]) {
//             let temp = arr[i]
//             arr[i] = arr[i + 1]
//             arr[i + 1] = temp
//             swapped=true
//         }
//     }
// } while (swapped)
// console.log(arr);

// insertion sort

// let arr = [2, 4, 6, 3, 5, 6, 3, 2];

// for (let i = 1; i < arr.length; i++) {
//   let j = i - 1;
//   let sortingvalue = arr[i];
//   while (j >= 0 && arr[j] > sortingvalue) {
//     arr[j + 1] = arr[j];
//     j = j - 1;
//   }
//   arr[j + 1] = sortingvalue;
// }

// console.log(arr);

// quicksort

// function quicksort(arr){

// }

let arr = [2, 3, 5, 4, 5, 3];

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let j = i - 1;
    let current = arr[i];
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }

    arr[j + 1] = current;
  }
}

insertionSort(arr);
console.log(arr);

function Quisort(arr) {
    if (arr.length < 2) {
      return arr;
    }
    
  let left = [];
  let right = [];
  let povit = arr[arr.length - 1];

  for (let i = 0; i < arr.length-1; i++) {
    if (arr[i] < povit) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
    }

  return [...Quisort(left), povit , ...Quisort(right)];
}

console.log(Quisort(arr));


