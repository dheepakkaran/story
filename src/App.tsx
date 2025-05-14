import React from 'react';
import Header from './components/Header';
import StoryContainer from './components/StoryContainer';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-amber-50 text-stone-800">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="pattern-overlay opacity-5"></div>
      </div>

      <Header />
      <StoryContainer />
      <Footer />
    </div>
  );
}

export default App;