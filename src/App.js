import React from 'react';
import './App.css';
import SortingVisualizer from './SortingVisualizer/SortingVisualizer';

function App() {
  return (
    <div className="App">
      <div className="header">
        <h1>Sorting Visualizer</h1>
        <p>Choose the algorithm, and watch it sort!</p>
      </div>
      <SortingVisualizer></SortingVisualizer>
    </div>
  );

  
}

export default App;
