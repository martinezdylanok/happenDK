from flask import send_from_directory
from src.lib.path_builder.path_builder import get_client_dist_path

CLIENT_DIST_PATH = get_client_dist_path()
ASSETS_PATH = CLIENT_DIST_PATH / "assets"


def serve_asset(filename: str):
    return send_from_directory(str(ASSETS_PATH), filename)
