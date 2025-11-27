from email import message
from flask import Blueprint
from werkzeug.exceptions import HTTPException
from src.lib.serve_page.serve_page import serve_error_page

errors_bp = Blueprint("errors", __name__)


@errors_bp.app_errorhandler(HTTPException)
def handle_http_error(exc: HTTPException):
    return serve_error_page(exc.code)


@errors_bp.app_errorhandler(Exception)
def serve_route_events(exc: Exception):
    return serve_error_page(500)
