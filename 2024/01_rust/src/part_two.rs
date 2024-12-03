use std::collections::HashMap;

pub fn solve (input: &[String]) -> i32 {
    let mut first_column: Vec<i32> = Vec::new();
    let mut second_column: HashMap<i32, i32> = HashMap::new();

    for part in input {
        let columns: Vec<&str> = part.split("   ").collect();

        let first: i32 = columns[0].parse().expect("Failed to parse first column");
        let second: i32 = columns[1].parse().expect("Failed to parse second column");

        first_column.push(first);
        *second_column.entry(second).or_insert(0) += 1;
    }

    let mut result: i32 = 0;
    for element in &first_column {
        let value = match second_column.get(&element) { Some(&val) => val, None => 0 };
        result += element * value;
    }

    result
}
