export default function solve(input: string): number {
  const [rawRules, rawLines] = input.split("\n\n");

  const rules = rawRules
    .split("\n")
    .reduce((items: Map<number, number[]>, row: string) => {
      const [first, second] = row.split("|").map(Number);

      const elements = items.get(first) || [];
      elements.push(second);
      items.set(first, elements);
      return items;
    }, new Map<number, number[]>());

  let count = 0;
  const lines = rawLines.split("\n")
    .map((line: string) =>
      line.split(",")
        .map(Number)
    );

  for (const line of lines) {
    if (isValid(rules, line)) count += line[Math.floor(line.length / 2)];
  }

  return count;
}

function isValid(rules: Map<number, number[]>, line: number[]): boolean {
  const seen = new Set();

  for (const item of line) {
    const rule = rules.get(item);
    const hasFailed = rule ? rule.some((before) => seen.has(before)): false;
    if (hasFailed) return false;
    seen.add(item);
  }

  return true;
}