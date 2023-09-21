
// let arr=[1,2,3,4,5]


// function array(val){
//       let temp=0
//     for(let i=0;i<val.length;i++){
//         temp=arr[i]
//     }
//     console.log(temp+"first");
// }


// function array2(val2){
// let temp=0
//     temp=val2[val2.length-1]
//     console.log(temp);
// }
// array2(arr)
// array(arr)


// find two numbers thats sum is 10 


// let array=[1,2,3,4,5,6,]
// let n=10
// function sum(val){
// for(let i=0;i<val.length;i++){
//     for(let j=i+1;j<val.length;j++){
//         if(val[i]+val[j]==n){
//             return [val[i],val[j]]
//         }

//     }
// }
// }
// console.log(sum(array));



// const arr =[1,2,3,"adil",true]

// arr.push("false")
// arr.unshift("muhsin")
// arr.shift()
// arr.pop()
// for( let f of arr){
//     console.log(f);
// }

// Set Method 

  
// const set =new Set([1,2,3])


 
// set.add(4)
// set.delete(3)
// console.log(set.has(4));
// console.log(set.size);
// for(const val of set){
//     console.log(val);
// }






// //   Singly Linked List 

class Node {
    constructor(value){
        this.value=value
        this.next =null
    }
}


class LinkedList {
    constructor(){
        this.head=null
        this.size=0
    }


    isEmpty(){
        return this.size ===0 

    }

    getSize(){
        return this.size
    }
// (1) constant 

    prepend(value){
        const node =new Node(value)
        if(this.isEmpty()){
            this.head=node
            // console.log(this.head);
        }else{
            node.next=this.head
            this.head=node
        }
        this.size++
    }
// (n) leniear 

    append(value){
    const node =new Node(value)
    if(this.isEmpty()){
        this.head=node
        console.log("Haiii");
    }else{
        console.log("koooaiii");
        let prev = this.head
        while(prev.next){
           prev= prev.next
        }
        prev.next=node
    }
    this.size++
    }


    insert(value ,index){
        if(index < 0 || index > this.size){
          return  
        }
        if(index == 0){
            this.prepend(value)
        }else{
            const node =new Node(value)
            let prev= this.head
            for(let i=0 ;i<index-1;i++){
                prev= prev.next
            }
            node.next=prev.next
            prev.next=node
            this.size++

        }       
    }
    remove(index){
        if(index<0 ||index >= this.size){
            return null 
        }
        let removedNode;
        if(index===0){
            // removedNode =this.head
            this.head=this.head.next
        }else{
            let prev= this.head
            for(let i=0;i<index-1;i++){
                prev=prev.next
            }
            removedNode =prev.next
            prev.next=removedNode.next
        }
        this.size--
        return removedNode.value
           
    }




    
    removeValue(value){
        if(this.isEmpty()){
            return null
        }
                 

        if(this.head.value===value){
            this.head=this.head.next
            this.size--
            return value
        }else{
            let prev = this.head
            while(prev.next && prev.next.value!==value){
                prev=prev.next
            }
        if(prev.next){
            const  removedNode= prev.next
            prev.next= removedNode.next
            this.size--
            return value  
        }
        return null
        }
    }
    
 search(value){
    if(this.isEmpty()){
        return -1
    }
    let i=0
    let curr =this.head
    while(curr){
        if(curr.value===value){
            return i
        }
        curr=curr.next
        i++;
    }
    return 1
 }

 reverse(){
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

    //(n) linear
    print(){
        if(this.isEmpty()){
            console.log("the List is empty");
        }else{

            let curr =this.head
            let listValues =''
            while (curr) {
                listValues += `${curr.value} `
                curr= curr.next
            }
            console.log(listValues);
        }
    }
}
const list = new LinkedList()
console.log("List Empty",list.isEmpty());
console.log( "list size", list.getSize());
list.print()
list.append(10)
list.print()
list.append(20)
list.append(30)
list.print()

list.insert(10,0)
list.insert(20,0)
list.insert(30,0)
list.insert(40,0)
list.insert(10,0)
list.insert(50,0)
list.print()

console.log(list.remove(2));
console.log(list.removeValue(40));


console.log(list.search(40));
list.reverse()
list.print()

