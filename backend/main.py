
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

def is_dag(nodes, edges):
    graph = {n["id"]: [] for n in nodes}
    for e in edges:
        graph[e["source"]].append(e["target"])

    visited, stack = set(), set()

    def dfs(node):
        if node in stack:
            return False
        if node in visited:
            return True
        visited.add(node)
        stack.add(node)
        for nxt in graph[node]:
            if not dfs(nxt):
                return False
        stack.remove(node)
        return True

    return all(dfs(n) for n in graph)

@app.post("/pipelines/parse")
def parse_pipeline(data: dict):
    nodes = data.get("nodes", [])
    edges = data.get("edges", [])

    return {
        "num_nodes": len(nodes),
        "num_edges": len(edges),
        "is_dag": is_dag(nodes, edges)
    }
