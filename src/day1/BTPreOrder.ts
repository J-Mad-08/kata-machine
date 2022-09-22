function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) return path;
    // recurse
    // pre
    path.push(curr.value);
    // in order place
    walk(curr.left, path);
    walk(curr.right, path);
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
