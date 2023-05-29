import React, { useState } from 'react';
import './App.css'

const list = [
  "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  "Don't be afraid to give up the good to go for the great. - John D. Rockefeller",
  "Always remember that you are absolutely unique. Just like everyone else.",
  "Don't judge each day by the harvest you reap but by the seeds that you plant.",
  "The future belongs to those who believe in the beauty of their dreams.",
  "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
  "It is during our darkest moments that we must focus to see the light.",
  "Whoever is happy will make others happy too.",
  "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  "If life were predictable it would cease to be life and be without flavor." ,
  "You will face many defeats in life, but never let yourself be defeated."
];

const App = () => {
  const [quote, setQuote] = useState('Quote✔');

  const Quote = () => {
    const randomIndex = Math.floor(Math.random() * list.length);
    setQuote(list[randomIndex]);
  };

  return (
    <div className='one'>
    <div className='two'>
      <h1>Quote : 👀</h1>
      <button onClick={Quote}>🎲</button>
      <div className='three'>
        <button>{quote}</button> 
      </div>
      
    </div>
    </div>
  );
};

export default App;