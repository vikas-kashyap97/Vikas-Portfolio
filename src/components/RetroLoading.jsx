import React, { useState, useEffect, useRef } from 'react';

const RetroLoading = ({ onLoaded, updateInterval = 10, increment = 2 }) => {
 
  
  const [stage, setStage] = useState('start');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [loadedResources, setLoadedResources] = useState([]);
  const [currentResourceIndex, setCurrentResourceIndex] = useState(0); 
  const [resourceProgress, setResourceProgress] = useState(0); 
  const audioRef = useRef(null);
  const resources = [
    'Keydown 1 initializing',
    'Keydown 2 initializing',
    'Keydown 3 initializing',
    'Keydown 4 initializing',
    'Keydown 5 initializing',
    'Keydown 6 initializing',
    'CC Type',
    'Startup'
  ];

  useEffect(() => {
    if (stage === 'loading') {
      const audio = audioRef.current;
      if (audio) {
        audio.play(); 
      }

      const interval = setInterval(() => {
        setResourceProgress((prevProgress) => {
          if (prevProgress >= 100) {
           
            setLoadedResources((prevResources) => [...prevResources, resources[currentResourceIndex]]);
            setCurrentResourceIndex((prevIndex) => prevIndex + 1); 

            
            if (currentResourceIndex + 1 < resources.length) {
              return 0;
            } else {
              
              clearInterval(interval);
              setStage('loaded');
              return 100;
            }
          }

          
          const newProgress = prevProgress + increment;
          setLoadingProgress((currentResourceIndex * 100 + newProgress) / resources.length); 
          return newProgress;
        });
      }, updateInterval); 

      return () => clearInterval(interval);
    }

    if (stage === 'loaded') {
      onLoaded();
    }
  }, [stage, currentResourceIndex, resources, onLoaded, increment, updateInterval]);

  const handleStart = () => {
    setStage('loading');
  };

  return (
    <div className="bg-black text-green-500 font-mono p-4 min-h-screen flex flex-col items-center justify-center">
      {stage === 'start' && (
        <div className="text-center">
          <h1 className="text-2xl mb-4">Vikas Kashyap Portfolio 2024</h1>
          <p className="mb-4">Click start to begin</p>
          <button
            onClick={handleStart}
            className="border border-green-500 px-4 py-2 hover:bg-green-500 hover:text-black transition-colors"
          >
            START
          </button>
        </div>
      )}

      {stage === 'loading' && (
        <div className="w-full max-w-md">
          <div className="mb-4">
            <p>Vikas,</p>
            <p>Kashyap Inc.</p>
            <p>Released: 05/11/2023</p>
            <p>HHBIOS (C)2024 Vikas Kashyap Inc.</p>
            <p>HSP S13 2000-2024 Special UC131S</p>
            <p>HSP Showcase(tm) XX 113</p>
            <p>Checking RAM : 14000 OK</p>
          </div>
          <div className="mb-4">
            <p>LOADING RESOURCES ({loadedResources.length}/{resources.length}).</p>
            {loadedResources.map((resource, index) => (
              <p key={index}>
                Loaded {resource} ... 100%
              </p>
            ))}
            {currentResourceIndex < resources.length && (
              <p>Loading {resources[currentResourceIndex]} ... {resourceProgress}%</p>
            )}
          </div>
          <div className="w-full bg-green-900 h-2">
            <div
              className="bg-green-500 h-full transition-all"
              style={{ width: `${loadingProgress}%` }}
            ></div>
          </div>
        </div>
      )}


      <audio ref={audioRef} src="/audio/Intro.mpeg" />
    </div>
  );
};

export default RetroLoading;
