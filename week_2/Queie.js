// class Quiue{
//     constructor(){
//         this.items=[]``
//     }
//     endQue(element){
//         this.items.push(element)
//     }   
//     deque(){
//         this.items.shift()
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
// const quiue=new Quiue()

// quiue.endQue(100)
// quiue.endQue(200)
// quiue.deque()
// quiue.isEmpty()

// quiue.isPrint()



class Queue{
    constructor(){
        this.arr=[1,2,3,4,5]

    }
     enque(arr){
        this.arr.push(arr)
        console.log(this.arr);
     }
     deque(){
        this.arr.shift()
        console.log(this.arr);
     }
}
const queue= new Queue()
queue.enque(3)
queue.deque()
