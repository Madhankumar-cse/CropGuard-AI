from http.server import BaseHTTPRequestHandler
import json

class handler(BaseHTTPRequestHandler):

    def do_POST(self):

        response={

            "crop":"Tomato",

            "disease":"Late Blight",

            "confidence":"97.8%",

            "severity":"High",

            "treatment":"Apply Copper Fungicide immediately and remove infected leaves.",

            "prevention":"Avoid overhead watering, maintain airflow and inspect plants regularly."

        }

        self.send_response(200)
        self.send_header("Content-Type","application/json")
        self.end_headers()
        self.wfile.write(json.dumps(response).encode())
