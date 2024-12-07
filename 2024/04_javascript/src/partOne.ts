
const FORWARD = 'XMAS';
const BACKWARD = 'SAMX';
const words = [FORWARD, BACKWARD];
const starters = words.map(word => word[0]);

class Grid {
  private readonly grid: string[][];
  public readonly rows: number;
  public readonly cols: number;
  public readonly diagonalRows: number;

  private x: number;
  private y: number;

  constructor(input: string) {
    this.x = 0;
    this.y = 0;
    this.grid = input
      .split('\n')
      .map(item => item.split(''));
    this.rows = this.grid.length;
    this.cols = this.grid[0].length;
    this.diagonalRows = this.rows + this.cols - 1;
  }

  move(x?: number, y?: number): string | undefined {
    if (x != null) this.x += x;
    if (y != null) this.y += y;

    return this.get(this.x, this.y);
  }

  peek(x?: number, y?: number): string | undefined {
    return this.get(
      this.x + (x != null ? x : 0),
      this.y + (y != null ? y : 0),
    );
  }

  set(x?: number, y?: number): string | undefined {
    if (x != null) this.x = x;
    if (y != null) this.y = y;

    return this.get(this.x, this.y);
  }

  current() {
    return this.get(this.x, this.y);
  }

  get(x: number, y: number): string | undefined {
    if (x < 0 || x >= this.cols || y < 0 || y >= this.rows) return undefined;

    return this.grid[y][x];
  }
}

const DIRECTIONS = [
  [1, 0],
  [0, 1],
  [1,-1],
  [-1,1]
]

export default function solve(input: string): number {
  const grid = new Grid(input);
  let count = 0;

  // Col
  for (const direction of DIRECTIONS) {
    const [x, y] = direction;

    while (grid.peek(x, y)) {
      const matchIndex = starters.findIndex(char => char === grid.current());
      if (matchIndex !== -1) {
        const match = words[matchIndex];
        let i = 0;
        while(i < match.length && grid.peek(i * x, i * y) === match[i]) ++i;
        if (i === match.length) ++count;
      }

      grid.move(x, y);
    }

    grid.set(0, 0);

    const minu = (a: number, b: number) => (a < b) ? a : b;

    // There will be ROW+COL-1 lines
    // in the output
    for (let line = 1; line <= grid.diagonalRows; ++line) {
      let level = '';

      /* Get column index of the first element
           in this line of output.
           The index is 0 for first ROW lines and
           line - ROW for remaining lines  */
      const startCol = Math.max(0, line - grid.rows);

      /* Get count of elements in this line. The
           count of elements is equal to minimum of
           line number, COL-start_col and ROW */
      const count = Math.min(line, (grid.cols - startCol), grid.rows);

      /* Print elements of this line */
      for (let j = 0; j < count; ++j) {
        level += grid.get(minu(grid.rows, line) - j - 1, startCol + j);
      }

      console.log(level);
    }
  }


  //
  // // Top Left to Bottom Right
  // while (grid.peek(1, 1)) {
  //   if (grid.current() === FORWARD[0]) {
  //     let i = 0;
  //     while(i < FORWARD.length && grid.peek(i, i) === FORWARD[i]) ++i;
  //     if (i === FORWARD.length) ++count;
  //   } else if (grid.current() === BACKWARD[0]) {
  //     let i = 0;
  //     while(i < BACKWARD.length && grid.peek(i, i) === BACKWARD[i]) ++i;
  //     if (i === BACKWARD.length) ++count;
  //   }
  //
  //   grid.move(, 1);
  // }

  /*
  1  2  3  4
  5  6  7  8
  9  0  1  2
  3  4  5  6

   9     6       3
  2,0 - 1, 1 - 0, 2

  3 0 7 4
  0,3 - 1,2 - 2,1 - 3,0

   */

  grid.set(0, 0);

  // Top right to Bottom left

  return count;
}

/*
while (grid.peek(1, 0)) {
    if (grid.current() === FORWARD[0]) {
      let i = 0;
      while(i < FORWARD.length && grid.peek(i, 0) === FORWARD[i]) ++i;
      if (i === FORWARD.length) ++count;
    } else if (grid.current() === BACKWARD[0]) {
      let i = 0;
      while(i < BACKWARD.length && grid.peek(i, 0) === BACKWARD[i]) ++i;
      if (i === BACKWARD.length) ++count;
    }

    grid.move(1, 0);
  }
 */