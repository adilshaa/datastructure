// class Stack{
//     constructor(){
//         this.items=[1,2,3,4,5,6,7,8,9]
//     }
//     push(value){
//         this.items.push(value)
//         console.log(this.items);
//     }
//     pop(){
//         return this.items.pop()
//     }
//     peek(){
//         return this.items[this.items.length-1]
//     }
//     isEmpty(){
//         return this.items.length===0
//     }
//     isSize(){
//         return this.items.length
//     }
//     isPrint(){
//         console.log(this.items.toString());
//     }
// }

// const stackOne =new Stack();

// stackOne.push(5)
// stackOne.isPrint()



class Stack2{
    constructor(){
        this.arr=[1,2,3,4,5,6]
    }
    push(arr){
        this.arr.push(arr)
        console.log(this.arr);
    }
    pull(){
        return this.arr.pop()
        // console.log(this.arr);
    }
    peek(){
        return this.arr[this.arr.length-1]
    }
}
const stack=new Stack2()
stack.push(40)

console.log(stack.pull());
console.log(stack.peek());
