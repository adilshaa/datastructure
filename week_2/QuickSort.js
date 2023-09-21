// let arr=[-2,6,20,4,-8]



function QuickStart(arr){
  if(arr.length<2){
    return arr
  }
  let right = []
let left = []
let pviot=arr[arr.length-1]
  

  
  for(let i=0;i<arr.length-1;i++){
    if(arr[i]<pviot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }

  return [...QuickStart(left), pviot, ...QuickStart(right)]
}
// console.log(QuickStart(arr));

                                                                    
                                                                  

function QuickSort2(arr){
  if(arr.length<2){
    return arr
  }
  let right = []
  let left = []
  let pviot = arr[arr.length-1]

  
  for(let i=0;i<arr.length-1;i++){
   
    if(arr[i]<pviot){
      left.push(arr[i])
    }else{
      right.push(arr[i])
    }
  }
 

  return [...QuickSort2(left) , pviot , ...QuickSort2(right)]
}

let arr=[1,2,3,3,5,1,9,8]

console.log(QuickSort2(arr));