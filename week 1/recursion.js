function recursion(val){

    if (val >= 1) {
        recursion(val - 1)
        console.log(val);
        let sum=0
        return sum+=val
    }
}

recursion(5)



// let arr="apple orange mango";

// let prints = ""
// for(let i =arr.length-1;i>=0;i--){
//     prints+=arr[i]
// }
// let text =arr.replace("apple", "butter")
// console.log(text);

// const arr=[1,2,3,4,5,6,7,8]
// let sums=sum(arr)
// console.log(sums);

// let left=0
// let right=arr.length-1
// let target=6



// //bainary search recursion
// function binary(a,target,left,right){
//     let mid=Math.floor((left+right)/2)
//     if(left>right){
//         return null
//     }
//     if(a[mid]==target){
//         return mid
//     }
//    if(target<a[mid]){
//     right=mid-1
//  return   binary(a,target,left,right)
//    }else{
//     left=mid+1
//   return  binary(a,target,left,right)
//    }
   
// }

// let b=binary(arr,target,left,right)
// console.log(b);

// // 

// function binaryrec(right,left,target,arr){
//     let mid=Math.floor((left+right)/2)
//     if(left>right){
//         return null
//     }
//     if(arr[mid]==target){
//         return mid
//     }
//     if(arr[mid]>target){
//         right=mid-1
//         return binaryrec(right,left,target,arr)
//     }else{
//         left =mid+1
//         return binaryrec(right,left,target,arr)

//     }
// }

// let result= binaryrec(right,left,target,arr)
// console.log(result);



// function sum(values){
//     if(values<=1){
//         return values
//     }else{
//         return values+sum(values-1)
//     }
// }


// console.log(sum(5));




// function recSreum(values){
//     if(values<=1){
// return values
//     }

//     return values+recSreum(values-1)
// }
// console.log(recSreum(5));

let arr=[1,2,3,4,5,6,7]
let left=0
let right=arr.length-1
let target=4

function recB(left,right,arr,target){
    let mid=Math.floor((right+left))
if(arr[mid]===target){
    return mid
}    
    if(arr[mid]>target){
        right=mid-1
        return recB(left,right,arr,target)
    }else{
        left =mid+1
        recB(left,right,arr,target)
    }
}
console.log(recB(left,right,arr,target));

