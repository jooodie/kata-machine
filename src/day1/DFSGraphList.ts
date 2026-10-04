function walk(
    graph: WeightedAdjacencyList, 
    curr: number, 
    needle: number, 
    seen: boolean[], 
    path: number[]): boolean {

    //base case
    if(curr === needle){
        return true;
    }
    if(seen[curr]){
        return false;
    }

    seen[curr] = true;

    // recurse
    //pre
    path.push(curr);

    //recurse
    const list = grap h[curr];
    //post
    path.pop();

export default function dfs(
    graph: WeightedAdjacencyList, 
    source: number, 
    needle: number): number[] | null {

}