class Graph {
  constructor() {
    this.adjusentsList = {};
  }

  addvertex(vertex) {
    if (!this.adjusentsList[vertex]) {
      this.adjusentsList[vertex] = new Set();
    }
  }
  addEdge(vertex1, vertex2) {
    if (!this.adjusentsList[vertex1]) {
      this.addvertex(vertex1);
    }
    if (this.adjusentsList[vertex2]) {
      this.addvertex(vertex2);
    }
    this.adjusentsList[vertex1].add(vertex2);
    this.adjusentsList[vertex2].add(vertex1);
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjusentsList[vertex1].has(vertex2) &&
      this.adjusentsList[vertex2].has(vertex1)
    );
  }
  print() {
    for (let v in this.adjusentsList) {
      console.log(v + "- >" + [...this.adjusentsList[v]]);
    }
  }
  dfs(startVertex) {
    let visited = new Set();
    const dfsHelper = (vertex) => {
      visited.add(vertex);
      console.log(vertex);
      let neighbors = this.graph.get(vertex);
      for (let neighbor of neighbors) {
        if (!visited.has(neighbor)) {
          dfsHelper(neighbor);
        }
      }
    };
    dfsHelper(startVertex);
  }
  bfs(startVertex) {
    let visited = new Set();
    let queue = [];
    visited.add(startVertex);
    queue.push(startVertex);
    while (queue.length >= 0) {
      let vertex = queue.shift();
      console.log(vertex);

      let neighbors = this.graph.get(vertex);
      if (neighbors) {
        for (let neighbor of neighbors) {
          if (!visited.has(neighbor)) {
            visited.add(neighbor);
            queue.push(neighbor);
          }
        }
      }
    }
  }
  deleteVertex(vert) {
    if (!this.adjusentsList[vert]) {
      return false;
    }
    for (let adj of this.adjusentsList[vert]) {
      this.adjusentsList[vert].delete(adj);
    }
  }
}

const graph = new Graph();
graph.addvertex("A");
graph.addvertex("B");

graph.addvertex("A");
graph.addEdge("A", "V");

graph.print();
