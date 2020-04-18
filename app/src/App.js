import React from 'react';
import './App.css';

import Recipes from "./components/Recipes"

function App() {
  return (
    <div className="App">
      <Recipes />
      <footer>
        <p>Photo by Charles Deluvio on Unsplash</p>
      </footer>
    </div>
  );
}

export default App;
