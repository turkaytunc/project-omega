import { render, screen } from '@testing-library/react';
import { SinglePost } from '../components/PostContainer/single-post/SinglePost';

const mockPost = {
  id: 1,
  title: 'Mock title',
  body: 'This is a test string!',
};

it('renders without crash', () => {
  render(<SinglePost post={mockPost} />);
});

it('should render Mock title', () => {
  render(<SinglePost post={mockPost} />);
  expect(screen.getByText(/Mock title/)).toBeInTheDocument();
});

it('should render This is a test string!', () => {
  render(<SinglePost post={mockPost} />);
  expect(screen.getByText(/This is a test string!/)).toBeInTheDocument();
});
