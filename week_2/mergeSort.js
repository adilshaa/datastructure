  function mergeSort ( arr){
    if(arr.length<2){
        return arr
    }
    
    const mid =Math.floor(arr.length/2)
    const leftArray=arr.slice(0,mid)
    const rightArray = arr.slice(mid)
    return merge(mergeSort(leftArray) , mergeSort(rightArray))
  }

  function merge(leftArray, rightArray){
  

    const sortArray=[]
    while(leftArray.length&& rightArray.length){
        if(leftArray[0]<=rightArray[0]){
            sortArray.push(leftArray.shift())
        }else{
            sortArray.push(rightArray.shift())
        }
    }
    return [...sortArray ,...  leftArray ,...rightArray]
  }
  const arr=[8 ,20 ,-2 ,4,-1]
  console.log(mergeSort(arr));


  