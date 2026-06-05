from pathlib import Path
from uuid import uuid4

from fastapi import UploadFile

from app.config import get_settings


def save_upload(file: UploadFile, subdirectory: str) -> tuple[str, str]:
    settings = get_settings()
    upload_dir = Path(__file__).resolve().parents[2] / settings.upload_dir / subdirectory
    upload_dir.mkdir(parents=True, exist_ok=True)

    extension = Path(file.filename or "").suffix
    file_name = f"{uuid4().hex}{extension}"
    file_path = upload_dir / file_name
    with file_path.open("wb") as buffer:
        buffer.write(file.file.read())

    relative_path = str(file_path.relative_to(Path(__file__).resolve().parents[2]))
    return file_name, relative_path
