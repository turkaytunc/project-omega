import { render, fireEvent } from '@testing-library/react';
import { Post } from '../components/PostContainer/post/Post';
import React from 'react';

import { GlobalStateProvider } from '../context/GlobalContext';
import { PostStateProvider } from '../context/PostContext';

const post = {
  id: 0,
  posts: [
    { id: 0, body: 'this is post body', title: 'this is a title' },
    { id: 1, body: 'this is post body', title: 'this is a title' },
  ],
};

describe('Handles single post container', () => {
  test('should render without crash', () => {
    render(<Post post={post} />);
  });
});

test('should fire onchange event', () => {
  const { getByRole } = render(
    <GlobalStateProvider value={null}>
      <PostStateProvider>
        <Post post={post} />
      </PostStateProvider>
    </GlobalStateProvider>
  );

  fireEvent.input(getByRole('searchbox'), { target: { value: '31' } });
});
