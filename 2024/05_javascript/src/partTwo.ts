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
    if (reorder(rules, line)) count += line[Math.floor(line.length / 2)];
  }

  return count;
}

function reorder(rules: Map<number, number[]>, line: number[]): boolean {
  let hasModified = false;
  let hasReorder: boolean;

  do {
    const seen = new Set();
    hasReorder = false;
    for (let idx = 0; idx < line.length; ++idx) {
      const item = line[idx];

      const rule = rules.get(item);
      const hasFailed = rule ? rule.some((before) => seen.has(before)) : false;

      if (hasFailed) {
        hasReorder = true;
        hasModified = true;
        if (idx === 0) throw new Error('Inconceivable!');
        line[idx] = line[idx - 1];
        line[idx - 1] = item;
      }
      seen.add(item);
    }
  } while (hasReorder);
  return hasModified;
}