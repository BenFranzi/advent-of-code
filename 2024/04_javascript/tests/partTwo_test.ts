import { assertEquals } from '@std/assert';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import solve from '../src/partTwo.ts';

const c = (input: string) => input.trim().split('\n').map(line => line.trim()).join('\n');

Deno.test(async function partTwo() {
  const simple = `
    M.S
    .A.
    M.S`;

  assertEquals(solve(c(simple)), 1);

  const exampleInput = await readFile(resolve(import.meta.dirname!, '../inputs/example.txt'), 'utf-8')
  assertEquals(solve(exampleInput), 9);

  const input = await readFile(resolve(import.meta.dirname!, '../inputs/day04.txt'), 'utf-8')
  assertEquals(solve(input), 0);
});