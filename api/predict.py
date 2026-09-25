from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):
    def do_POST(self):
        response = {
            "crop": "Tomato",
            "disease": "Late Blight",
            "confidence": "97.3%",
            "treatment": "Apply Copper Fungicide"
        }

        self.send_response(200)
        self.send_header("Content-Type","application/json")
        self.end_headers()
        self.wfile.write(json.dumps(response).encode())
      
