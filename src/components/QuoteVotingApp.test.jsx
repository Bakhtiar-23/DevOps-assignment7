import React, { act } from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import QuoteVotingApp from './QuoteVotingApp';
import '@testing-library/jest-dom';

// eslint-disable-next-line no-undef
test('renders and likes a quote', () => {
  render(<QuoteVotingApp />);

  const quote = screen.getByTestId('quote');
  const likes = screen.getByTestId('likes');
  const likeBtn = screen.getByTestId('like-button');

  // eslint-disable-next-line no-undef
  expect(quote).toBeInTheDocument();
  // eslint-disable-next-line no-undef
  expect(likes).toHaveTextContent('Likes: 0');

  act(() => {
    fireEvent.click(likeBtn);
  });

  // eslint-disable-next-line no-undef
  expect(likes).toHaveTextContent('Likes: 1');
});

// eslint-disable-next-line no-undef
test('clicking next still displays a quote', () => {
  render(<QuoteVotingApp />);

  const nextBtn = screen.getByTestId('next-button');

  act(() => {
    fireEvent.click(nextBtn);
  });

  const quoteAfter = screen.getByTestId('quote').textContent;

  // eslint-disable-next-line no-undef
  expect(quoteAfter).toBeDefined();
  // eslint-disable-next-line no-undef
  expect(quoteAfter).not.toBeNull();
});
