class MaxHeap{
    constructor(array){
        this.heap=[]
        if(array){
            this.BuildMax(array)
        }
    }
    BuildMax(array){
        this.heap=array
        for(let i=this.parent(this.heap.length-1);i>=0 ;i--){
            this.downShift(i)
        }
    }
    
    downShift(currentIdx) {
        let endIdx=this.heap.length-1
        let leftidx=this.leftChild(currentIdx)
        while(leftidx<=endIdx){
            let rightidx=this.rightChild(currentIdx)
            let idxToShift;
            if(rightidx <= endIdx && this.heap[rightidx]<this.heap[leftidx]){
                idxToShift=rightidx
            }else{
                idxToShift=leftidx
            }
    
        if(this.heap[currentIdx]>this.heap[idxToShift]){
           [ this.heap[currentIdx],this.heap[idxToShift]]= [this.heap[idxToShift],this.heap[currentIdx]]
           currentIdx=idxToShift
           leftidx=this.leftChild(currentIdx)
        }else{
            return
        }
    }
}

    parent(i){
        return Math.floor((i-1)/2)
    }
    leftChild(i){
        return i*2+1
    }
    rightChild(i){
        return i*2+2
    }

}