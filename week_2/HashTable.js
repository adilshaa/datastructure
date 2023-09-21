// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(Key){
//         let total=0
//         for(let i=0;i<Key.length;i++){
//             total += Key.charCodeAt(i)
//             // console.log(total);
//         }
//         return total % this.size
//     }

//     set(Key, value){
//         const index= this.hash(Key)
//         this.table[index] = value
//     }

//     get(Key){
//         const index=this.hash(Key)
//         return  this.table[index]
//     }

//     remove(Key){
//         const index=this.hash(Key)
//         this.table=[index]=undefined
//     }
//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//              }
//         }
//     }
// }

// const table= new HashTable(50)
// table.set("Name" , "Adil")
// table.display()
// console.log(table.hash("Name"));

// colluision

// class HashTable{
//     constructor(size){
//         this.table=new Array(size)
//         this.size=size
//     }

//     hash(Key){
//         let total=0
//         for(let i=0;i<Key.length;i++){
//             total += Key.charCodeAt(i)
//             // console.log(total);
//         }

//         return total % this.size
//     }

//     set(Key, value){
//         const index= this.hash(Key)
//         let buket =this.table[index]
//         if(!buket){
//             this.table[index]= [[Key,value]]
//         }else{
//             const Sameitem= buket.find(item =>item[0] ===Key)
//             if(Sameitem)
//             {
//                 Sameitem[1]=value
//             }else{
//                 buket.push([Key,value])
//             }
//         }
//     }
//     get(Key){
//         const index=this.hash(Key)

//         let bucket= this.table[index]
//         if(bucket){
//             const samekey=bucket.find(item => item[0] === Key)
//             if(samekey){
//                 return samekey[1]
//             }
//         }
//         return und

//     }
//     remove(Key){
//         const index=this.hash(Key)
//         // this.table=[index]=undefined
//         const bucket=this.table[index]
//         if(bucket){
//             const sameKey=bucket.find(item => item[0] ===Key)
//             if(sameKey){
//                 bucket.splice(bucket.indexOf(sameKey),1)
//             }
//         }
//     }


//     display(){
//         for(let i=0;i<this.table.length;i++){
//             if(this.table[i]){
//                 console.log(i,this.table[i]);
//              }
//         }
//     }
// }

// const table= new HashTable(50)
// table.set("Name" , "Adil")
// table.set("Nmae" ,"Bruse")
// table.set("age" ,18)

// table.display()
// console.log(table.hash("Name"));

// class Hash{
//     constructor(size){
//         const arr=new Array(size)
//         this.size=size
//     }
//     Hash(key){
//         let toatal=0
//         for(let i=0;i<this.arr.length;i++){
//             toatal += key.charCodeAt(i)
//         }
//         return toatal % this.size
//     }
//     set(key ,value ){
//         const index=this.Hash(key)
//         this.arr[index]=value
//     }
// }

// class HashTable {
//   constructor(size) {
//     this.table = new Array(size).fill(null).map(() => []);
//     this.size = size;
//   }
//   hash(key) {
//     let sum = 0;
//     for (let i = 0; i < key.length; i++) {
//       sum += key.charCodeAt(i);
//     }
//     return sum % this.size;
//   }
//   set(key, value) {
//     let index = this.hash(key)
//     let bucket = this.table[index]
    
//     for (const pair of bucket) {
//       if (pair.key === key) {
//         console.log(pair.value);
//         pair.value=value
//       }
//     }
//     bucket.push({ key: index, value: value })
//     console.log(bucket);
//   }
//   has(key) {
//     let index = this.hash(key)
//     let buckt = this.table[index]
//     for (let pair of buckt) {
     
//       if (pair.key == index) {
//         return true
//       }
//     }
//     return false
//   }
// }


// let hash = new HashTable(50)
// hash.set('adilsha','adilsha')
// hash.set("muhsin", "adilsha");
// console.log(hash.has("muhsin"));
// console.log(hash.has("adilsh"));

