let arr=[1,2,3,4,5,6]
let target=4
function leanierSearch(value,target){
for(let i=0;i<value.length;i++){
if(value[i]==target){
    return i+1
}
}
}

console.log(leanierSearch(arr, target));