import { assertEquals } from '@std/assert';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import solve from '../src/partOne.ts';

Deno.test(async function partOne() {
  const exampleInput = await readFile(resolve(import.meta.dirname!, '../inputs/example.txt'), 'utf-8')
  assertEquals(solve(exampleInput), 143);

  const input = await readFile(resolve(import.meta.dirname!, '../inputs/day05.txt'), 'utf-8')
  assertEquals(solve(input), 5248);
});