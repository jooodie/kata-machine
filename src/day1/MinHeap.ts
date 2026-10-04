export default class MinHeap {
    public length: number;
    private data: number[];

    constructor() {
        this.data = [];
        this.length = 0;
    }

    insert(value: number): void {

}
    delete(): number {

}
    private heapifyDown(idx: number): void {
        if(idx >= this.length){
            return;
        }
        const lidx = this.leftChild(idx);
        const ridx = this.rightChild(idx);
        let smallest = idx;

        
    }

    private heapifyUp(idx: number): void {
        if (idx === 0){
            return;
        }
        const p = this.parent(idx);
        const parentV = this.data[p];
        const currV = this.data[idx];

        if (currV < parentV) {
            this.data[p] = currV;
            this.data[idx] = parentV;
            this.heapifyUp(p);
        }
    }

    private parent(idx: number):number{
        return Math.floor((idx - 1) / 2);
    }

    private leftChild(idx: number):number{
        return Math.floor(idx * 2 + 1);
    }

    private rightChild(idx: number):number{
        return Math.floor(idx * 2 + 2);
    }
}