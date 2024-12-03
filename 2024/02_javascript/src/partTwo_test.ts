import { assertEquals } from '@std/assert';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import solve from './partTwo.ts';

Deno.test(async function partTwo() {
  const exampleInput = await readFile(resolve(import.meta.dirname!, '../inputs/example.txt'), 'utf-8')
  assertEquals(solve(exampleInput), 4);

  assertEquals(solve('10 8'), 1);
  assertEquals(solve('10 8 6 10'), 1);
  assertEquals(solve('10 8 6 10 5'), 1);
  assertEquals(solve('10 8 6 10 1'), 0);
  assertEquals(solve('2 8 6 4'), 1);
  assertEquals(solve('8 2 3 4'), 1);
  assertEquals(solve('1 8 3 4'), 1);
  assertEquals(solve('1 2 8 4'), 1);
  assertEquals(solve('1 1 2 3 4 5'), 1);
  assertEquals(solve('1 2 3 4 5 5'), 1);
  assertEquals(solve('5 1 2 3 4 5'), 1);
  assertEquals(solve('1 4 3 2 1'), 1);
  assertEquals(solve('1 6 7 8 9'), 1);
  assertEquals(solve('1 2 3 4 3'), 1);
  assertEquals(solve('9 8 7 6 7'), 1);
  assertEquals(solve('7 10 8 10 11'), 1);
  assertEquals(solve('48 46 47 49 51 54 56'), 1);
  assertEquals(solve('29 28 27 25 26 25 22 20'), 1);

  const input = await readFile(resolve(import.meta.dirname!, '../inputs/day02.txt'), 'utf-8')
  assertEquals(solve(input), 520);
});