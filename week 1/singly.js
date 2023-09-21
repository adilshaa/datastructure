// class Node{
//    constructor(value){
//     this.value=value
//     this.next=null
//    }

// }

// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     isEmpty(){
//         return this.size===0
//     }

//     getSize(){
//         return this.size
//     }
//     addValue(value){
//         let node =new Node(value)
//        if(this.isEmpty()){
//         this.head=node
//        }else{
//         node.next=this.head
//         this.head=node
//        }
//        this.size++
//     }
//     addEnd(value){
//         let node =new Node(value)
//         if(this.isEmpty()){
//             this.head=node
//         }else{
//             let curr=this.head
//             while(curr.next){
//                 curr=curr.next
//             }
//             curr.next=node
//         }
//         this.size++;
//     }

//     addValaues(value){
//     let node =new Node(value)

// if(this.isEmpty()){
//     this.head=node
// }else{
//     node.next=this.head
//     this.head=node
// }
// this.size++;
//     }


//         addToEnd(value){
// let node =new Node(value)

// if(this.isEmpty()){
//     this.head=node
// }else{
//     let curr=this.head
//     while(curr.next){
//         curr=curr.next
//     }
//     curr.next=node
// }
// this.size++;
//         }

// remove(index){
//     if(index<0 || index >=this.size){
//         return null
//     }
//     if(index ===0){
//         this.head=this.head.next
//     }else{
//         let prev=this.head
//         for(let i=0;i<index-1;i++){
//             prev = prev.next
//         }
//     }
// }

// insertValue(value,index){
//     let node=new Node(value)
//     if(index<0||index>this.size){
//         return null
//     }
//     if(index===0){
//        this.addValue(value)
//     }else{
//         let prev=this.head
//        for(let i=0;i<index-1;i++){
//         prev=prev.next
//        }
//        node.next=prev.next
//        prev.next=node
//        this.size++;
//     }
// }
         
//         duplicate(){
//             let prev=this.head
//             while(prev.next){
//                 if(prev.value==prev.next.value){
//                     prev.next  = prev.next.next
//                     this.size--;
//                 }
//                 prev=prev.next
//             }
//         }

//     print(){
//         if(this.isEmpty()){
//             console.log("This is empty");
//         }else{
//             let curr=this.head
//             let Values=""
//             while(curr){
//                 Values += `${curr.value}`
//                 curr=curr.next
//             }
//             console.log(Values);

//         }

//     }
// }

// const list =new LinkedList()

// list.addValaues(2)
// list.addValaues(5)
// list.addValue(5)
// list.addValue(2)
// list.insertValue(10,1)
// list.insertValue(20,2)
// list.insertValue(50,1)
// list.insertValue(10,1)



// list.duplicate()

// list.remove(0)
// list.print()


class Node{
    constructor(value){
        this.value=value
        this.next=null
    }
}
class LinkedList{
constructor(){
    this.head=null
    this.size=0
    this.tail=null
    
}
isEmpty(){
    return this.size==0
}
     addValeu(value){
        let node =new Node(value)
        if(this.isEmpty()){
            this.head=node
            this.tail=node
        }else{
            
            node.next=this.head
            this.head=node
        }
        this.size++;
    }

    prepend(value){
        let node =new Node(value)

        if(this.isEmpty()){
            this.head=node
        }else{
            let curr=this.head
            while(curr.next){
                curr=curr.next
            }
            curr.next=node
        }

    }
   
    dupliate(){
        if(this.isEmpty()){
            console.log("there is no value");
        }
        else{
            let curr=this.head
            while(curr.next){
                if(curr.value===curr.next.value){
                    this.curr=curr.next.next
                    this.size--;
                }
                this.curr=curr.next
            }
        }


    }

}




const list=new LinkedList()