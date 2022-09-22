type Node<T> = {
    value: T;
    prev?: Node<T>;
    next?: Node<T>;
};

export default class DoublyLinkedList<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    prepend(item: T): void {
        const appendHead = { value: item } as Node<T>;

        this.length++;
        // edge case
        if (!this.head) {
            this.head = appendHead;
            return;
        }
        // is this order correct?
        this.head.prev = appendHead;
        appendHead.next = this.head;
        this.head = appendHead;
    }
    insertAt(item: T, idx: number): void {}
    append(item: T): void {}
    remove(item: T): T | undefined {}
    get(idx: number): T | undefined {}
    removeAt(idx: number): T | undefined {}
}
