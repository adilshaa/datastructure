class TrieNode {
  constructor() {
    this.children = new Map();
  }
}

class Trie {
  constructor(str) {
    this.root = new TrieNode();
    this.endSymbol = "*";
    this.populateSuffixTrie(str);
  }

  populateSuffixTrie(str) {
    for (let i = 0; i < str.length; i++) {
      console.log("times" + i);
      this.insertSubstring(i, str);
    }
  }

  insertSubstring(index, str) {
    let node = this.root;
    for (let i = index; i < str.length; i++) {
      const letter = str.charAt(i);
      if (!node.children.has(letter)) {
        node.children.set(letter, new TrieNode());
        // console.log(i, str[i], letter);
      }
      node = node.children.get(letter);
    }
    node.children.set(this.endSymbol, null);
  }
  printTrie(node = this.root, prefix = "") {
    for (const [letter, childNode] of node.children.entries()) {
      // console.log(letter,childNode);
      const newPrefix = prefix + letter;
      if (letter === this.endSymbol) {
        console.log(newPrefix); // Print the complete word
      } else {
        this.printTrie(childNode, newPrefix); // Recursively print child nodes
      }
    }
  }

  contains(str) {
    let node = this.root;
    for (let i = 0; i < str.length; i++) {
      const letter = str.charAt(i);
      if (!node.children.has(letter)) {
        return false;
      }
      node = node.children.get(letter);
    }
    return node.children.has(this.endSymbol);
  }
}

const trie = new Trie("adil");
// trie.populateSuffixTrie("adilsha");
trie.printTrie();

// console.log(trie.contains("un"));
// console.log(trie.contains("al"));


