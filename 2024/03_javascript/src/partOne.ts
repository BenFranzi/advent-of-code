const regex = /mul\((?<first>\d{1,3}),(?<second>\d{1,3})\)/g;

function getMulPairs(input: string): [number, number][] {
  const matches: [number, number][] = [];
  let match: any;
  while ((match = regex.exec(input)) !== null) matches.push([match.groups!.first, match!.groups!.second]);

  return matches;
}

export default function solve(input: string): number {
  return getMulPairs(input).reduce((acc, [first, second]) => acc + first * second, 0);
}