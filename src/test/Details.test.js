import { render, fireEvent } from '@testing-library/react';
import React from 'react';
import { Details } from '../components/PostContainer/hover-menu/details/Details';
import { ModalStateContextProvider } from '../context/ModalStateContext';
import { ModalContextProvider } from '../context/ModalContext';

test('should render without crash', () => {
  render(
    <ModalStateContextProvider value={null}>
      <ModalContextProvider value={null}>
        <Details post={null} />
      </ModalContextProvider>
    </ModalStateContextProvider>
  );
});

test('should fire event without crash', () => {
  const { getByRole } = render(
    <ModalStateContextProvider value={null}>
      <ModalContextProvider value={null}>
        <Details post={null} />
      </ModalContextProvider>
    </ModalStateContextProvider>
  );

  fireEvent.click(getByRole('listitem'));
});
