import React from 'react';
import ReactDOM from 'react-dom';
import Registro from './Registro';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Registro />, div);
  ReactDOM.unmountComponentAtNode(div);
});
