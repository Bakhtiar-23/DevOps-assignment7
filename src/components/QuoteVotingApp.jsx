import React from 'react'; 
import { useState } from 'react';


const quotes = [
  "Talk is cheap. Show me the code. – Linus Torvalds",
  "Programs must be written for people to read. – Harold Abelson",
  "Any fool can write code that a computer can understand. – Martin Fowler",
  "Code is like humor. When you have to explain it, it’s bad. – Cory House",
];

function QuoteVotingApp() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [likes, setLikes] = useState(Array(quotes.length).fill(0));

  const handleLike = () => {
    const updated = [...likes];
    updated[currentIndex]++;
    setLikes(updated);
  };

  const nextQuote = () => {
    const random = Math.floor(Math.random() * quotes.length);
    setCurrentIndex(random);
  };

  return (
    <div>
      <h2>Programming Quotes</h2>
      <blockquote data-testid="quote">{quotes[currentIndex]}</blockquote>
      <p data-testid="likes">Likes: {likes[currentIndex]}</p>
      <button onClick={handleLike} data-testid="like-button">👍 Like</button>
      <button onClick={nextQuote} data-testid="next-button">Next Quote</button>
    </div>
  );
}

export default QuoteVotingApp;
