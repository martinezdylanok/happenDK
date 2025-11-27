import logging
import os

from flask import Flask
from flask_cors import CORS

from src.routes.pages import pages_bp
from src.routes.errors import errors_bp

app = Flask(__name__)
CORS(app)

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

debug_mode = os.getenv("FLASK_DEBUG", "0") == "1"
port = int(os.getenv("PORT", "5000"))

app.register_blueprint(pages_bp)
app.register_blueprint(errors_bp)


if __name__ == "__main__":
    app.run(debug=debug_mode, port=port)
