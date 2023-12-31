// import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Header() {
  const navigate = useNavigate();
  
  const handleClickHome = () => {
    navigate("/");
  };

  return (
    <header className="flex items-center justify-between gap-4 p-4">
      <h1 className='text-2xl md:text-2xl font-bold'>
        Connect<span className="text-blue-400 font-bold text-2xl md:text-3xl">4</span>
      </h1>
      <button onClick={handleClickHome} className="flex items-center gap-2 specialBtn px-4 py-2 rounded-lg text-blue-400">
        <p className='text-xl'>Home</p>
        <i className="fa-solid fa-house"></i>
      </button>
    </header>
  );
}
