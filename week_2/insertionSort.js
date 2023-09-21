


// function InsertionSort(arr){

//     for(let i=1;i<arr.length;i++){
//         let numsersToInsert=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>numsersToInsert){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=numsersToInsert
//     }

// }

class Stack{
    constructor() {
       this.values=[1,2,2,3,5]
    } 
    push(val) {
        this.values.push(val)
    }
    pop() {
        this.values.pop()
    }
}

let stack=new Stack()

stack.pop()

console.log(stack.values); 



class Queue{
    constructor() {
       this.values = [1, 2, 2, 3, 5];
        
    }
    enques(val) {
        this.values.push(val)
    }
    deque() {
        this.values.shift()
    }
}

let queue = new Queue();

queue.deque()
queue.deque();
console.log(queue.values);
// function InsertionSort2(arr){

//     for(let i=1;i<arr.length;i++){
//         let Sortval=arr[i]
//         let j=i-1

//         while(j>=0 && arr[j] > Sortval){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=Sortval
//     }
// }
 
// arr=[-6,4,8,20,-2]
// InsertionSort2(arr)
// console.log(arr);



// function Insert(arr){
//     for(let i=0;i<arr.length;i++){
//         let num=arr[i]
//         let j=i-1 
//         while(j>=0&& arr[j]>num){
//             arr[j+1]=arr[j]
//             j=j-1
//         }
//         arr[j+1]=num
//     }
// }
// let arr=[5,3,4,6,7,1]
// Insert(arr)
// console.log(arr);