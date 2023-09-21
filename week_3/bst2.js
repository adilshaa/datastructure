class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class bst {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root == null;
  }

  inset(value) {
    const node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }

  insertNode(root, NewNode) {
    if (NewNode.value < root.value) {
      if (this.right == null) {
        this.right = NewNode;
      } else {
        this.insertNode(root.right, NewNode);
      }
    } else {
      if (root.left == null) {
        root.left = NewNode;
      } else {
        this.insertNode(root.left, NewNode);
      }
    }
  }

  search(root, value) {
    if (!root) {
      return false;
    } else {
      if (root.value === value) {
        return true;
      } else {
        if (root.value > value) {
          return this.search(root.left, value);
        } else {
          return this.search(root.right, value);
        }
      }
    }
  }

  delete(value) {
    this.root = this.deletNode(this.root, value);
    return value;
  }

  deletNode(root, value) {
    if (root === null) {
      return root;
    } else {
      if (value < root.value) {
        root.left = this.deletNode(root.left, value);
      } else if (value > root.value) {
        root.left = this.deletNode(root.right, value);
      } else {
        if (!root.left && !root.right) {
          return null;
        } else if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
        root.value = this.min(root.right);
        root.rightv = this.deletNode(root.right, root.value);
      }
      return root;
    }
  }
  
  bstValid(root) {
    if (root == null) {
      return true
    }
        if (root !== null && root.value > root.left.value) {
      return false
    }
    if (root !== null && root.value < root.right.value) {
      return false
    }
    if (!this.bstValid(root.right) || !this.bstValid(root.left)) {
      return false
    }
    return true
  }

  preOrder() {
    if (this.root) {
      console.log(this.root);
      this.preOrder(this.root.left);
      this.preOrder(this.root.right);
    }
  }
}
