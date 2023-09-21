class Node{
    constructor(value){
        this.value=value
        this.next=null
    }

}
class linkedList{
    constructor(){
    this.head=null
    this.size=0
    }

    isEmpty(){
        return this.size==0

    }

    prepend(value){
        let node =new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
           node.next=this.head
           this.head=node 
        }
        this.size++
        console.log(node.value);
    }

    append(value){
        let node =new Node(value)
        if(this.isEmpty()){
            this.head=node
        }else{
            let prev=this.head
            while(prev.next){
                prev=prev.next
            }
            prev.next=node
        }
        this.size++
        console.log(node.value);
    }

    reverseNode(){
        if(this.isEmpty()){
            console.log("node is empty");
        }else{
            let prev=null
            let curr=this.head 
            while(curr){
                let next=curr.next
                curr.next=prev
                prev=curr
                curr=next
                 }
                this.head=prev
        }
    }


    insertInpos(index,value){

        if(index>this.size){
            return null
        }
        if(index===0){
            list.prepend(value)
        }else{
            let node=new Node(value)
            let prev=this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next

            }
            node.next=prev.next
            prev.next=node
            this.size++
        }
    }

    
    remove(index){
        let curr=this.head
        let remove;
        if(index==0){
            this.head=curr.next

        }else{
            
            for(let i=0;i<index-1;i++){
                curr=curr.next
            }
            remove=curr.next
            curr.next=remove.next
        }
        this.size--
        return remove.value
    }
    
    print(){
       let node=""
        let prev=this.head
        while(prev){
            node += `${prev.value} ` 
            prev=prev.next
        }
console.log(node);

    }
}



const list=new linkedList()

// console.log(list.prepend(5));
list.prepend(6)
list.prepend(5)
list.prepend(2)
list.append(20)
list.append(10)
list.reverseNode()
list.insertInpos(4,3)
list.remove(3)
list.print()
