from flask import Flask, jsonify, request
from flask_cors import CORS
import logging
from ai_logic import ConnectFourAI  # Import your ConnectFourAI class


connect_four_ai = ConnectFourAI()

app = Flask(__name__)
CORS(app)
@app.route('/get_ai_move', methods=['POST'])
def get_ai_move():
    # logging.warning("here")
    if request.method == 'POST':
        data = request.json  # Extract JSON data from the request
        board_state = data.get('boardState')  
        
        logging.warning(data)


        ai_column = connect_four_ai.ai_move(board_state)

        return jsonify({"column": ai_column})
    else:
        return "Method Not Allowed"


if __name__ == '__main__':
    app.run(debug=True)
