type Node<T> = {
    val: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;


    constructor() {
        this.length = 0;
        this.head = undefined;
        this.tail = undefined;
    }

    prepend(item: T): void {
        // 1. 每次呼叫 prepend，就根據當前傳入的 item 造一顆新節點
        const node: Node<T> = { val: item, prev: undefined, next: undefined};
        this.length++;

        // 2. 如果本來是空的：它同時是 head 也是 tail
        if(!this.head){
            this.tail = this.head = node;
            return;
        }

        // 3. 如果不是空的，則將新節點插入到最前面
        this.head.prev = node; 
        node.next = this.head; 
        this.head = node;
        `
        // 教科書常見慣性：
        newNode.next = this.head; // 延續單向串列的習慣先連新節點
        this.head.prev = newNode;
        this.head = newNode;
        `
    }

    insertAt(item: T, idx: number): void {
        if(idx <0 || idx>this.length )return;

        if (idx === 0 ){
            this.prepend(item);
            return;
        }
        if(idx === this.length){
            this.append(item);
            return;
        }
        // 建立新節點
        const node: Node<T> = { val: item, prev: undefined, next: undefined };
        
        // 走訪到目標位置
        let curr = this.head;
        for(let i = 0; i < idx && curr; i++){
            curr = curr.next;
        }
        
        if(!curr) return; // TS 安全防護

        //先利用舊指標（curr.prev）把新節點接好，最後一步再去改寫舊指標。
        node.next = curr;           // 1. 新節點往後抓 curr
        node.prev = curr.prev;      // 2. 先把 curr 原本的前任（A）抄給 node.prev
        if (curr.prev){ 
            curr.prev.next = node;  // 3. 讓前任（A）往前抓住新節點
        }
        curr.prev = node;           // 4. 最後再讓 curr 往前抓住新節點

        this.length++;
        }

    append(item: T): void {
        const node: Node<T> = { val: item, prev: undefined, next: undefined};
        this.length++;

        // 2. 如果本來是空的：它同時是 head 也是 tail
        if(!this.tail){
            this.tail = this.head = node;
            return;
        }

        this.tail.next = node;
        node.prev = this.tail;
        this.tail = node;
    }

    remove(item: T): T | undefined {
        let curr = this.head;
        while(curr && curr.val !== item){
            curr = curr.next;
        }
        // no found
        if(!curr) return undefined;
        // 找到後呼叫統一的節點拔除邏輯
        return this.removeNode(curr);
    }

    get(idx: number): T | undefined {
        // 1. 邊界防呆：索引小於 0 或超出長度範圍（包含串列為空時 length 為 0）直接返回 undefined
        if(idx < 0 || idx >= this.length) return;

        // 2. 建立走訪指標，起點設在 head
        let curr = this.head;

        // 3. 往後跳躍 idx 次，抵達目標節點位置
        // （加上 && curr 作為安全氣囊，防止指標意外為空時讀取 next 報錯）
        for(let i = 0; i < idx && curr; i++){
            curr = curr.next;
        }
        // 4. 回傳目標節點的值；若找不到則透過可選串連 (?.) 安全回傳 undefined
        return curr?.val;
    }
    removeAt(idx: number): T | undefined {

        if(idx < 0 || idx >= this.length) return;

        let curr = this.head;
        for(let i = 0; i < idx && curr; i++){
            curr = curr.next;
        }
        if(!curr) return undefined; // TS 安全防護

        return this.removeNode(curr); // 呼叫統一的節點拔除邏輯
    }
    /**
     * 私有工具方法：拔除指定節點並更新前後指標
     */
    private removeNode(node: Node<T>): T {

        this.length--;
        
        // 1. 如果扣完長度剛好變 0：代表原本只有這 1 顆節點！
        // 直接把頭尾清空，收工！完全不用管指標怎麼接！
        if (this.length === 0) {
            this.head = undefined;
            this.tail = undefined;
        }
        // 2. 不是最後一顆，那就讓前後重新牽手
        if (node.prev) node.prev.next = node.next;
        if (node.next) node.next.prev = node.prev;

        // 3. 處理頭尾邊界
        if (node === this.head) this.head = node.next;
        if (node === this.tail) this.tail = node.prev;

        // 4. 清理被拔除節點的指標，防止記憶體殘留引用
        node.prev = undefined;
        node.next = undefined;
        return node.val;
    }
}