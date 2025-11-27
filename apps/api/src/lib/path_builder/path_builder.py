from pathlib import Path


def get_client_dist_path():
    current_file = Path(__file__).resolve()
    api_dir = current_file.parents[3]
    apps_dir = api_dir.parent
    return apps_dir / "web" / "dist"
