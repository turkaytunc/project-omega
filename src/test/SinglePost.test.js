import { render, screen, fireEvent } from '@testing-library/react';
import { SinglePost } from '../components/PostContainer/single-post/SinglePost';

const mockPost = {
  id: 1,
  title: 'Mock title',
  body: 'This is a test string!',
};

describe('Render react component', () => {
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
});

describe('Check mouse events', () => {
  test('should simulate mouse enter', () => {
    const { getByRole } = render(<SinglePost post={mockPost} />);
    fireEvent.mouseEnter(getByRole('list'));
  });

  test('should simulate mouse leave', () => {
    const { getByRole } = render(<SinglePost post={mockPost} />);
    fireEvent.mouseLeave(getByRole('list'));
  });
});
