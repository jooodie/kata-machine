// breadth-first search, looking to see if a number exists in the tree

export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const q: (BinaryNode<number> | null)[] = [head];

    while (q.length){
        
        const curr = q.shift() as BinaryNode<number> | undefined | null;
        if(!curr){
            continue
        }

        //search
        if(curr.value === needle){
            return true;
        }

        q.push(curr.left);
        q.push(curr.right);
    }

    return false;
}