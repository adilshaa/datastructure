class Graph {
  constructor() {
    this.adj = new Map();
  }
  insertVertex(vert) {
    if (!this.adj[vert]) {
      this.adj[vert] = new Set();
    }
  }
  insetEdge(vert1, vert2) {
    if (!this.adj[vert1]) {
      this.insertVertex(vert1);
    }
    if (!this.adj[vert2]) {
      this.insertVertex(vert2);
    }
    this.adj[vert1].add(vert2);
    this.adj[vert2].add(vert1);
  }
  deleteEdge(vert1, vert2) {
    if (this.adj[vert1]) {
      this.adj[vert1].delete(vert2);
    }
    if (this.adj[vert2]) {
      this.adj[vert2].delete(vert1);
    }
  }
  deleteVertex(vert) {
    if (!this.adj[vert]) {
      return false;
    }
    for (let nig of this.adj[vert]) {
      this.deleteEdge(vert, nig);
    }
    delete this.adj[vert];
  }
  dfs(start, visted = new Set()) {
    if (this.adj[start]) {
      visted.add(start);
      console.log(start);
    }
    for (let nig of this.adj[start]) {
      if (!visted.has(nig)) {
        this.dfs(nig, visted);
      }
    }
  }
  bfs(start) {
    let visted = new Set();
    let queue = [start];
    while (queue.length) {
      let currVert = queue.shift();
      for (let nig of this.adj[currVert]) {
        if (!visted.has(nig)) {
          visted.add(nig);
          console.log(currVert);
          queue.push(nig);
        }
      }
    }
  }
  dispaly() {
    for (let vert in this.adj) {
      console.log(vert +"-> " + [...this.adj[vert]]);
    }
  }
}

let g = new Graph()
g.insetEdge("adil", "muhsin");
g.insetEdge("muhsin", "adil");
g.insetEdge("adil", "anees");



g.dispaly();