export default function solve(input: string): number {
  let count = 0;

  for (const line of input.split('\n')) {
    if (isSafe(line)) ++count;
  }

  return count;
}

function isSafe(line: string): boolean {
  const values = line.split(' ').map(Number);
  const isIncreasing = values[0] < values[1];

  for (let i = 1; i < values.length ; ++i) {
    const diff = values[i] - values[i - 1];

    if (
      isIncreasing && diff < 0
      || !isIncreasing && diff > 0
      || Math.abs(diff) > 3
      || Math.abs(diff) === 0
    ) {
      return false;
    }
  }

  return true;
}