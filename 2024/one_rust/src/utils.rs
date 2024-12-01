use std::fs::File;
use std::io::{self, BufRead};

pub fn read_input(filename: &str) -> io::Result<Vec<String>> {
    let file = File::open(filename)?;
    let reader = io::BufReader::new(file);
    Ok(reader.lines().filter_map(Result::ok).collect())
}

