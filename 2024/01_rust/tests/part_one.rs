#[cfg(test)]
mod tests {
    use one::*;

    #[test]
    fn test_day_one_part_one() {
        let example_input = utils::read_input("inputs/example.txt").expect("File failed to read :(");
        let input = utils::read_input("inputs/day01.txt").expect("File failed to read :(");

        let example_part1 = part_one::solve(&example_input);
        assert_eq!(example_part1, 11);

        let part1 = part_one::solve(&input);
        assert_eq!(part1, 936063);
    }
}
