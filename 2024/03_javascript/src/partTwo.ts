const regex = /(?<do>do)\(\)|(?<dont>don't)\(\)|(?<mul>mul)\((?<first>\d{1,3}),(?<second>\d{1,3})\)/g;

function getMulPairs(input: string): [number, number][] {
  const matches: [number, number][] = [];
  let match: any;

  let isActive = true;

  while ((match = regex.exec(input)) !== null) {
    if (match!.groups!.do) {
      isActive = true;
    } else if (match!.groups!.dont) {
      isActive = false;
    } else if (match!.groups!.mul && isActive) {
      matches.push([match!.groups!.first, match!.groups!.second]);
    }
  }

  return matches;
}

export default function solve(input: string): number {
  return getMulPairs(input).reduce((acc, [first, second]) => acc + first * second, 0);
}