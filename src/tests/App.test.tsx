import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from '../state';
import App from '../App';

test('renders react app', () => {
  const { asFragment } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );
});
