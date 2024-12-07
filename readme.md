# 🎄 Advent of Code 🎄

Welcome to my Advent of Code repo! This is where I store my solutions for the annual coding 
challenge.

[Advent of Code](https://adventofcode.com/)

### [Year 2024](https://adventofcode.com/2024)
- Day One
  - [Rust](https://github.com/BenFranzi/advent-of-code/tree/main/2024/01_rust)
    - [Part One](https://github.com/BenFranzi/advent-of-code/blob/main/2024/01_rust/src/part_one.rs)
    - [Part Two](https://github.com/BenFranzi/advent-of-code/blob/main/2024/01_rust/src/part_two.rs)
- Day Two
  - [Javascript](https://github.com/BenFranzi/advent-of-code/tree/main/2024/02_javascript)
    - [Part One](https://github.com/BenFranzi/advent-of-code/blob/main/2024/02_javascript/src/partOne.ts)
    - [Part Two](https://github.com/BenFranzi/advent-of-code/blob/main/2024/02_javascript/src/partTwo.ts)
- Day Three
  - [Javascript](https://github.com/BenFranzi/advent-of-code/tree/main/2024/03_javascript)
    - [Part One](https://github.com/BenFranzi/advent-of-code/blob/main/2024/03_javascript/src/partOne.ts)
    - [Part Two](https://github.com/BenFranzi/advent-of-code/blob/main/2024/03_javascript/src/partTwo.ts)
- Day Four
  - [Javascript](https://github.com/BenFranzi/advent-of-code/tree/main/2024/04_javascript)
    - [Part One](https://github.com/BenFranzi/advent-of-code/blob/main/2024/04_javascript/src/partOne.ts)
    - [Part Two](https://github.com/BenFranzi/advent-of-code/blob/main/2024/04_javascript/src/partTwo.ts)
- Day Five
  - [Javascript](https://github.com/BenFranzi/advent-of-code/tree/main/2024/05_javascript)
    - [Part One](https://github.com/BenFranzi/advent-of-code/blob/main/2024/05_javascript/src/partOne.ts)
    - [Part Two](https://github.com/BenFranzi/advent-of-code/blob/main/2024/05_javascript/src/partTwo.ts)


## How to run the solutions

For every type of project in this repository, here is how to start it. These should be sensible enough, but 
I've added them here just in case I try something really strange and need to remember how it goes.

### Rust
To run the main
> `cargo run`

to run the tests
> `cargo test`

### Typescript
To run the main
> `deno run start`

to run the tests
> `deno run test`

## How to decrypt/encrypt the inputs

To protect the contents of the inputs (as per the [terms of use](https://adventofcode.com/2024/about)) I've encrypted them in this 
project. To decrypt them run the command.

> `make decrypt PASSPHRASE=<my-super-secret-key>`

To encrypt them all run
> `make encrypt PASSPHRASE=<my-super-secret-key>`

To clean up the .txt files
> `make clean`

For for a single file encrypt
> `gpg --yes --passphrase "<my-super-secret-key>" --symmetric --cipher-algo AES256 "<file>"`

For for a single file decrypt
> `gpg --yes --passphrase "<my-super-secret-key>" --decrypt "<file>"`

## How to generate a project template

> `make generate TEMPLATE_VERSION=<template> OUTPUT_DIR=./<year>/<padded_number>_<template> NUMBER=<number> WORD_NUMBER=<word_number>`

> `make generate TEMPLATE_VERSION=javascript OUTPUT_DIR=./2024/06_javascript NUMBER=6 WORD_NUMBER=Six`

---
> Disclaimer: I tried my best to complete these problems day of; after a meeting packed day, after helping a friend move houses, after work drinks, etc. These solutions are not perfect but I had a lot of fun doing them. I recommend for the wisest approaches to the problems to look elsewhere, there's a tonne of amazing work done by the community. In saying that I appreciate you stopping by ❤️
