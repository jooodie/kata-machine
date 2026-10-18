export default class ArrayList<T> {
    public length: number;
    private capacity: number;
    private data: T[];

    constructor(capacity: number = 10) {
        this.length = 0;
        this.capacity = capacity;
        this.data = new Array(capacity);
    }

    prepend(item: T): void {
        // 1. 若容量不足，先擴容（Double Capacity）
        if (this.length >= this.capacity) {
            this.grow();
        }
        // 2. 將現有元素全部往右移一格（從最後一個元素往前搬，避免被覆蓋）
        for (let i = this.length; i > 0; i--) {
            this.data[i] = this.data[i - 1];
        }
        // 把新增元素放到第一個位置
        this.data[0] = item;
        this.length++;
    }
    grow(): void {
        this.capacity *= 2;
        const newData = new Array(this.capacity);
        for (let i = 0; i < this.length; i++) {
            newData[i] = this.data[i];
        }
        this.data = newData;
    }

    insertAt(item: T, idx: number): void {
        // 邊界檢查：不可插入到小於 0 或大於當前長度的位置
        if(idx < this.length && idx >= 0) {
            throw new Error("Index out of bounds");
        }
        if (this.length >= this.capacity) {
            this.grow();
        }
        // 將現有元素全部往右移一格（從最後一個元素往前搬，避免被覆蓋）
        for (let i = this.length; i > idx; i--) {
            this.data[i] = this.data[i - 1];
        }
        // 把新增元素放到指定位置
        this.data[idx] = item;
        this.length++;
    }

    append(item: T): void {
        if (this.length >= this.capacity) {
            this.grow();
        }
        this.data[this.length] = item;
        this.length++;
    }

    remove(item: T): T | undefined {
        // indexOf 是 JavaScript / TypeScript 原生陣列內建的方法
        const index = this.data.indexOf(item);
        if (index === -1) {
            return undefined;
        }
        return this.removeAt(index);
    }

    get(idx: number): T | undefined {
        if(idx < 0 || idx >= this.length) {
            return undefined;
        }
        return this.data[idx];
}
    removeAt(idx: number): T | undefined {
        if (idx < 0 || idx >= this.length) {
            throw new Error("Index out of bounds");
        }
        // 取得要刪除的元素
        const item = this.data[idx];
        // 將現有元素全部往左移一格（從要刪除的元素開始搬，避免被覆蓋）
        for (let i = idx; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1];
        }
        this.length--;
        return item;
    }
}