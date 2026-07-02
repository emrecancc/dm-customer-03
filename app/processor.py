import re


def process_line(line):
    m = re.match(r'(\w+)=(\d+)', line)
    if m:
        key, value = m.group(1), int(m.group(2))
        return key, value
    return None


def process_file(filepath):
    results = {}
    with open(filepath) as f:
        for line in f:
            res = process_line(line.strip())
            if res:
                key, value = res
                results[key] = value
    return results


if __name__ == "__main__":
    import sys
    if len(sys.argv) != 2:
        print("Usage: processor.py <file>")
        sys.exit(1)
    print(process_file(sys.argv[1]))