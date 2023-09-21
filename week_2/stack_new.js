class Stack{
    constructor(){
        this.item=[2,3,4,5]
    }
    push(value){
        this.item.push(value)
        console.log(this.item);
    }
    pop(){
        this.items.pop()
    }
}
const stack=new Stack()
stack.push(60)