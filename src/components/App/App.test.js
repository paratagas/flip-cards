import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

/* eslint-disable no-undef */
test('renders a message', () => {
  const { container } = render(<App />);
  
  expect(container.firstChild).toMatchInlineSnapshot(`
    <div className="App__container">
  `)
})
