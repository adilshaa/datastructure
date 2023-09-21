// // let arr=[1,2,3,4,5,6,7,8]

// // let left=0
// // let right=arr.length
// // let target=3
// // while(left<=right){
// //     let min=Math.floor((right+left)/2)
// //     if(arr[min]==target)
// //     {
// //         console.log(min);
// //         break
// //     }
// //     if(target<arr[min]){
// //         right=min-1
// //     }else{
// //         letf=min+1
// //     }
// // }

// // right Code

// // let a=[1,-1,2,3,4,5,6,7,8]

// // let right=a.length-1
// // let left=0
// // let targe=6

// // while(left<=right){
// //     let mid=Math.floor((right+left)/2)
// //     if(targe===a[mid]){
// //         console.log(a[mid]);
// //         break;
// //     }else{
// //         if(targe<a[mid]){
// //             right=mid-1
// //         }else{
// //             left=mid+1
// //         }
// //     }
// // }

// // let arr=[1,2,3,4,5,6,7,8]
// // let right=arr.length-1
// // let left=0
// // let target=6

// // // function binary
// // while(right>=left){
// //     let mid=Math.floor((right+left)/2)
// //     if(target===mid){
// //         console.log(arr[mid]);
// //         break;
// //     }
// //     if(arr[mid]>target){
// //         right=mid-1
// //     }else{
// //         left=mid+1
// //     }
// // }

// // let arr=[1,2,3,4,5,6,7,8]
// // let right=arr.length-1
// // let left=0
// // let trget=6

// // while(right>=left){
// //     let mid=Math.floor((right+left)/2)
// // if(arr[mid]==trget){
// //     console.log(arr[mid],mid);
// //     break;
// // }
// // if(arr[mid]>trget){
// //     right=mid-1
// // }else{
// //     left=mid+1
// // }
// // }

// // let arr = [1, 2, 5, 6, 7, 8, 9,10];

// // let right = arr.length-1;
// // let left = 0;

// // let target = 5;
// // let mid = Math.floor(right + left / 2);
// // console.log(mid);
// // while (right >= left) {
// //   let mid = Math.floor(right+left/2);
// //   if (arr[mid] == target) {
// //     return console.log(arr[mid]);
// //   }

// //   if (arr[mid] < target) {
// //     left = mid + 1;
// //   } else {
// //     right = mid - 1;
// //   }
// // }

// let arr = [2, 3, 4, 5, 7, 8, 9]

// let right = arr.length-1
// let left = 0
// let targe = 4

// while (left <= right) {
//     let mid = Math.floor(right + left / 2)
//     if (arr[mid] == targe) {
//         return console.log(arr[mid]);
//     }
//     if (arr[mid] < targe) {
//         left = mid = 1;
        
//     } else {
//         right = mid - 1;
//     }
// }



// function recursion(val) {
    
//     if (val<=1) {
//         return val
//     }

//     return val*recursion(val-1)
// }
// console.log(recursion(4));


