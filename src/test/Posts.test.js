import { render, fireEvent } from '@testing-library/react';
import { Posts } from '../components/PostContainer/posts/Posts';
import React from 'react';

import { GlobalStateProvider } from '../context/GlobalContext';
import { PostStateProvider } from '../context/PostContext';
import { RemovePostContextProvider } from '../context/RemovePostContext';

describe('Component rendering tests', () => {
  test('should render without crash', () => {
    render(
      <GlobalStateProvider value={null}>
        <PostStateProvider>
          <RemovePostContextProvider>
            <Posts />
          </RemovePostContextProvider>
        </PostStateProvider>
      </GlobalStateProvider>
    );
  });

  test('should simulate get post button click', () => {
    const { getByRole } = render(
      <GlobalStateProvider value={null}>
        <PostStateProvider>
          <RemovePostContextProvider>
            <Posts />
          </RemovePostContextProvider>
        </PostStateProvider>
      </GlobalStateProvider>
    );

    fireEvent.click(getByRole('button'));
  });
});
