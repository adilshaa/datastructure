class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}
class Bst {
  constructor() {
    this.root = null;
  }
  isEmpty() {
    return this.root == null;
  }
  insertNode(value) {
    let node = new Node(value);
    if (this.isEmpty()) {
      this.root = node;
    } else {
      this.insetBySearch(this.root, node);
    }
  }
  insetBySearch(root, node) {
    if (node.value > root.value) {
      if (root.right == null) {
        root.right = node;
      } else {
        this.insetBySearch(root.right, node);
      }
    } else {
      if (root.left == null) {
        root.left = node;
      } else {
        this.insetBySearch(root.left, node);
      }
    }
  }
  isBst(root) {
    if (root == null) {
      return true;
    }
    if (root !== null && root.value > root.left.value) {
      return false;
    }
    if (root !== null && root.value < root.right) {
      return false;
    }
    if (!this.isBst(root.right) || !this.isBst(root.left)) {
      return false;
    }
    return true;
  }
  delete(value) {
    this.root = this.deleteNode(this.root, value);
  }
  deleteNode(root, value) {
    if (root == null) {
      return root;
    } else {
      if (value > root.value) {
        root.right = this.deleteNode(root.right, value);
      } else if (value < root.value) {
        root.left = this.deleteNode(root.left, value);
      } else {
        if (!root.right && !root.left) {
          return null;
        } else if (!root.rihgt) {
          return root.left;
        } else if (!root.left) {
          return root.right;
        }
        root.value = this.min(root.rihgt);
        root.right = this.deleteNode(root.right, root.value);
      }
      return root;
    }
  }
  min(root) {
    if (!root.right) {
      return root.value;
    } else {
      return this.min(root.right);
    }
  }
  max(root) {
    if (!root.left) {
      return root.value;
    } else {
      return this.max(root.left);
    }
  }
}
