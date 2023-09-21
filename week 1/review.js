// class Node{
//     constructor(value){
//         this.value=value
//         this.next=null
//     }
// }
// class LinkedList{
//     constructor(){
//         this.head=null
//         this.size=0
//     }

//     isEmpty(){
//         return this.size==0
//     }
    

//     prepend(value){
//         let node=new Node(value)
// if(this.isEmpty()){
//     this.head=node
// }
// else{
//     node.next=this.head
//     this.head=node
// console.log(node.value);
// }
//     }

//     updateData(index){
//         if(index==0){
//             list.prepend()
//         }else{
//             let prev=this.head
//             for(let i=0;i<index-1;i++){
//                 prev=prev.next
//             }
//             node.next=prev.next
//             prev.next=node
//         }
//         this.size++
//     }
// }


// let list = new LinkedList()

// list.updateData()


let arr=[1,2,3,4,5,6,7,8]


// let right=arr.length-1
// let left=0
// let target=5

// while(right>=left){
//     let mid=Math.floor((right+left)/2)
//     if(arr[mid]==target){
//         console.log(mid);
//         break;
//     }
//     if(arr[mid]>target){
//         right=mid-1
//     }else{
//         left=mid+1
//     }
// }



for(let i=arr.length-1;i>=0;i--){
    console.log(arr[i]);
}

