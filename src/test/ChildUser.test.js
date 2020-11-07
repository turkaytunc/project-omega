import { render, fireEvent } from '@testing-library/react';
import { ChildUser } from '../components/user/child/ChildUser';
import React from 'react';

import { GlobalStateProvider } from '../context/GlobalContext';

test('should render without crash', () => {
  render(
    <GlobalStateProvider value={null}>
      <ChildUser />
    </GlobalStateProvider>
  );
});

test('should simulate click event', () => {
  const { getByRole } = render(
    <GlobalStateProvider value={null}>
      <ChildUser />
    </GlobalStateProvider>
  );
  fireEvent.click(getByRole('button'));
});
