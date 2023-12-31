<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
<!--   <title>Connect Four Game</title> -->
</head>
<body>
  <h1>Connect Four Game</h1>
  <p>This repository contains the code for a Connect Four game built using React for the frontend, Flask for the backend, and Python for the AI logic.</p>
  
  <h2>Features</h2>
  <ul>
    <li>Two gameplay modes: Two-player mode and Play with AI mode.</li>
    <li>Intuitive UI with a board for gameplay and options for starting, restarting, and exiting the game.</li>
  </ul>
  
  <h2>Tech Stack</h2>
  <h3>Frontend</h3>
  <ul>
    <li>React</li>
    <li>Vite (for fast development)</li>
    <li>Tailwind CSS (for styling)</li>
    <li>HTML</li>
  </ul>
  
  <h3>Backend</h3>
  <ul>
    <li>Flask (Python web framework)</li>
    <li>Python (for AI logic)</li>
  </ul>
  
  <h2>Prerequisites</h2>
  <ul>
    <li>Node.js and npm (for running the frontend)</li>
    <li>Python (for running the backend and AI logic)</li>
  </ul>
  
  <h2>Getting Started</h2>
  <h3>Frontend</h3>
  <ol>
    <li>Clone the repository:</li>
    <code>git clone https://github.com/yourusername/connect-four.git</code>    
    <li>Navigate to the frontend directory:</li>
    <code>cd connect-four/frontend</code>
    <li>Install dependencies:</li>
    <code>npm install</code>    
    <li>Run the frontend:</li>
    <code>npm run dev</code>    
    <li>Access the application in your browser at <code>http://localhost:3000</code>.</li>
  </ol>
  
  <h3>Backend</h3>
  <ol>
    <li>Navigate to the backend directory:</li>
    <code>cd ../backend</code>    
    <li>Create a virtual environment (optional but recommended):</li>
    <code>python -m venv venv</code>
    <code>source venv/bin/activate</code> (for Unix/Linux)    
    <li>Install Flask and required dependencies:</li>
    <code>pip install -r requirements.txt</code>    
    <li>Run the Flask server:</li>
    <code>python app.py</code>    
    <li>This will start the Flask server for the backend.</li>
  </ol>
  
  <h2>AI Logic</h2>
  <p>The AI logic is implemented in Python. The Flask backend provides an API endpoint <code>/get_ai_move</code> that serves AI moves during the game.</p>
  
  <h2>Additional Notes</h2>
  <p>Update the <code>setupProxy.jsx</code> in the frontend to specify the correct backend URL if the Flask server runs on a different port or domain.</p>

  <h2>Credits</h2>
  <p>Developed by Protyay Dey. Inspired by the classic game of Connect 4.</p>
  
  <h2>License</h2>
  <p>This project is licensed under the <a href="LICENSE">MIT License</a>.</p>
</body>
</html>
