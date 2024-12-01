pub fn solve (input: &[String]) -> i32 {
    let mut first_column: Vec<i32> = Vec::new();
    let mut second_column: Vec<i32> = Vec::new();

    for part in input {
        let columns: Vec<&str> = part.split("   ").collect();

        let first: i32 = columns[0].parse().expect("Failed to parse first column");
        let second: i32 = columns[1].parse().expect("Failed to parse second column");

        first_column.push(first);
        second_column.push(second);
    }

    first_column.sort();
    second_column.sort();

    let mut result: i32 = 0;
    let n: usize = input.len();
    for i in 0..n {
        result += (first_column[i] - second_column[i]).abs();
    }

    result
}
