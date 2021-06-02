export function toFixed(num: number, fixed: number): number {
  const re = new RegExp('^-?\\d+(?:\.\\d{0,' + (fixed || -1) + '})?');
  const numMatch = num.toString()
    .match(re);
  if (numMatch === undefined || numMatch === null) {
    return 0;
  }
  if (numMatch.length) {
    return Number(numMatch[0]);
  }
  return 0;
}
