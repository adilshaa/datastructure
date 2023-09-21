class Graph {
  constructor() {
    this.adjucencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjucencyList[vertex]) {
      this.adjucencyList[vertex] = new Set();
    }
  }

  addEdge(vertex1, vertex2) {
    if (!this.adjucencyList[vertex1]) {
      this.addVertex(vertex1);
    }
    if (!this.adjucencyList[vertex2]) {
      this.addVertex(vertex2);
    }
    this.adjucencyList[vertex1].add(vertex2);
    this.adjucencyList[vertex2].add(vertex1);
  }
  hasEdge(vertex1, vertex2) {
    return (
      this.adjucencyList[vertex1].has(vertex2) &&
      this.adjucencyList[vertex2].has(vertex1)
    );
  }

  display() {
    for (let vertex in this.adjucencyList) {
      console.log(vertex + " -> " + [...this.adjucencyList[vertex]]);
    }
  }
  
  
  removeEdge(vertex1, vertex2) {
    this.adjucencyList[vertex1].delete(vertex2);
    this.adjucencyList[vertex2].delete(vertex1);
  }

  removeVertex(vertex) {
    if (!this.adjucencyList[vertex]) {
      return;
    }
    for (let adjusentVertex of this.adjucencyList[vertex]) {
      this.removeEdge(vertex, adjusentVertex);
    }
    delete this.adjucencyList[vertex];
  }
  dfs(startVertex, visited = new Set()) {
    visited.add(startVertex);
    console.log(startVertex);

    for (const neighbor of this.adjacencyList[startVertex]) {
      if (!visited.has(neighbor)) {
        this.dfs(neighbor, visited);
      }
    }
  }
  
  bfs(startVertex) {
    const queue = [startVertex];
    const visited = new Set();

    visited.add(startVertex);

    while (queue.length) {
      const currentVertex = queue.shift();
      console.log(currentVertex);

      for (const neighbor of this.adjacencyList[currentVertex]) {
        if (!visited.has(neighbor)) {
          visited.add(neighbor);
          queue.push(neighbor);
        }
      }
    }
  }
}

const graph = new Graph();

graph.addVertex("A");
graph.addVertex("B");
graph.addVertex("C");
graph.addEdge("A", "B");
graph.addEdge("B", "C");
console.log(graph.hasEdge("A", "B"));
// graph.display()

// graph.removeEdge("A" ,"B")
// graph.removeVertex("A" , "C")
graph.display();
