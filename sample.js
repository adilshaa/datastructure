class node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
class linkedList {
  head = null;
  size = 0;

  insertOne(value) {
    let Node = new node(value);
    if (this.isEmpty()) {
      this.head = Node;
    } else {
      Node.next = this.head;
      this.head = Node;
    }
    this.size++;
  }
  isEmpty() {
    return this.size === 0;
  }
  print() {
    if (this.isEmpty()) {
      console.log("This is empty");
    } else {
      let curr = this.head;
      let Values = "";
      while (curr) {
        Values += `${curr.value}`;
        curr = curr.next;
      }
      console.log(Values);
    }
  }
  delete(value) {
    if (value == this.head.value) {
      this.head = this.head.next;
    } else {
      let curr = this.head;
      while (curr.next) {
        if (curr.next.value == value) {
          curr.next = curr.next.next;
          size--;
          return;
        }
        curr = curr.next;
      }
    }
    }
    find(value) {
        if(value)
    }
}

const list = new linkedList();

list.insertOne(10);
list.insertOne(20);
list.insertOne(30);
list.delete(30);
console.log(list);
list.print();
