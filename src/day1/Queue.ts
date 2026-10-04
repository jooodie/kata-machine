type Node<T> = {
    value: T;
    next?: Node<T>;
}

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
    }

    enqueue(item: T): void {
        const node = { value: item } as Node<T>;
        this.length++;
        if(!this.tail){
            this.head = this.tail = node;
            return;
        } 

        this.tail.next = node;
        this.tail = node;
        
}
    deque(): T | undefined {
        if(!this.head){
            return undefined;
        }

        this.length--;

        const head = this.head;
        this.head = this.head.next;
        
        //free You'll also want to handle the length === 0 case for the tests to pass. Prime covers this in the next lesson:
        if(this.length === 0){
            this.tail = undefined
        }

        head.next = undefined;

        return head.value;

}
    peek(): T | undefined {
        return this.head?.value;
    }
}