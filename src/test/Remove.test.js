import { render } from '@testing-library/react';
import React from 'react';
import { Remove } from '../components/PostContainer/hover-menu/remove/Remove';
import { RemovePostContextProvider } from '../context/RemovePostContext';

test('should render without crash', () => {
  render(
    <RemovePostContextProvider value={null}>
      <Remove />
    </RemovePostContextProvider>
  );
});
