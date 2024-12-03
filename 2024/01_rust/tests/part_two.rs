#[cfg(test)]
mod tests {
    use one::*;

    #[test]
    fn test_day_one_part_two() {
        let example_input = utils::read_input("inputs/example.txt").expect("File failed to read :(");
        let input = utils::read_input("inputs/day01.txt").expect("File failed to read :(");

        let example_part2 = part_two::solve(&example_input);
        assert_eq!(example_part2, 31);

        let part2 = part_two::solve(&input);
        assert_eq!(part2, 23150395);
    }
}
