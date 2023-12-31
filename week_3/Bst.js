// class Node{
// constructor(value){
//     this.value=value
//     this.left=null
//     this.right=null
// }
// }

// class binarySearch{
//     constructor(){
//         this.root=null
//     }

//     isEmpty(){
//         return this.root === null
//     }
//     insert(value){
//         let NewNode=new Node(value)
//         if(this.isEmpty()){
//             this.root=NewNode
//         }else{
//             this.insertNewNode(this.root,NewNode)
//         }
//   }

//     insertNewNode(root , newNode){
//         if( newNode.value < root.value ){
//             if(root.right == null ){
//                 root.right= newNode
//             }else{
//                 this.insertNewNode(root.right,newNode)
//             }
//         }else{
//             if(root.left==null){
//                 root.left=newNode
//             }else{
//                 this.insertNewNode(root.left ,newNode)
//             }
//         }
//     }

//     search(root, value){
//         if(!root){
//             return false
//         }else{
//             if(root.value== value){
//                 return true
//             }else{
//                 if(root.value> value){
//                  return  this.search(root.left , value)
//                 }else{
//                  return this.search(root.right, value)
//                 }
//             }
//         }
//     }

//     PreOrder(root){
//         if(root){
//             console.log(root.value);
//             this.PreOrder(root.left)
//             this.PreOrder(root.right)
//         }
//     }
//     inOrder(root){
//         if(root){
//             this.inOrder(root.left)
//             console.log(root.value);
//             this.inOrder(root.right)
//         }
//     }
//     postOrder(root){
//         if(root){
//             this.postOrder(root.left)
//         this.postOrder(root.right)
//         console.log(root.value);
//         }
//     }
// }
// const bst =new binarySearch()
// console.log(bst.isEmpty());
// bst.insert(10)
// bst.insert(30)
// bst.insert(20)
// bst.insert(5)
// bst.insert(7)
// bst.insert(3)

// console.log(bst.search(bst.root , 10));
// console.log(bst.search(bst.root , 3));
// // bst.PreOrder(bst.root)
// bst.postOrder(bst.root)

class Node {
  constructor(element) {
    this.element = element;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  isEmpty() {
    return this.root == null;
  }

  insert(element) {
    const node = new Node(element);
    if (this.root === null) {
      this.root = node;
    } else {
      this.insertNode(this.root, node);
    }
  }
  insertNode(root, node) {
    if (node.element < root.element) {
      if (root.left === null) {
        root.left = node;
      } else {
        this.insertNode(root.left, node);
      }
    } else {
      if (root.right === null) {
        root.right = node;
      } else {
        this.insertNode(root.right, node);
      }
    }
  }

  // kili;
  insertion(element) {
    let currentNode = this.root;
    const node = new Node(element);
    if (currentNode === null) {
      this.root = node;
      return;
    }
    while (true) {
      if (node.element < currentNode.element) {
        if (currentNode.left === null) {
          currentNode.left = node;
          break;
        } else {
          currentNode = currentNode.left;
        }
      } else {
        if (currentNode.right === null) {
          currentNode.right = node;
          break;
        } else {
          currentNode = currentNode.right;
        }
      }
    }
  }
  // search;
  search(root, element) {
    if (!root) {
      return false;
    } else {
      if (root.element === element) {
        return true;
      } else if (element < root.element) {
        return this.search(root.left, element);
      } else {
        return this.search(root.right, element);
      }
    }
  }

  //kili contains
  contains(element) {
    let currentNode = this.root;
    while (currentNode != null) {
      if (element < currentNode.element) {
        currentNode = currentNode.left;
      } else if (element > currentNode.element) {
        currentNode = currentNode.right;
      } else {
        return true;
      }
    }
    return false;
  }

  preorder(root) {
    if (root) {
      console.log(root.element);
      this.preorder(root.left);
      this.preorder(root.right);
    }
  }

  inorder(root) {
    if (root) {
      this.inorder(root.left);
      console.log(root.element);
      this.inorder(root.right);
    }
  }
  
  postOrder(root) {
    if (root) {
      this.postOrder(root.left);
      this.postOrder(root.right);
      console.log(root.element);
    }
  }

  isBST(root) {
    if (root === null) {
      return true;
    }
    if (root.left !== null && root.left.element > root.element) {
      return false;
    }
    if (root.right !== null && root.right.element < root.element) {
      return false;
    }
    if (!this.isBST(root.left) || !this.isBST(root.right)) {
      return false;
    }
    return true;
  }

  min(root) {
    if (!root.left) {
      return root.element;
    } else { 
      return this.min(root.left);
    }
  }

  max(root) {
    if (!root.right) {
      return root.element;
    } else {
      return this.max(root.right);
    }
  }

  delete(element) {
    this.root = this.deleteNode(this.root, element);
    return element;
  }
  deleteNode(root, element) {
    if (root === null) {
      return root;
    } else {
      if (element < root.element) {
        root.left = this.deleteNode(root.left, element);
      } else if (element > root.element) {
        root.right = this.deleteNode(root.right, element);
      } else {
        if (!root.left && !root.right) {
          return null;
        } else if (!root.left) {
          return root.right;
        } else if (!root.right) {
          return root.left;
        }
        root.element = this.min(root.right);
        root.right = this.deleteNode(root.right, root.element);
      }
      return root;
    }
  }
  
  closestNum(target) {
    let currentNode = this.root;
    let closest = currentNode.element;
    while (currentNode) {
      if (Math.abs(target - closest) > Math.abs(target - currentNode.element)) {
        closest = currentNode.element;
      }
      if (target < currentNode.element) {
        currentNode = currentNode.left;
      } else if (target > currentNode.element) {
        currentNode = currentNode.right;
      } else {
        break;
      }
    }
    return closest;
  }

  isBst(root) {
    if (root == null) {
      return true;
    }
    if (root.left !== null && root.left.value < root.value) {
      return false;
    }

    if (root.right !== null && root.right.value > root.value) {
      return false;
    }
    if (!this.isBst(root.left) || !this.isBst(root.right)) {
      return false;
    }
    return true;
  }

  search(root, value) {
    if (!root) {
      return false;
    }
    if (root.value == value) {
      return true;
    } else if (root.value > value) {
      this.search(root.left, value);
    } else if (root.value < value) {
      this.search(root.right, value);
    }
  }
}

const Bst = new BinarySearchTree();
Bst.insert(90);
Bst.insert(89);
Bst.insert(97);
Bst.insert(96);
Bst.insertion(98);
Bst.insert(9);
Bst.insert(9);
Bst.insert(7);
Bst.insert(8);
Bst.insert(13);
Bst.insert(15);
Bst.insert(120);
console.log(Bst.root);
console.log("is the value in:", Bst.search(Bst.root, 7));
console.log("tree is empty:-" + Bst.isEmpty());

// console.log(Bst.contains(35));
Bst.delete(120);
// console.log(Bst.closestNum(14));
let n;
console.log("its is a bst:", Bst.isBST(Bst.root));

Bst.postOrder(Bst.root);
