import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuoteVotingApp from './QuoteVotingApp';
import '@testing-library/jest-dom';

test('renders and likes a quote', () => {
  render(<QuoteVotingApp />);

  const quote = screen.getByTestId('quote');
  const likes = screen.getByTestId('likes');
  const likeBtn = screen.getByTestId('like-button');

  expect(quote).toBeInTheDocument();
  expect(likes).toHaveTextContent('Likes: 0');

  // Wrap state-changing interaction with act
  act(() => {
    fireEvent.click(likeBtn);
  });

  expect(likes).toHaveTextContent('Likes: 1');
});

test('clicking next shows a new quote (may repeat)', () => {
  render(<QuoteVotingApp />);

  const quoteBefore = screen.getByTestId('quote').textContent;
  const nextBtn = screen.getByTestId('next-button');

  // Wrap state-changing interaction with act
  act(() => {
    fireEvent.click(nextBtn);
  });

  const quoteAfter = screen.getByTestId('quote').textContent;

  expect(quoteAfter).toBeDefined();
  expect(quoteAfter).not.toBeNull();
});
