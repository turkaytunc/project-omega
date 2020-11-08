import { render } from '@testing-library/react';
import React from 'react';
import { DetailsModal } from '../components/PostContainer/hover-menu/details-modal/DetailsModal';

test('should render without crashing', () => {
  render(<DetailsModal></DetailsModal>);
});

test('should check text node count', () => {
  const { container } = render(<DetailsModal></DetailsModal>);
  expect(container.TEXT_NODE).toBe(3);
});
