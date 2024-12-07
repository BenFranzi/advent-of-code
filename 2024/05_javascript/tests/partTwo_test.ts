import { assertEquals } from '@std/assert';
import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import solve from '../src/partTwo.ts';

Deno.test(async function partTwo() {
  const exampleInput = await readFile(resolve(import.meta.dirname!, '../inputs/example.txt'), 'utf-8')

  const [exampleRules] = exampleInput.split('\n\n');
  assertEquals(solve(`${exampleRules}\n\n75,47,61,53,29`), 0);
  assertEquals(solve(`${exampleRules}\n\n97,61,53,29,13`), 0);
  assertEquals(solve(`${exampleRules}\n\n75,29,13`), 0);
  assertEquals(solve(`${exampleRules}\n\n75,97,47,61,53`), 47);
  assertEquals(solve(`${exampleRules}\n\n61,13,29`), 29);
  assertEquals(solve(`${exampleRules}\n\n97,13,75,29,47`), 47);

  assertEquals(solve(exampleInput), 123);

  const input = await readFile(resolve(import.meta.dirname!, '../inputs/day05.txt'), 'utf-8')
  assertEquals(solve(input), 4507);
});