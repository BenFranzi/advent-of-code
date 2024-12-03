use one::part_two;
mod utils;
mod part_one;

fn main() {
    println!("Welcome to day one! 🎄");

    let example_input = utils::read_input("inputs/example.txt").expect("File failed to read :(");
    let input = utils::read_input("inputs/day01.txt").expect("File failed to read :(");

    let example_part1 = part_one::solve(&example_input);
    let part1 = part_one::solve(&input);

    println!("Part 1: Example -> {} ~= 11, Solution -> {}", example_part1, part1);

    let example_part2 = part_two::solve(&example_input);
    let part2 = part_two::solve(&input);

    println!("Part 2: Example -> {} ~= 31, Solution -> {}", example_part2, part2);
}
