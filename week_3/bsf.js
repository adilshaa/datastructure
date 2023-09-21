class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class Bst {
  constructor() {
    this.root;
  }
  isBimaryTree(root) {
    if (root == null) {
      return true;
    }
    if (root.right !== null && root.right.value < root.value) {
      return false;
    }
    if (root.left !== null && root.left.value > root.value) {
      return false;
    }
    if (!this.isBimaryTree(root.right) || !this.isBimaryTree(root.left)) {
      return false;
    }
    return true;
    }
    delete(value) {
        this.root=this.delteNode(value)
    }
}


