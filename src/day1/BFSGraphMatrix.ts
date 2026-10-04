export default function bfs(
    graph: WeightedAdjacencyMatrix, 
    source: number, 
    needle: number): number[] | null {

    const seen = new Array(graph.length).fill(false);
    const prev = new Array(graph.length).fill(-1);

    seen[source] = true; //將起點標記為已造訪
    const q = [source]; //將起點放入佇列

    do{
        const curr = q.shift() as number; //取出佇列的第一個元素
        if(curr === needle){
            break;
        }
        seen[curr] = true; //將當前節點標記為已造訪

        const adjs = graph[curr];
        for(let i = 0; i < adjs.length; i++){
        if(adjs[i] === 0){
                continue;
            }
            if(seen[i]){
                continue;
            } 
            seen[i] = true;
            prev[i] = curr;
            q.push(i);
        }
        seen[curr] = true;

    } while(q.length > 0);

    if(prev[needle] === -1){
        return null; // no path found to the endpoint
    }

    // build with backtracking
    let curr = needle;
    const out: number[] = [];
    while(curr !== -1){
        out.push(curr);
        curr = prev[curr];
    }
    return [source, ...out.reverse()]; // return the path from source to needle
    // return [source].concat(out.reverse()); 舊式寫法
}
