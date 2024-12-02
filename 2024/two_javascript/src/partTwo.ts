export default function solve(input: string): number {
  let count = 0;

  for (const line of input.split('\n')) {
    const values = line.split(' ').map(Number);

    if (hack(values)) ++count;
  }

  return count;
}

function hack(values: number[]): boolean {
  if (!isSafe(values, 0)) {
    for (let i = 0; i < values.length; ++i) {
      if (isSafe(values.toSpliced(i, 1), 0)) {
        return true;
      }
    }
  } else {
    return true;
  }

  return false;
}

function isUnsafe(a: number, b: number, isIncreasing: boolean): boolean {
  const diff = b - a;

  return isIncreasing && diff < 0
    || !isIncreasing && diff > 0
    || Math.abs(diff) > 3
    || Math.abs(diff) === 0;
}

function isSafe(values: number[], substitutions: number): boolean {
  const isIncreasing = values[0] < values[1];

  for (let i = 1; i < values.length ; ++i) {
    if (isUnsafe(values[i - 1], values[i], isIncreasing)) {
      if (substitutions > 0) {

        const left = values.toSpliced(i - 1, 1);
        const right = values.toSpliced(i, 1);

        return isSafe(left, 0) || isSafe(right, 0);
      } else {
        return false;
      }
    }
  }

  return true;
}