function walk(
    curr: BinaryNode<number> | null,
    needle: number,
): boolean | undefined {
    if (!curr) return;
    if (curr.value === needle) return true;

    let answer;
    answer = walk(curr.left, needle);
    // in order check
    if (answer == true) return true;
    answer = walk(curr.right, needle);

    return answer == true;
}

export default function dfs(head: BinaryNode<number>, needle: number): boolean {
    let answer = walk(head, needle);
    return answer == true;
}
