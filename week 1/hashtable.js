class hahsTable {
  constructor(size) {
    this.table = new Array(size);
    this.size = size;
  }
  hash(key) {
    let sum = 0;
    for (let i = 0; i < key.length; i++) {
      sum += key.charCodeAt(i);
    }
    return sum % this.size;
  }
  set(key, value) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
        this.table[index] = [[key, value]];
        
    } else {
      let findBucket = bucket.find((item) => item[0] == key);
      if (findBucket) {
        findBucket[1] = value;
      } else {
          bucket.push([[key, value]]);
          
      }
    }
  }
  get(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (!bucket) {
      return false;
    }
    let findBucket = bucket.find((item) => item[0] == key);
    if (findBucket) {
      return findBucket[1];
    }
  }
  remove(key) {
    let index = this.hash(key);
    let bucket = this.table[index];
    if (bucket) {
      let sameindex = bucket.find((item) => item[0] == key);
      if (sameindex) {
        bucket.splice(bucket.indexOf(sameindex), 1);
        this.table[index] = undefined;
      }
    }
    }
    display() {
        for (let i = 0; i < this.size; i++){
            if (this.table[i]) {
            console.log(i,this.table[i]);
                
            }
        }
    }
}

let haashT = new hahsTable(50)
haashT.set('adil', 'adilshaaaa')
console.log(haashT.get("adil"));
haashT.remove('adil')
haashT.display()