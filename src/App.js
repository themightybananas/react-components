import React from 'react';
import './App.css';
import StarRating from './star-ratings';

function App() {
  return (
    <div className="App">
      <StarRating noOfStars={10}/>
    </div>
  );
}

export default App;
