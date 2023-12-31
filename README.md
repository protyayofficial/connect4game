![Flask](https://img.shields.io/badge/flask-%23000.svg?style=for-the-badge&logo=flask&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![Debian](https://img.shields.io/badge/Debian-D70A53?style=for-the-badge&logo=debian&logoColor=white)
# Connect4 Game
This repository contains the code for a Connect Four game built using React for the frontend, Flask for the backend, and Python for the AI logic.

## Features
- Two gameplay modes: Two-player mode and Play with AI mode.
- Intuitive UI with a board for gameplay and options for starting, restarting, and exiting the game.

## Tech Stack
### Frontend
- React
- Vite (for fast development)
- Tailwind CSS (for styling)
- HTML

### Backend
- Flask (Python web framework)
- Python (for AI logic)

## Prerequisites
- Node.js and npm (for running the frontend)
- Python (for running the backend and AI logic)

## Getting Started
### Frontend
1. Clone the repository: <code>git clone https://github.com/yourusername/connect-four.git</code>
2. Navigate to the frontend directory: <code> cd connect-four/frontend</code>
3. Install dependencies: <code> npm install </code>
4. Run the frontend: <code> npm run dev </code>
5. Access the application in your browser at `http://localhost:3000`.

### Backend
1. Navigate to the backend directory: <code> cd ../backend </code>
2. Create a virtual environment (optional but recommended): <code> python -m venv venv
source venv/bin/activate # for Unix/Linux </code>
3. Install Flask and required dependencies: <code> pip install -r requirements.txt </code>
4. Run the Flask server: <code> python app.py </code>

This will start the Flask server for the backend.

## AI Logic
The AI logic is implemented in Python. The Flask backend provides an API endpoint `/get_ai_move` that serves AI moves during the game.

## Additional Notes
Update the `setupProxy.jsx` in the frontend to specify the correct backend URL if the Flask server runs on a different port or domain.

## Credits
Developed by Protyay Dey. Inspired by the classic game of Connect 4.

## License
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)



