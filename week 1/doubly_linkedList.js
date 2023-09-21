class Node{
    constructor(value){
        this.value=value
        this.next=null
        this.prev=null
    }
}
class DLinkedList{
    constructor(){
        this.head=null
        this.tail=null
        this=size=0

    }

    isEmpty(){
        return this.size==0
    }
    prepend(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            node.next=this.head
            this.head=node 
        }
    }

    
    append(value){
        let node=new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        } else {
            this.tail.next=node
            this.tail=node
        }
    }
}

let dlist=new DLinkedList()