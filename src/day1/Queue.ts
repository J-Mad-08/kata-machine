// A Queue is a Node based structure so need a node type definition
type Node<T> = {
    value: T;
    next?: Node<T>;
};

export default class Queue<T> {
    public length: number;
    private head?: Node<T>;
    private tail?: Node<T>;

    constructor() {
        (this.head = this.tail = undefined), (this.length = 0);
    }

    enqueue(item: T): void {
        // add item to queue at back
        // create a node to add to the queue
        const newNodeAtTail = { value: item } as Node<T>;
        // if there is no tail, then there is no head
        if (!this.tail) {
            this.tail = this.head = newNodeAtTail;
        } else {
            this.tail.next = newNodeAtTail;
            this.tail = newNodeAtTail;
        }
        ++this.length;
    }
    deque(): T | undefined {
        // remove from back
        if (!this.head) return undefined;

        // reassign tail, --this.length and return tailNode.value
        const head = this.head;
        this.head = this.head.next;

        --this.length;
        //  remove the head
        if (this.length === 0) {
            this.tail = undefined;
        }
        return head?.value;
    }
    peek(): T | undefined {
        // look at head
        return this.head?.value;
    }
}
