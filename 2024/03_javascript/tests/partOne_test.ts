import { assertEquals } from '@std/assert';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import solve from '../src/partOne.ts';

Deno.test(async function partOne() {
  const exampleInput = await readFile(resolve(import.meta.dirname!, '../inputs/example-part1.txt'), 'utf-8')
  assertEquals(solve(exampleInput), 161);

  const input = await readFile(resolve(import.meta.dirname!, '../inputs/day03.txt'), 'utf-8')
  assertEquals(solve(input), 183380722);
});