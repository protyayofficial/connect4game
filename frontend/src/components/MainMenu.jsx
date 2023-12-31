// import React from 'react';
import { useNavigate } from 'react-router-dom';
import connect4 from '../assets/connect4NOBG.png'; // Replace 'connect4Image.jpg' with your image file

const MainMenu = () => {
  const navigate = useNavigate();

  const handleClickTP = () => {
    navigate("/two-player-mode");
  };

  const handleClickAI = () => {
    navigate("/play-with-ai-mode");
  };
  return (
    <div className="flex flex-col items-center justify-center pt-10 mt-40">
      <img src={connect4} alt="Connect 4 Image" className="mb-8" style={{ width: '100px', height: '100px' }} />
      <div className="flex flex-col space-y-4 items-center">
        <button onClick={handleClickTP} className="w-40 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Two player mode
        </button>
        <button onClick={handleClickAI} className="w-40 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
          Play with AI
        </button>
        {/* <button className="w-40 bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
          Exit
        </button> */}
      </div>
    </div>
  );
};

export default MainMenu;
