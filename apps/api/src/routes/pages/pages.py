from flask import Blueprint
from src.lib.serve_page.serve_page import serve_page
from src.lib.serve_asset.serve_asset import serve_asset

pages_bp = Blueprint("pages", __name__)


@pages_bp.route("/assets/<path:filename>")
def serve_static_assets(filename):
    return serve_asset(filename)


@pages_bp.route("/")
def serve_route_index():
    return serve_page("index.html")


@pages_bp.route("/events")
def serve_route_events():
    return serve_page("events.html", subdir="pages")


@pages_bp.route("/about")
def serve_route_about():
    return serve_page("about.html", subdir="pages")


@pages_bp.route("/contact")
def serve_route_contact():
    return serve_page("contact.html", subdir="pages")


@pages_bp.route("/login")
def serve_route_login():
    return serve_page("login.html", subdir="pages")


@pages_bp.route("/signup")
def serve_route_signup():
    return serve_page("signup.html", subdir="pages")
