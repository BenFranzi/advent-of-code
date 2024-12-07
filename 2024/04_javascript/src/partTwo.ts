export default function solve(input: string): number {
  const matrix = input.trim().split('\n').map((item) => item.split(''));
  const rows = matrix.length;
  const columns = matrix[0].length;

  let count = 0;

  function checkMatch(centerX: number, centerY: number): boolean {
    if (
      centerX - 1 < 0
      || centerX + 1 > columns - 1
      || centerY - 1 < 0
      || centerY + 1 > rows - 1
    ) return false;

    const topLeft = matrix[centerY - 1][centerX - 1];
    const topRight = matrix[centerY - 1][centerX + 1];
    const bottomLeft = matrix[centerY + 1][centerX - 1];
    const bottomRight = matrix[centerY + 1][centerX + 1];

    const left = (topLeft === 'S' && bottomRight === 'M') || (topLeft === 'M' && bottomRight === 'S');
    const right = (topRight === 'S' && bottomLeft === 'M') || (topRight === 'M' && bottomLeft === 'S');

    return left && right;
  }

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < columns; x++) {
      if (matrix[y][x] === 'A' && checkMatch(x, y)) ++count;
    }
  }

  return count;
}