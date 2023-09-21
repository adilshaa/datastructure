let arr=[1,3,27,5,8]

function mergeSort(arr){

    if(arr.length<2){
        return arr
    }


    
    let mid = Math.floor(arr.length / 2)
    let leftarray=arr.slice(0,mid)
    let rightarray = arr.slice(mid)
    
    return  merge(mergeSort(leftarray) , mergeSort(rightarray)) 
}

function merge(leftarray, rightarray) {
        
    let sortArray=[] 
    while(leftarray.length&& rightarray.length){
        if(leftarray[0]<=rightarray[0]){
            sortArray.push(leftarray.shift())
        }else{
            sortArray.push(rightarray.shift())
        }
    }    

    return [...sortArray ,...leftarray ,...rightarray]
}
console.log(mergeSort(arr));
