import React from 'react';
import ReactDOM from 'react-dom';
import SearchTable from './SearchTable';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchTable />, div);
  ReactDOM.unmountComponentAtNode(div);
});