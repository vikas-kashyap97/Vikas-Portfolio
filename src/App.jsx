import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RetroLoading from './components/RetroLoading';
import RootLayout from './components/RootLayout';
import MatrixRain from './components/MatrixRain';
import customCursor from '/cursor.png'


const initializeButtonSound = () => {
  const audio = new Audio('/audio/Buttons.mpeg');

  const playSound = () => {
    audio.currentTime = 0;
    audio.play();
  };

  const handleClick = (event) => {
    if (event.target.tagName.toLowerCase() === 'button' || 
        event.target.tagName.toLowerCase() === 'a') {
      playSound();
    }
  };

  document.addEventListener('click', handleClick);

  return () => {
    document.removeEventListener('click', handleClick);
  };
};

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  
  useEffect(() => {
    const cleanup = initializeButtonSound();
    return cleanup;
  }, []);

  return (
    <Router>
      <div className="flex flex-col min-h-screen custom-Cursor overflow-y-scroll scrollbar-hide"
      style={{
        cursor: `url(${customCursor}), crosshair`,
      }}
      >
      <section className="font">
        {!isLoaded && <RetroLoading onLoaded={handleLoaded} />}
        {isLoaded && (
          <>
            <MatrixRain />
            <Routes>
              <Route path="/" element={<RootLayout />} />
            </Routes>
          </>
        )}
      </section>
      </div>
    </Router>
  );
}

export default App;