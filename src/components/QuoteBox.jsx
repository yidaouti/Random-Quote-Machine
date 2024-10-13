import React, { useState } from 'react';
import Quotes from '../data/Quotes';
import { Card, Button } from 'react-bootstrap';

const QuotesBox = () => {
  // Initialize state to store the currently displayed quote
  const [quote, setQuote] = useState(getRandomQuote());

  // Function to get a random quote
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * Quotes.length);
    return Quotes[randomIndex];
  }

  // Handler to get a new random quote when the button is clicked
  const handleNewQuote = () => {
    setQuote(getRandomQuote()); // Update the quote in state
  };

  const tweetQuoteUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(
    `"${quote.text}" - ${quote.author}`
  )}`;

  return (
    <Card id="quote-box" className="text-center" style={{ width: '18rem', margin: '20px auto' }}>
      <Card.Body>
        <Card.Title id="author">{quote.author}</Card.Title>
        <Card.Text id="text">
          "{quote.text}"
        </Card.Text>
        <div className="d-flex justify-content-between">
          <Button variant="primary" id="new-quote" className="btn-sm" onClick={handleNewQuote}>
            New Quote
          </Button>
          <a
            href={tweetQuoteUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-info btn-sm"
            id="tweet-quote"
          >
            Tweet Quote
          </a>
        </div>
      </Card.Body>
    </Card>
  );
};

export default QuotesBox;
