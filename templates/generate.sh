#!/bin/bash

if [ "$#" -ne 4 ]; then
  echo "Usage: $0 <template_version> <output_directory> <number> <word> <word_number>"
  exit 1
fi

TEMPLATE_VERSION=$1
OUTPUT_DIR=$2
NUMBER=$3
WORD_NUMBER=$4
TEMPLATES_DIR="templates/$TEMPLATE_VERSION"

if [ ! -d "$TEMPLATES_DIR" ]; then
  echo "Error: Templates directory '$TEMPLATES_DIR' does not exist."
  exit 1
fi

mkdir -p "$OUTPUT_DIR"

pad_number() {
  printf "%02d" "$1"
}

process_files() {
  local INPUT_DIR=$1
  local OUTPUT_DIR=$2

  for TEMPLATE_FILE in "$INPUT_DIR"/*; do
    if [ -d "$TEMPLATE_FILE" ]; then
      local SUBDIR=$(basename "$TEMPLATE_FILE")
      mkdir -p "$OUTPUT_DIR/$SUBDIR"
      process_files "$TEMPLATE_FILE" "$OUTPUT_DIR/$SUBDIR"
    else
      local BASENAME=$(basename "$TEMPLATE_FILE")

      local OUTPUT_FILE="$OUTPUT_DIR/$(echo "$BASENAME" |
        sed "s/{{__number__}}/$(pad_number "$NUMBER")/g" |
        sed "s/{{__PascalCaseNumber__}}/$WORD_NUMBER/g")"

      local CONTENT=$(cat "$TEMPLATE_FILE" |
        sed "s/{{__number__}}/$(pad_number "$NUMBER")/g" |
        sed "s/{{__PascalCaseNumber__}}/$WORD_NUMBER/g")

      echo "$CONTENT" > "$OUTPUT_FILE"

      echo "Generated: $OUTPUT_FILE"
    fi
  done
}

process_files "$TEMPLATES_DIR" "$OUTPUT_DIR"
