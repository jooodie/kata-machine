type Node<T> ={
    value: T,
    next?: Node<T>,
}

export default class SinglyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        const node: Node<T> = { value: item };
        this.length++;
        
        if(!this.length){
            this.head = node;
            return;
        }
        node.next = this.head;
        this.head = node;
    }

    insertAt(item: T, idx: number): void {
        if (idx < 0 || idx > this.length) {
            throw new Error('Insert out of bounds');
        }

        if(idx === 0){
            this.prepend(item);
            return;
        }

        if(idx === this.length){
            this.append(item);
            return;
        }
        this.length++;
        
        let curr = this.head;
        // 走到目標的前一個節點（跳 idx - 1 步）
        for(let i = 0; i < idx - 1 && curr; ++i) {
            curr = curr.next;
        }
        // 將新節點接在中間：node.next 先連到後面，前面再連到 node
        const node: Node<T> = { value: item };
        node.next = curr?.next;
        if (curr) {
            curr.next = node;
        }

    }

    append(item: T): void {
        const node: Node<T> = { value: item };
        this.length++;

        if (!this.head) {
            this.head = node;
            return;
        }
        
        // 從頭出發，走到沒有 next 的那個節點（最後一個節點）
        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = node;
    }

    remove(item: T): T | undefined {
        if(!this.head){
            return undefined;
        }
        
        // 如果剛好是頭節點符合
        if(this.head.value === item){
            return this.removeAt(0);
        }

        // 尋找下一個符合的 item值 的節點
        let curr = this.head;
        while(curr.next && curr.next.value !== item){
            curr = curr.next;
        }

        // 如果找到符合的節點，則刪除它
        if(curr.next){
            this.length--;
            const target = curr.next;
            curr.next = target.next;
            return target.value;
        }

        return undefined;
    }

    get(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length || !this.head) {
            return undefined;
        }

        let curr: Node<T> | undefined = this.head;
        for(let i = 0; i < idx && curr; ++i) {
            curr = curr.next;
        }
        return curr?.value;
    }

    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length || !this.head) {
        return undefined;
        }

        this.length--;

        // 刪除第一個節點
        if (idx === 0) {
            const head = this.head;
            this.head = this.head.next;
            return head.value;
        }

        // 走到要刪除節點的前一個 (idx - 1)
        let curr = this.head;
        for (let i = 0; i < idx - 1 && curr.next; ++i) {
            curr = curr.next;
        }

        const target = curr.next;
        if (!target) {
            return undefined;
        }

        // 跳過目標節點並回傳數值
        curr.next = target.next;
        return target.value;
    }
}