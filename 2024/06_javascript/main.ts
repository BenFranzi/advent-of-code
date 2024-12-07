import { readFile } from 'node:fs/promises';
import { resolve } from 'node:path';
import partOneSolve from './src/partOne.ts';
import partTwoSolve from './src/partTwo.ts';

async function main() {
  console.log('Welcome to Day Six! 🎄');

  const exampleInput = await readFile(resolve(import.meta.dirname!, 'inputs/example.txt'), 'utf-8');
  const input = await readFile(resolve(import.meta.dirname!, 'inputs/day06.txt'), 'utf-8');

  const examplePart1 = partOneSolve(exampleInput);
  const part1 = partOneSolve(input);

  console.log(`Part 1: Example -> ${examplePart1}, Solution -> ${part1}`);

  const examplePart2 = partTwoSolve(exampleInput);
  const part2 = partTwoSolve(input);

  console.log(`Part 2: Example -> ${examplePart2}, Solution -> ${part2}`);
}
main();
