export default function bfs(head: BinaryNode<number>, needle: number): boolean {
    const headNode: (BinaryNode<number> | null)[] = [head];

    while (headNode.length) {
        const curr = headNode.shift() as BinaryNode<number> | null | undefined;
        if (curr?.value === needle) return true;
        if (curr?.left) headNode.push(curr.left);
        if (curr?.right) headNode.push(curr.right);
    }
    return false;
}
