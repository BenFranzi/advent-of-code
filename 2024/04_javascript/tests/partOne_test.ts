import { assertEquals } from '@std/assert';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import solve from '../src/partOne.ts';

const c = (input: string) => input.trim().split('\n').map(line => line.trim()).join('\n');

Deno.test(async function partOne() {
  assertEquals(solve('XMASAMXAMM'), 2);
  assertEquals(solve('X\nM\nA\nS\nA\nM\nX\nA\nM\nM'), 2);

  const perpendicular = `
    XMASAMX
    M......
    A......
    S......
    A......
    M......
    X......`;
  assertEquals(solve(c(perpendicular)), 4);

  const diagonals = `
    .........
    .X.....X.
    ..M...M..
    ...A.A...
    ....S....
    ...A.A...
    ..M...M..
    .X.....X.
    .........`;
  assertEquals(solve(c(diagonals)), 4);

  // const exampleInput = await readFile(resolve(import.meta.dirname!, '../inputs/example.txt'), 'utf-8')
  // assertEquals(solve(exampleInput), 18);

  // const input = await readFile(resolve(import.meta.dirname!, '../inputs/day04.txt'), 'utf-8')
  // assertEquals(solve(input), 183380722);
});