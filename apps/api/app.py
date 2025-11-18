from flask import Flask, send_from_directory
from flask_cors import CORS
from pathlib import Path

app = Flask(__name__)
CORS(app)


current_file = Path(__file__).resolve()
current_dir = current_file.parent
client_dist_path = current_dir.parent / "web" / "dist"


# Static files - serve all static assets
@app.route("/assets/<path:filename>")
def static_files(filename):
    """Serve static assets."""
    assets_path = client_dist_path / "assets"
    return send_from_directory(str(assets_path), filename)


# Catch-all route - serves index.html for SPA routing
@app.route("/", defaults={"path": ""})
@app.route("/<path:path>")
def catch_all(path):
    """Serve index.html for all routes (SPA routing)."""
    return send_from_directory(str(client_dist_path), "index.html")


if __name__ == "__main__":
    app.run(debug=False, port=5000)
