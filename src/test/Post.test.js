import { render } from '@testing-library/react';
import { Post } from '../components/PostContainer/post/Post';
import React from 'react';

const post = { id: 0, posts: [{ id: 0, body: 'this is post body' }] };

describe('Handles single post container', () => {
  test('should render without crash', () => {
    render(<Post post={post} />);
  });
});
