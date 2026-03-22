import sys
import subprocess
try:
    import PyPDF2
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "PyPDF2"])
    import PyPDF2

def extract_text(pdf_path):
    text = ""
    with open(pdf_path, "rb") as file:
        reader = PyPDF2.PdfReader(file)
        for page in reader.pages:
            text += page.extract_text() + "\n"
    with open("resume.txt", "w", encoding="utf-8") as out:
        out.write(text.strip())

if __name__ == "__main__":
    extract_text("Ahmed Resume.pdf")
