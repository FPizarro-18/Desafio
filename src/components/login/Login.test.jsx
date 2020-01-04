import React from 'react';
import ReactDOM from 'react-dom';
import Login from './Login';
import { act } from 'react-dom/test-utils';




let container;
beforeEach(() => {
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it('renders without crashing', () => {
  act(() => {
    ReactDOM.render(<Login />, container);
  });
});
