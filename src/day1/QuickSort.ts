function qs(arr: number[], low: number, hi: number): void {
    if (low >= hi) return;

    // creating a pivot
    const pivotIdx = partition(arr, low, hi);
    qs(arr, low, pivotIdx - 1);
    qs(arr, pivotIdx + 1, hi);
}

function partition(arr: number[], low: number, hi: number): number {
    const pivot = arr[hi];
    let idx = low - 1;

    for (let i = low; i < hi; ++i) {
        // lost here
        if (arr[i] <= pivot) {
            idx++;
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }
    ++idx;
    arr[hi] = arr[idx];
    arr[idx] = pivot;
    return idx;
}

export default function quick_sort(arr: number[]): void {
    qs(arr, 0, arr.length - 1);
}

quick_sort([2, 3, 1, 0, 4, 8, 7, 6, 5]);
