// import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import MainMenu from './components/MainMenu';
import TwoPlayerMode from './components/TwoPlayerMode';
import PlayWithAIMode from './components/PlayWithAIMode';
// Import other necessary components as needed

function App() {
  return (
    <Router>
      <div className="flex flex-col mx-auto w-full">
        <section className="min-h-screen flex flex-col">
          <Header />
          <Routes>
            <Route exact path="/" element={<MainMenu />} />
            <Route exact path="/two-player-mode" element={<TwoPlayerMode />} />
            <Route exact path="/play-with-ai-mode" element={<PlayWithAIMode />} />
          </Routes>
          <Footer />
        </section>
      </div>
    </Router>
  );
}

export default App;
