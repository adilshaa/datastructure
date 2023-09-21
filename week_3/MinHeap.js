class MinHeap {
    constructor(array) {
      this.heap = [];
      if (array) {
        this.buildHeap(array);
      }
  }
  
    buildHeap(array) {
      this.heap = array;
      for (let i = this.parent(this.heap.length - 1); i >= 0; i--) {
        this.shiftDown(i);
      }
  }

    shiftDown(currentIdx) {
      let endIdx = this.heap.length - 1;
      let leftIdx = this.leftChild(currentIdx);
      while(leftIdx<=endIdx){
        let rightIdx = this.rightChild(currentIdx)
        let idxToShift; 
        if(rightIdx<= endIdx  &&  this.heap[rightIdx]< this.heap[leftIdx]){
            idxToShift = rightIdx
        }else{
            idxToShift = leftIdx
        }
        if(this.heap[currentIdx]>this.heap[idxToShift] ){
            [this.heap[currentIdx],this.heap[idxToShift]]=[this.heap[idxToShift],this.heap[currentIdx]]
            // this.swap(currentIdx,idxToShift)
            currentIdx =  idxToShift 
            leftIdx = this.leftChild(currentIdx) 
        }else{
            return;
        }
      }
    }
    
    shiftUp(currentIdx) {
      let parentIdx = this.parent(currentIdx);
      while (currentIdx > 0 && this.heap[currentIdx] < this.heap[parentIdx]) {
        // this.swap(currentIdx, parentIdx);
        [ this.heap[currentIdx],this.heap[parentIdx]] = [ this.heap[parentIdx], this.heap[currentIdx]]
        currentIdx = parentIdx;
        parentIdx = this.parent(currentIdx);
      }
    }
    
    peek() {
      return this.heap[0];
    }
    
    remove() {
        [this.heap[0],this.heap[this.heap.length-1]] = [this.heap [this.heap.length -1],this.heap[0]]
      // this.swap(0, this.heap.length - 1);
      const valueToRemove = this.heap.pop();
      this.shiftDown(0);
      return valueToRemove;
    }
    
    insert(value) {
      this.heap.push(value);
      this.shiftUp(this.heap.length - 1);
    }
   
    parent(i) {
      return Math.floor((i - 1) / 2);
    }
  
    leftChild(i) {
      return i * 2 + 1;
    }
  
    rightChild(i) {
      return i * 2 + 2;
    }
  
    swap(i, j) {
      [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    display() {
      console.log(this.heap);
    }
    sort(){
      for(let i= this.heap.length-1;i>=0;i--){
          this.sorting(i)
      }
    }
    sorting(currentidx){
      [this.heap[0],this.heap[currentidx]] = [this.heap[currentidx],this.heap[0]]
      console.log(this.heap[currentidx]);
      this.heap.pop()
      this.shiftDown(0)
  }
}
 
  const array = [3,4,2,1,7]
  const heap = new MinHeap(array);
  heap.insert(33)
  heap.insert(335)
  heap.display()

