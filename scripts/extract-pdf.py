from pypdf import PdfReader
from pathlib import Path

root = Path(__file__).resolve().parent.parent
docs = root / "docs"
pdfs = sorted(docs.glob("*.pdf"))

for path in pdfs:
    r = PdfReader(str(path))
    text = "\n".join((p.extract_text() or "") for p in r.pages)
    out = path.with_suffix(".txt")
    out.write_text(text, encoding="utf-8")
    print(f"{path.name}: {len(r.pages)} pages, {len(text)} chars -> {out.name}")
    print(text[:2000])
    print("---")
