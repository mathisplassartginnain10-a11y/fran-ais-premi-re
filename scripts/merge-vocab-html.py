from pathlib import Path

root = Path(__file__).resolve().parent.parent
index = root / "index.html"
vocab = (root / "partials" / "m-vocab.html").read_text(encoding="utf-8")
text = index.read_text(encoding="utf-8")
marker = "</div><!-- /m-gram -->"
if 'id="m-vocab"' not in text:
    text = text.replace(marker, marker + "\n\n" + vocab)
    index.write_text(text, encoding="utf-8")
    print("inserted m-vocab")
else:
    print("m-vocab already present")
