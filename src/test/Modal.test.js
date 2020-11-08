import { render } from '@testing-library/react';
import React from 'react';
import { Modal } from '../components/PostContainer/hover-menu/modal/Modal';

test('should render without crashing', () => {
  render(<Modal></Modal>);
});

test('should check text node count', () => {
  const { container } = render(<Modal></Modal>);
  expect(container.TEXT_NODE).toBe(3);
});
