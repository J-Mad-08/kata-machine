export default function two_crystal_balls(breaks: boolean[]): number {
    let jumpAmt = Math.floor(Math.sqrt(breaks.length)),
        i = jumpAmt;

    // inc by jumpAmt until break
    for (; i < breaks.length; i += jumpAmt) {
        if (breaks[i]) break;
    }

    //go back by jumpAmt
    i -= jumpAmt;
    //linear search for break until jumpAmt
    for (let j = 0; j < jumpAmt && i < breaks.length; ++j, ++i) {
        if (breaks[i]) return i;
    }
    return -1;
}
