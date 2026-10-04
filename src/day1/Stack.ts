type Node<T>={
    value: T,
    prev?: Node<T>,
}

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.head = undefined;
        this.length = 0;
    }

    push(item: T): void {
        const node = {value: item} as Node<T>;

        this.length++;
        if(!this.head){
            this.head = node;
            return;
        }

        node.prev = this.head;
        this.head = node;
}
    pop(): T | undefined {
        if (this.length === 0) {
        return undefined; // 先把空的狀況擋掉
    }

    this.length--;
    const head = this.head as Node<T>;
    
    if (this.length === 0) {
        this.head = undefined;
    } else {
        this.head = head.prev;
    }

    return head.value; // 這裡就完全不用問號，也不會炸掉
}

    peek(): T | undefined {
        return this.head?.value;

}
}