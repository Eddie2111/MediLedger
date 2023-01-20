import sys
sys.path.append('/controller')
sys.path.append('/model')

## custom modules ##
from controller.signupValidation import signupValidation
from model.signupSchema import profiles
## custom modules ##

## modules ##
from flask import Flask, jsonify, request
from flask_cors import CORS
from pymongo import MongoClient
## modules ##

## database ##
client = MongoClient("mongodb://localhost:27017")
db = client['MediLedger']
## database ##

app = Flask(__name__)
cors = CORS(app, resources={r"/auth/*": {
        "origins": "http://localhost:3000", 
        "methods": ["GET", "POST"], 
        "supports_credentials": "true",
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Access-Control-Allow-Credentials": "true"}
    })
CORS(app)

@app.route('/')
def index():
    return jsonify({'message': 'Hello, World!'})

@app.route('/data', methods=['GET'])
def data():
    if request.method == 'POST':
        return jsonify({'data': [1, 2, 3, 4, 5]})

@app.route("/auth/login", methods=['POST'])
def signin():
    data = request.get_json()
    email = data['email']
    password = data['password']
    return jsonify({'data': [email, password]})

@app.route("/auth/signup", methods=['POST'])
def signup():
    data = request.get_json()
    dataset = signupValidation(data)
    name        = data['name'];
    email       = data['email'];
    password    = data['password'];
    createdAt   = data["createdAt"];
    updatedAt   = data["updatedAt"];
    accessRight = True;
    nidNumber   = data['nidNumber'];
    phoneNumber = data['phoneNumber'];
    licesnseNumber = data['licenseNumber'];
    return jsonify({'data': dataset})

if __name__ == '__main__':
    app.run(debug=True)