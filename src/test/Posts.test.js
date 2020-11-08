import { render, fireEvent } from '@testing-library/react';
import { Posts } from '../components/PostContainer/posts/Posts';
import React from 'react';

import { GlobalStateProvider } from '../context/GlobalContext';
import { PostStateProvider } from '../context/PostContext';

describe('Component rendering tests', () => {
  test('should render without crash', () => {
    render(
      <GlobalStateProvider value={null}>
        <PostStateProvider>
          <Posts />
        </PostStateProvider>
      </GlobalStateProvider>
    );
  });

  test('should simulate get post button click', () => {
    const { getByRole } = render(
      <GlobalStateProvider value={null}>
        <PostStateProvider>
          <Posts />
        </PostStateProvider>
      </GlobalStateProvider>
    );

    fireEvent.click(getByRole('button'));
  });
});
