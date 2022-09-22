function walk(curr: BinaryNode<number> | null, path: number[]): number[] {
    if (!curr) return path;
    // recurse
    // pre
    walk(curr.left, path);
    // in order place
    path.push(curr.value);
    // post
    walk(curr.right, path);
    return path;
}

export default function in_order_search(head: BinaryNode<number>): number[] {
    return walk(head, []);
}
