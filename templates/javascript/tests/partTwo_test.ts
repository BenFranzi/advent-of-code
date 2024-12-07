import { assertEquals } from '@std/assert';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import solve from '../src/partTwo.ts';

Deno.test(async function partTwo() {
  const exampleInput = await readFile(resolve(import.meta.dirname!, '../inputs/example.txt'), 'utf-8')
  assertEquals(solve(exampleInput), 2);

  const input = await readFile(resolve(import.meta.dirname!, '../inputs/day{{__number__}}.txt'), 'utf-8')
  assertEquals(solve(input), 2);
});