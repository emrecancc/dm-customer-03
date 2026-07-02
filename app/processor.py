import re


def process_lines(text: str) -> list:
    results = []
    lines = text.splitlines()
    for line in lines:
        m = re.match(r'\(\w\+)=(\d+)', line)
        if m:
            results.append({'key': m.group(1), 'val': int(m.group(2))})
        else:
            chunk = line.strip()
            if chunk:
                results.append({'raw': chunk})
    return results
