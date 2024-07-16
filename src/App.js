import React from 'react';
import './App.css';
import { useMediaQuery } from 'react-responsive';
import { DragCards } from './components/desktop/DragCards';
import { MobileCardMap } from './components/mobile/MobileCards';

function App() {
  const isMobile = useMediaQuery({ query: '(max-width: 767px)' });

  return (
    <>
      {isMobile ? (
        <MobileCardMap />
      ) : (
          <DragCards />
      )}
    </>
  );
}

export default App;
