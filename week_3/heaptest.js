class heap {
  constructor(array) {
    this.heap = [];
    if (array) {
      this.Buildheap(array);
    }
  }
  Buildheap(arr) {
    this.heap = arr;
    for (let i = parant(this.heap.length - 1); i >= 0; i++) {
      this.shiftDown(i);
    }
  }
  shiftDown(currIdx) {
    let endInd = this.heap.length - 1;
    let letfIdx = this.leftchild(currIdx);
    while (letfIdx <= endInd) {
      let rightidx = this.rightchild(currIdx);
      let indextohift;
      if (rightidx <= endInd && this.heap[rightidx] < this.heap[letfIdx]) {
        indextohift = rightidx;
      } else {
        indextohift = letfIdx;
      }
      if (this.heap[indextohift] < this.heap[currIdx]) {
        [this.heap[indextohift], this.heap[currIdx]] = [
          this.heap[currIdx],
          this.heap[indextohift],
        ];
        currIdx = indextohift;
        letfIdx = this.leftchild(currIdx);
      } else {
        return;
      }
    }
  }

  parant(i) {
    return Math.floor((i - 1) / 2);
  }
  leftchild(i) {
    return i * 2 + 1;
  }
  rightchild(i) {
    return i * 2 + 2;
  }
  shiftup(index) {
    let parntIndx = this.parant(index);
    while (index > 0 && this.heap[parntIndx] < this.heap[index]) {
      [this.heap[index], this.heap[parntIndx]] = [
        this.heap[parntIndx],
        this.heap[index],
      ];
      index = parntIndx;
    }
  }
}
