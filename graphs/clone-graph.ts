var cloneGraph = function(node) {
    if (node === null) return null;
    let visited = {};
    const helper = (node) => {
        const currNode = {
            val : node.val,
            neighbors: []
        }
        visited[node.val] = currNode;
        node.neighbors.forEach(child => {
            if (visited[child.val]){
             currNode.neighbors.push(visited[child.val]);
            } else {
                currNode.neighbors.push(helper(child));                
            } 
        });
        
        return currNode;
    };

    
    return helper(node);
};