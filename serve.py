"""Tiny static server that respects $PORT (for Claude Preview autoPort)."""
import os
import http.server
import socketserver

PORT = int(os.environ.get("PORT", "8000"))
HOST = os.environ.get("HOST", "127.0.0.1")

Handler = http.server.SimpleHTTPRequestHandler

class ReusableTCPServer(socketserver.TCPServer):
    allow_reuse_address = True

with ReusableTCPServer((HOST, PORT), Handler) as httpd:
    print(f"Serving http://{HOST}:{PORT}")
    httpd.serve_forever()
