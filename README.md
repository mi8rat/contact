# Simple Makefile Project

A basic C project demonstrating Makefile usage.

## Project Structure

```
.
├── Makefile      # Build configuration
├── main.c        # Main program
├── utils.c       # Utility functions
├── utils.h       # Utility headers
└── README.md     # This file
```

## Building

To build the project:

```bash
make
```

Or explicitly:

```bash
make all
```

## Running

To build and run:

```bash
make run
```

## Cleaning

To remove build artifacts:

```bash
make clean
```

## Rebuilding

To clean and rebuild:

```bash
make rebuild
```

## Available Targets

- `all` - Build the project (default target)
- `clean` - Remove object files and executable
- `rebuild` - Clean and rebuild from scratch
- `run` - Build and execute the program
- `help` - Display available targets

## Makefile Features Demonstrated

- **Variables**: `CC`, `CFLAGS`, `TARGET`, `SRCS`, `OBJS`
- **Pattern Rules**: `%.o: %.c` for compiling C files
- **Automatic Variables**: `$@` (target), `$^` (all prerequisites), `$<` (first prerequisite)
- **Phony Targets**: `.PHONY` declaration for non-file targets
- **Dependency Tracking**: Object files depend on source files
- **String Substitution**: `$(SRCS:.c=.o)` to generate object file list
