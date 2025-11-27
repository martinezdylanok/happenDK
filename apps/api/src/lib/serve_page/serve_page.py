from flask import send_from_directory
from typing import Optional
from src.lib.path_builder.path_builder import get_client_dist_path

CLIENT_DIST_PATH = get_client_dist_path()


def serve_page(filename: str, subdir: Optional[str] = None):
    base_path = CLIENT_DIST_PATH / subdir if subdir else CLIENT_DIST_PATH
    return send_from_directory(str(base_path), filename)


def serve_error_page(status_code: int):
    filename = f"{status_code}.html"
    return serve_page(filename, subdir="pages/errors"), status_code
