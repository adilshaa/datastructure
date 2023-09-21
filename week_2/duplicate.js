let arr =[1,2,4,3,4,2,3,4,3]
let count=1;

for(let i=0;i<arr.lenght;i++){
    for(let j=i+1;j<arr.lenght;j++){
        if(arr[i]==arr[j]){
            count++;
            
        }
    }
    if(count>1){
        console.log(count);

    }
}