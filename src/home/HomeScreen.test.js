import React from 'react';
import ReactDOM from 'react-dom';
import HomeScreen from './HomeScreen';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<HomeScreen />, div);
  ReactDOM.unmountComponentAtNode(div);
});
