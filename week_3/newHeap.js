class Heap {
  constructor(array) {
    this.Heap = [];
    this.buildheap(array);
  }
  buildheap(array) {
    this.Heap = array;
    for (let i = this.parant(this.Heap.length - 1); i >= 0; i++) {
      this.shiftDown(i);
    }
  }
  shiftDown(currIndex) {
    let endIndex = this.Heap.length - 1;
    let leftIndx = this.leftChilder(currIndex);
    while (leftIndx <= endIndex) {
      let righidx = this.rightChilder(currIndex);
      let indexToshoft;

      if (righidx <= endIndex && this.Heap[righidx] > this.Heap[leftIndx]) {
        indexToshoft = righidx;
      } else {
        indexToshoft = left;
      }
      if (this.Heap[indexToshoft] > this.Heap[currIndex]) {
        [this.Heap[indexToshoft], thise.Heap[currIndex]] = [
          this.Heap[currIndex],
          this.Heap[indexToshoft],
        ];
        currIndex = indexToshoft;
        leftIndx = this.leftChilder(currIndex);
      }
      }
      
  }
  parant(i) {
    return Math.floor((i - 1) / 2);
  }
  leftChilder(i) {
    return i * 2 + 1;
  }
  rightChilder(i) {
    return i * 2 + 2;
  }
}
