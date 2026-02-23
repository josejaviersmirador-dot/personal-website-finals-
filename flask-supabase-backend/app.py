import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from supabase import create_client, Client

app = Flask(__name__)
CORS(app) 

SUPABASE_URL = os.environ.get("SUPABASE_URL")
SUPABASE_KEY = os.environ.get("SUPABASE_KEY")

if SUPABASE_URL and SUPABASE_KEY:
    supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

@app.route('/comments', methods=['GET'])
def get_comments():
    try:
        # Note: Change 'comments' if your actual Supabase table has a different name
        response = supabase.table('comments').select('*').execute()
        return jsonify(response.data), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/comments', methods=['POST'])
def add_comment():
    try:
        data = request.json
        # This takes the JSON sent from your frontend and inserts it into Supabase
        response = supabase.table('comments').insert(data).execute()
        return jsonify(response.data), 201
    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/', methods=['GET'])
def home():
    return "Backend is running!", 200

if __name__ == '__main__':
    app.run(debug=True, port=5000)