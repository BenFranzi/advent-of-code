BASE_DIR := ./2024
INPUT_DIRS := $(wildcard $(BASE_DIR)/*/inputs)
TXT_FILES := $(foreach dir,$(INPUT_DIRS),$(wildcard $(dir)/*.txt))
GPG_FILES := $(foreach dir,$(INPUT_DIRS),$(wildcard $(dir)/*.gpg))

.PHONY: all encrypt decrypt clean help

encrypt: $(TXT_FILES)
	@echo "Encrypting"
	@if [ -z "$(PASSPHRASE)" ]; then \
		echo "Error: PASSPHRASE is not set. Use 'make encrypt PASSPHRASE=<your-passphrase>'."; \
		exit 1; \
	fi
	@for file in $^; do \
		output_file="$$file.gpg"; \
		if [ -e "$$output_file" ]; then \
			echo "Skipping $$file: Destination file $$output_file already exists."; \
		else \
			gpg --batch --yes --passphrase "$(PASSPHRASE)" --symmetric --cipher-algo AES256 "$$file" && rm "$$file"; \
			echo "Encrypted $$file to $$output_file."; \
		fi; \
	done
	@echo "Encryption complete 🔒"

decrypt: $(GPG_FILES)
	@echo "Decrypting"
	@if [ -z "$(PASSPHRASE)" ]; then \
		echo "Error: PASSPHRASE is not set. Use 'make decrypt PASSPHRASE=<your-passphrase>'."; \
		exit 1; \
	fi
	@for file in $^; do \
		output_file="$${file%.gpg}"; \
		if [ -e "$$output_file" ]; then \
			echo "Skipping $$file: Destination file $$output_file already exists."; \
		else \
			gpg --batch --yes --passphrase "$(PASSPHRASE)" --decrypt "$$file" > "$$output_file"; \
			echo "Decrypted $$file to $$output_file."; \
		fi; \
	done
	@echo "Decryption complete 🔓"

clean:
	@echo "Cleaning up unencrypted .txt files..."
	@find $(BASE_DIR) -type f -name "*.txt" ! -name "*.gpg" -exec rm {} \;
	@echo "Cleanup complete."

help:
	@echo "Available commands:"
	@echo "  make encrypt PASSPHRASE=<your-passphrase> - Encrypt all .txt files."
	@echo "  make decrypt PASSPHRASE=<your-passphrase> - Decrypt all .gpg files."
	@echo "  make clean - Remove all .txt files under the base directory."
