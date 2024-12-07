const words = new Map([
  ['X', 'XMAS'],
  ['S', 'SAMX'],
]);

export default function solve(input: string) {
  const matrix = input.trim().split('\n').map((item) => item.split(''));
  const rows = matrix.length;
  const columns = matrix[0].length;

  let count = 0;

  function checkMatch(x: number, y: number, dx: number, dy: number, word: string): boolean {
    for (let i = 0; i < word.length; ++i) {
      const nextY = y + dy * i;
      const nextX = x + dx * i;
      if (
        nextY < 0 || nextY >= rows
        || nextX < 0 || nextX >= columns
        || matrix[nextY][nextX] !== word[i]) return false;
    }
    return true;
  }

  for (let y = 0; y < rows; ++y) {
    for (let x = 0; x < columns; ++x) {
      const current = matrix[y][x];
      const word = words.get(current);
      if (!word) continue;

      if (checkMatch(x, y, 1, 0, word)) ++count; // Horizontal
      if (checkMatch(x, y, 0, 1, word)) ++count; // Vertical
      if (checkMatch(x, y, 1, 1, word)) ++count; // Top-Left to Bottom-Right
      if (checkMatch(x, y, -1, 1, word)) ++count; // Top-Right to Bottom-Left
    }
  }

  return count;
}

